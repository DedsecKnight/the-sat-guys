import type { NextPage } from "next";
import PageWrapper from "../components/PageWrapper";
import SearchBar from "../components/SearchBar";

const Home: NextPage = () => {
    return (
        <PageWrapper currPage="/">
            <SearchBar />
        </PageWrapper>
    );
};

export default Home;
