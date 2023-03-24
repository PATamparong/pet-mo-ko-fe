import React from "react";
import "../../assets/styles/container.css";

type Props = {
  children: any;
};

export default function Container(props: Props) {
  const { children } = props;

  return (
    <div className="container max-w-sm rounded overflow-hidden shadow-lg">
      {children}
    </div>
  );
}
