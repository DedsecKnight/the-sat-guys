import { GetServerSideProps } from "next";
import { useEffect } from "react";
import { useNavContext } from "../components/context-api/NavContext";
import GenerateView from "../components/generate/GenerateView";
import { RequestHelper } from "../lib/request-helper";

interface GeneratePageProps {
  topicList: Array<{ subtopic: string; section: string }>;
}

export default function GeneratePage({ topicList }: GeneratePageProps) {
  const { updateEndpoint } = useNavContext();
  useEffect(() => {
    updateEndpoint("/generate", "Generate Exam");
  });

  return (
    <div className="my-10 flex flex-col gap-y-6">
      <h1 className="text-3xl font-bold">{`Let's get you prepared for an exam`}</h1>
      <GenerateView topicList={topicList} />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const protocol = context.req.headers.referer?.split("://")[0] || "http";

  const { data: topicList } = await RequestHelper.get<
    Array<{ subtopic: string; section: string }>
  >(`${protocol}://${context.req.headers.host}/api/topic`, {});
  return {
    props: {
      topicList,
    },
  };
};
