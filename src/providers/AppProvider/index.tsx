import React, { ReactNode } from "react";
import { createContextProvider } from "../../types/Context";

type Props = { children: ReactNode };

const [useAppContext, AppContextProvider] = createContextProvider();

function AppProvider(props: Props) {
  const getValues = () => {
    return {};
  };

  return (
    <AppContextProvider value={getValues()}>
      {props.children}
    </AppContextProvider>
  );
}
export { AppProvider, useAppContext };
