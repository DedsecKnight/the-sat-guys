import { NextApiRequest, NextApiResponse } from "next";
import { RequestHelper } from "../../lib/request-helper";

async function handlePostRequest(req: NextApiRequest, res: NextApiResponse) {
  try {
    const data = await RequestHelper.post<unknown, unknown>(
      `${process.env.API_ORIGIN}/donate`,
      {
        "Content-Type": "application/json",
      },
      req.body
    );
    res.json(data);
  } catch (error) {
    console.error(error);
    res.json({
      status: false,
      data: "500 Server Error",
    });
  }
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  switch (method) {
    case "POST": {
      return handlePostRequest(req, res);
    }
    default: {
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${method} not allowed`);
    }
  }
}
