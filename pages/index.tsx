import type { NextPage } from "next";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
    return (
        <div className="flex flex-row">
            <Navbar currPage="/" />
        </div>
    );
};

export default Home;
