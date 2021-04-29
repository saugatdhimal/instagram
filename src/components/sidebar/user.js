import React from "react";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

function User({ username, fullName }) {
  return !username || !fullName ? (
    <Skeleton count={1} height={61} />
  ) : (
    <Link
      to={`/p/${username}`}
      className="flex  mb-6 items-center"
    >
      <div>
        <img
          className="rounded-full w-16 mr-5"
          src={`/images/avatars/${username}.jpg`}
          alt=""
          onError={(e) => {
            e.target.src = `/images/avatars/default.png`;
          }}
        />
      </div>
      <div >
          <p className="font-bold text-sm">{username}</p>
          <p className="text-sm">{fullName}</p>
      </div>
    </Link>
  );
}

export default User;
