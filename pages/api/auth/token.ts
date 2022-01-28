import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

async function generateNewToken(req: NextApiRequest, res: NextApiResponse) {
  const temp = await fetch(`${process.env.COGNITO_DOMAIN!}/oauth2/token`, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${process.env.COGNTIO_CLIENT_BASE64!}`,
    },
    method: "POST",
    body: Object.entries({
      grant_type: "refresh_token",
      client_id: process.env.COGNITO_CLIENT_ID!,
      refresh_token: req.body.refreshToken,
    })
      .map(([k, v]) => `${k}=${v}`)
      .join("&"),
  });
  if (!temp.ok) {
    return res.status(500).json({
      msg: "Error generating new token",
    });
  }
  const newTokens = await temp.json();
  return newTokens;
}

async function handlePostRequest(req: NextApiRequest, res: NextApiResponse) {
  // Check authorization
  const session = await getSession({ req });
  if (!session) {
    return res.status(401).json({
      msg: "Not signed in",
    });
  }

  const newTokens = await generateNewToken(req, res);
  return res.json(newTokens);
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  switch (method) {
    case "POST": {
      return handlePostRequest(req, res);
    }
    default: {
      return res.status(404).json({
        msg: "Route not found",
      });
    }
  }
}
