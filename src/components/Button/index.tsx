import React from "react";

type Props = {
  name: string;
  type?: "button" | "submit" | "reset" | undefined;
  color?: string;
  width?: string | number;
};

export default function Button(props: Props) {
  const { name, type, color, width } = props;

  return (
    <button
      className={`bg-blue-500 hover:bg-blue-700 text-${
        color ?? "black"
      } font-bold py-2 px-4 border border-blue-700 rounded w-${
        width ?? "full"
      }`}
      type={type}
    >
      {name}
    </button>
  );
}
