import { createContext, useContext, useState } from "react";
import PageWrapper from "./PageWrapper";

interface NavContextState {
  updateEndpoint: (newEndpoint: string, newPageTitle: string) => void;
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

  const updateEndpoint = (newEndpoint: string, newPageTitle: string) => {
    setEndpoint(newEndpoint);
    setPageTitle(newPageTitle);
  };

  return (
    <NavContext.Provider
      value={{
        updateEndpoint,
      }}
    >
      <PageWrapper currPage={endpoint} pageTitle={pageTitle}>
        {children}
      </PageWrapper>
    </NavContext.Provider>
  );
}
