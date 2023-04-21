import React from "react";
import "../../assets/styles/header.css";
import FriendIcon from "../../assets/icons/friends.svg";
import { useNavigate } from "react-router-dom";

type Props = {
  placeholder?: string;
  children?: any;
  user?: string;
};

export default function Header(props: Props) {
  const { children, user } = props;
  const navigate = useNavigate();

  return (
    <header className="flex items-center justify-between px-4 py-2 bg-blue-100 sticky top-0">
      <div className="flex items-center">
        <img src={FriendIcon} width="50" alt="Logo" className="mr-1" />
        <strong className="px-4">{children}</strong>
      </div>

      <nav className="flex">
        <button
          className="mr-2 text-sm lg:flex-grow text-gray rounded  hover:text-blue-800"
          onClick={() => navigate("/animals")}
        >
          Animals
        </button>
        <button
          className="mr-2 text-sm lg:flex-grow text-gray rounded  hover:text-blue-800"
          onClick={() => navigate("/details")}
        >
          Details
        </button>
        <button
          className="mr-2 text-sm lg:flex-grow text-gray rounded  hover:text-blue-800"
          onClick={() => navigate("/services")}
        >
          Service
        </button>
        {user ?? <h3 className="user text-red">{user}</h3>}
      </nav>
    </header>
  );
}
