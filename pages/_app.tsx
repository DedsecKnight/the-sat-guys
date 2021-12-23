import type { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import Hamburger from "../components/Hamburger";
import { NavContextProvider } from "../components/NavContext";
import SearchBar from "../components/SearchBar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NavContextProvider>
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center w-full gap-x-6">
          <Hamburger />
          <SearchBar />
        </div>
        <div>
          <h1 className="text-xl font-semibold">Admin</h1>
        </div>
      </div>
      <Component {...pageProps} />
    </NavContextProvider>
  );
}
export default MyApp;
