import React from "react";
import { Link } from "react-router-dom";

function Header({ username }) {
  return (
    <div className="flex items-center justify-between border-b border-gray-primary h-4 p-4 py-8">
      <Link to={`/p/${username}`} className="flex items-center">
        <img
          className="rounded-full h-8 w-8 flex mr-3"
          src={`/images/avatars/${username}.jpg`}
          alt={`${username} profile`}
        />
        <p className="font-bold text-sm">{username}</p>
      </Link>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-4"
        viewBox="0 0 20 20"
        fill="currentColor"
        cursor="pointer"
      >
        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
      </svg>
    </div>
  );
}

export default Header;
