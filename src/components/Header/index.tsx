import React from "react";
import "../../assets/styles/header.css";

type Props = {
  placeholder?: string;
  children: any;
};

export default function Header(props: Props) {
  const { children } = props;

  return (
    <header className="flex items-center justify-between px-4 py-2 bg-blue-100">
      <div className="flex items-center">
        <img
          src="https://cdn.hashnode.com/res/hashnode/image/upload/v1643004937711/k3NMskkSn.png"
          width="50"
          alt="Daily Dev Tips Logo"
          className="mr-2"
        />
        <strong className="px-4">{children}</strong>
      </div>

      <nav>
        <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
          Click me
        </button>
        <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
          Click me
        </button>
        <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
          Click me
        </button>
      </nav>
    </header>
  );
}
