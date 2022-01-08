import type { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import Hamburger from "../components/utilities/Hamburger";
import { NavContextProvider } from "../components/context-api/NavContext";
import SearchBar from "../components/utilities/SearchBar";
import "../lib/aws-config";
import { NotificationContextProvider } from "../components/context-api/NotificationContext";
import NotificationList from "../components/utilities/NotificationList";
import { LoadingContextProvider } from "../components/context-api/LoadingContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LoadingContextProvider>
      <NavContextProvider>
        <NotificationContextProvider>
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center w-full gap-x-6">
              <Hamburger />
              <SearchBar />
            </div>
            <div>
              <h1 className="text-xl font-semibold">Admin</h1>
            </div>
          </div>
          <NotificationList />
          <Component {...pageProps} />
        </NotificationContextProvider>
      </NavContextProvider>
    </LoadingContextProvider>
  );
}
export default MyApp;
