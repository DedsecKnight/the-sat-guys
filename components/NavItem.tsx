interface Props {
    active: boolean;
    icon: any;
    title: string;
}

const NavItem: React.FC<Props> = ({ active, icon, title }) => {
    return (
        <div
            className={`p-3 flex flex-row gap-x-2 items-center ${
                active && "bg-green-500"
            } rounded-xl`}
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
            <h1 className={active ? "text-white" : "text-black"}>{title}</h1>
        </div>
    );
};

export default NavItem;
