import type { NextPage } from "next";
import Hamburger from "../components/Hamburger";
import PageWrapper from "../components/PageWrapper";
import RecentExam from "../components/RecentExam";
import SearchBar from "../components/SearchBar";

const Home: NextPage = () => {
    return (
        <PageWrapper currPage="/" pageTitle="Dashboard">
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
        </PageWrapper>
    );
};

export default Home;
