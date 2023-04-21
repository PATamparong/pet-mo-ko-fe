import React from "react";
import { Animals } from "../../../../types";

type Props = { animals: Animals };

export default function AnimalList(props: Props) {
  const { name, age, description } = props.animals || {};

  return (
    <>
      <p>{name}</p>
      <p>{age}</p>
      {description}
    </>
  );
}
