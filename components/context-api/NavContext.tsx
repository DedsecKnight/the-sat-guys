import { createContext, useContext, useState } from "react";
import PageWrapper from "../utilities/PageWrapper";

interface NavContextState {
  updateEndpoint: (newEndpoint: string, newPageTitle: string) => void;
  toggleNavBar: () => void;
  showNavBar: boolean;
}

const NavContext = createContext<NavContextState | undefined>(undefined);

export function useNavContext(): NavContextState {
  const context = useContext(NavContext);
  if (!context) {
    throw new Error("Error with NavContext");
  }
  return context;
}

export function NavContextProvider({
  children,
}: React.PropsWithChildren<Record<string, any>>) {
  const [endpoint, setEndpoint] = useState<string>("");
  const [pageTitle, setPageTitle] = useState<string>("");
  const [showNav, setShowNav] = useState<boolean>(true);

  const updateEndpoint = (newEndpoint: string, newPageTitle: string) => {
    setEndpoint(newEndpoint);
    setPageTitle(newPageTitle);
  };

  const toggleNavBar = () => {
    const navBar = document.querySelector("#navbar");
    if (!navBar) return;

    const currNavStatus = showNav;
    setShowNav((prev) => !prev);
    if (currNavStatus) {
      navBar.classList.add("hidden");
    } else {
      navBar.classList.remove("hidden");
    }
  };

  return (
    <NavContext.Provider
      value={{
        updateEndpoint,
        showNavBar: showNav,
        toggleNavBar,
      }}
    >
      <PageWrapper currPage={endpoint} pageTitle={pageTitle}>
        {children}
      </PageWrapper>
    </NavContext.Provider>
  );
}
