import { useNavContext } from "../context-api/NavContext";

const Hamburger = () => {
  const { toggleNavBar } = useNavContext();
  return (
    <div className="cursor-pointer" onClick={toggleNavBar}>
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
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </div>
  );
};

export default Hamburger;
