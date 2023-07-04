import React from "react";
import { Animals } from "../../../../types";

type Props = { animals: Array<Animals> };

export default function AnimalList(props: Props) {
  const { animals } = props || {};

  return (
    <>
      {animals?.map(({ name }, index) => (
        <p key={index}>
          {"\u2022"} {name}
        </p>
      ))}
      {console.log(animals, "precious")}
    </>
  );
}
