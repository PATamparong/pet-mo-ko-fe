import React from "react";

type Props = {
  placeholder?: string;
};

export default function Input(props: Props) {
  const { placeholder } = props;

  return <input placeholder={placeholder}></input>;
}
