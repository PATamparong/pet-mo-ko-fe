import { createContext, useContext } from "react";

export function createContextProvider<T>() {
  const contextProvider = createContext<T | undefined>(undefined);

  const useGenericContextProvider = () => {
    const context = useContext(contextProvider);

    if (!context) {
      throw new Error("context error chuchu");
    }

    return context;
  };

  return [useGenericContextProvider, contextProvider.Provider] as const;
}
