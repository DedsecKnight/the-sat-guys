import { useEffect } from "react";
import Hamburger from "../components/Hamburger";
import { useNavContext } from "../components/NavContext";
import RecentExam from "../components/RecentExam";
import SearchBar from "../components/SearchBar";

export default function HomePage() {
  const { updateEndpoint } = useNavContext();
  useEffect(() => {
    updateEndpoint("/", "Dashboard");
  }, []);

  return (
    <>
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center w-full gap-x-6">
          <Hamburger />
          <SearchBar />
        </div>
        <div>
          <h1 className="text-xl font-semibold">Admin</h1>
        </div>
      </div>
      <div className="my-10">
        <h1 className="text-3xl font-bold">Welcome, Admin</h1>
        <RecentExam />
      </div>
    </>
  );
}
