import { GetServerSideProps } from "next";
import ExamView from "../components/exam/ExamView";
import { ExamConfig } from "../interfaces/ExamConfig";
import { RequestHelper } from "../lib/request-helper";

interface ExamPageProps {
  exam: ExamConfig;
}

export default function ExamPage({ exam }: ExamPageProps) {
  if (!exam) {
    return <div>400: Bad Request Error</div>;
  }
  return <ExamView exam={exam} />;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { status, data } = await RequestHelper.get<ExamConfig>(
    `http://${context.req.headers.host}/api/exam?id=${context.query.id}`,
    {
      "Content-Type": "application/json",
    }
  );

  if (!status) {
    return {
      props: {},
    };
  }

  return {
    props: {
      exam: {
        ...data,
        exam_id: context.query.id,
      } as ExamConfig,
    },
  };
};
