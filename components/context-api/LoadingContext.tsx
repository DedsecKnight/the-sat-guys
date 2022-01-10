import React, { createContext, useContext, useState } from "react";
import LoadingOverlay from "react-loading-overlay-ts";
import { LOADING_MSG } from "../../lib/loading";

interface LoadingContextState {
  toggleLoading: () => void;
}

const LoadingContext = createContext<LoadingContextState | undefined>(
  undefined
);

export function useLoadingContext(): LoadingContextState {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("Error with LoadingContext");
  }
  return context;
}

export function LoadingContextProvider({
  children,
}: React.PropsWithChildren<Record<string, any>>) {
  const [loadingActive, setLoadingActive] = useState(false);
  const toggleLoading = () => {
    setLoadingActive((prev) => !prev);
  };
  return (
    <LoadingContext.Provider value={{ toggleLoading }}>
      <LoadingOverlay active={loadingActive} spinner text={LOADING_MSG}>
        {children}
      </LoadingOverlay>
    </LoadingContext.Provider>
  );
}
