import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useNavContext } from "../components/context-api/NavContext";
import RecentDonation from "../components/dashboard/RecentDonation";
import RecentExam from "../components/dashboard/RecentExam";

export default function HomePage() {
  const { updateEndpoint } = useNavContext();
  useEffect(() => {
    updateEndpoint("/", "Dashboard");
  }, []);
  const { data: session } = useSession();
  if (!session) return <div></div>;

  return (
    <div className="my-10">
      <h1 className="text-3xl font-bold">
        Welcome, {session.user ? session.user.name : "user"}
      </h1>
      <h1 className="my-6 text-xl">
        Oops, there is nothing here at the moment!
      </h1>
      {/* <RecentExam />
      <RecentDonation /> */}
    </div>
  );
}
