import Navbar from "./Navbar";
import Head from "next/head";

interface Props {
    currPage: string;
    pageTitle: string;
}

const PageWrapper: React.FC<Props> = ({ currPage, children, pageTitle }) => {
    return (
        <div className="flex flex-row">
            <Head>
                <title>{pageTitle}</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <Navbar currPage={currPage} />
            <div className="p-6 w-full">{children}</div>
        </div>
    );
};

export default PageWrapper;
