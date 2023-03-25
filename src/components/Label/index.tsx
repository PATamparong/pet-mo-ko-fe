import React from "react";

type Props = {
  name: string;
  important?: boolean;
};

export default function Label(props: Props) {
  const { name, important } = props;

  return (
    <div className="relative h-7 w-7">
      <p className="absolute left-0 top-0 h-10 w-10 text-red">
        {name} {important ? "*" : false}
      </p>
    </div>
  );
}
