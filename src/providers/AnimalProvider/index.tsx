import React, { Dispatch, ReactNode, useState } from "react";
import { createContextProvider } from "../../types/Context";
import { Animals } from "../../types";

type Props = { children: ReactNode };

type AnimalTypes = {
  animals: Animals;
  setAnimals: Dispatch<Animals>;
};

const [useAnimalContext, AnimalContextProvider] =
  createContextProvider<AnimalTypes>();

function AnimalProvider(props: Props) {
  const [animals, setAnimals] = useState<Animals>({});

  const getValues = (): AnimalTypes => {
    return { animals, setAnimals };
  };

  return (
    <AnimalContextProvider value={getValues()}>
      {props.children}
    </AnimalContextProvider>
  );
}
export { AnimalProvider, useAnimalContext };
