import { NextApiRequest, NextApiResponse } from "next";
import { RequestHelper } from "../../lib/request-helper";

async function handleGetRequest(req: NextApiRequest, res: NextApiResponse) {
  try {
    const data = await RequestHelper.post<unknown, unknown>(
      `${process.env.API_ORIGIN}/donateFetchTopic`,
      {
        "Content-Type": "application/json",
      },
      {
        action: "fetchTopic",
      }
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
  if (method == "GET") {
    return handleGetRequest(req, res);
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${method} Not Allowed`);
  }
}
