import type { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import { NavContextProvider } from "../components/NavContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NavContextProvider>
      <Component {...pageProps} />
    </NavContextProvider>
  );
}
export default MyApp;
