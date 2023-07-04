import React, { Dispatch, ReactNode, useState } from "react";
import { createContextProvider } from "../../types/Context";
import { Animals } from "../../types";

type Props = { children: ReactNode };

type AnimalTypes = {
  animals: Animals;
  animalData: Array<Animals>;
  setAnimals: Dispatch<Animals>;
  setAnimalData: Dispatch<Array<Animals>>;
};

const [useAnimalContext, AnimalContextProvider] =
  createContextProvider<AnimalTypes>();

function AnimalProvider(props: Props) {
  const [animals, setAnimals] = useState<Animals>({});
  const [animalData, setAnimalData] = useState<Array<Animals>>([]);

  const getValues = (): AnimalTypes => {
    return { animals, animalData, setAnimals, setAnimalData };
  };

  return (
    <AnimalContextProvider value={getValues()}>
      {props.children}
    </AnimalContextProvider>
  );
}
export { AnimalProvider, useAnimalContext };
