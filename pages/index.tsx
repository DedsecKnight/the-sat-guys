import { useEffect } from "react";
import { useNavContext } from "../components/NavContext";
import RecentDonation from "../components/RecentDonation";
import RecentExam from "../components/RecentExam";

export default function HomePage() {
  const { updateEndpoint } = useNavContext();
  useEffect(() => {
    updateEndpoint("/", "Dashboard");
  }, []);

  return (
    <div className="my-10">
      <h1 className="text-3xl font-bold">Welcome, Admin</h1>
      <RecentExam />
      <RecentDonation />
    </div>
  );
}
