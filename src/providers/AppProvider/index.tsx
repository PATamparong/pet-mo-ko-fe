import React, { ReactNode, useState } from "react";
import { createContextProvider } from "../../types/Context";

type Props = { children: ReactNode };

const [useAppContext, AppContextProvider] = createContextProvider();

function AppProvider(props: Props) {
  const [guestName, setGuestName] = useState<string>("");

  const getValues = () => {
    return { guestName, setGuestName };
  };

  return (
    <AppContextProvider value={getValues()}>
      {props.children}
    </AppContextProvider>
  );
}
export { AppProvider, useAppContext };
