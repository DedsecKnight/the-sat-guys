import { useEffect } from "react";

const SearchBar = () => {
    useEffect(() => {
        document.querySelector("#search")?.addEventListener("focusin", () => {
            document
                .querySelector(".search-box")
                ?.classList.add("border-green-400");
        });
        document.querySelector("#search")?.addEventListener("focusout", () => {
            document
                .querySelector(".search-box")
                ?.classList.remove("border-green-400");
        });
    }, []);
    return (
        <div className="search-box border-2 rounded-xl flex flex-row items-center p-3 gap-x-2 w-4/5">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
            </svg>
            <input
                id="search"
                placeholder="Search"
                className="outline-none w-full"
            />
        </div>
    );
};

export default SearchBar;
