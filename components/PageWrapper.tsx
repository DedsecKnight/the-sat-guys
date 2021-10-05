import Navbar from "./Navbar";

interface Props {
    currPage: string;
}

const PageWrapper: React.FC<Props> = ({ currPage, children }) => {
    return (
        <div className="flex flex-row">
            <Navbar currPage={currPage} />
            <div className="p-6">{children}</div>
        </div>
    );
};

export default PageWrapper;
