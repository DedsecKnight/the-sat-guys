import { GetServerSideProps } from "next";
import { useEffect } from "react";
import { useNavContext } from "../components/context-api/NavContext";
import DonateView from "../components/donate/DonateView";
import { RequestHelper } from "../lib/request-helper";

interface DonatePageProps {
  topicList: Array<{
    subtopic: string;
    section: string;
  }>;
}

export default function DonatePage({ topicList }: DonatePageProps) {
  const { updateEndpoint } = useNavContext();

  useEffect(() => {
    updateEndpoint("/donate", "Donate Question");
  }, []);

  return (
    <div className="my-10 flex flex-col gap-y-6">
      <h1 className="text-3xl font-bold">Let's donate a question</h1>
      <DonateView topicList={topicList} />
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
