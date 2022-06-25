import { NextApiRequest, NextApiResponse } from "next";
import { RequestHelper } from "../../lib/request-helper";

async function handleGetRequest(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { status, data } = await RequestHelper.post<any, any>(
      `${process.env.API_ORIGIN}/fetchExam`,
      {
        "Content-Type": "application/json",
      },
      {
        action: "fetchExam",
        exam_id: req.query.id,
        section: "",
      }
    );

    return res.json({
      status,
      data,
    });
  } catch (error) {
    return res.json({
      status: false,
      data: "500 Server Error",
    });
  }
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  switch (method) {
    case "GET": {
      return handleGetRequest(req, res);
    }
    default: {
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} not allowed`);
    }
  }
}
