import React from "react";
import "../../assets/styles/header.css";
import FriendIcon from "../../assets/icons/friends.svg";

type Props = {
  placeholder?: string;
  children?: any;
};

export default function Header(props: Props) {
  const { children } = props;

  return (
    <header className="flex items-center justify-between px-4 py-2 bg-blue-100">
      <div className="flex items-center">
        <img
          src={FriendIcon}
          width="50"
          alt="Daily Dev Tips Logo"
          className="mr-1"
        />
        <strong className="px-4">{children}</strong>
      </div>

      <nav className="flex">
        <button className="mr-2 text-sm lg:flex-grow text-white rounded text-blue-700 hover:text-blue-800">
          Add
        </button>
        <button className="mr-2 text-sm lg:flex-grow text-white rounded text-blue-700 hover:text-blue-800">
          Details
        </button>
        <button className="mr-2 text-sm lg:flex-grow text-white rounded text-blue-700 hover:text-blue-800">
          Service
        </button>
      </nav>
    </header>
  );
}
