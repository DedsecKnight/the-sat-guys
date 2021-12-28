import Link from "next/link";

interface Props {
    active: boolean;
    icon: any;
    title: string;
    redirect: string;
}

const NavItem: React.FC<Props> = ({ active, icon, title, redirect }) => {
    return (
        <Link href={redirect}>
            <div
                className={`p-3 flex flex-row gap-x-2 items-center cursor-pointer ${
                    active ? "bg-green-500" : "hover:bg-green-300"
                } rounded-xl mb-2`}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke={active ? "white" : "currentColor"}
                >
                    {icon}
                </svg>
                <h1 className={active ? "text-white" : "text-black"}>
                    {title}
                </h1>
            </div>
        </Link>
    );
};

export default NavItem;
