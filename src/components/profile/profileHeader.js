import React from "react";
import Skeleton from "react-loading-skeleton";

function ProfileHeader({ user, userPhotos }) {
  return (
    <div className="h-40 pl-20 flex">
      <div>
        <img
          className="rounded-full w-40 "
          src={`/images/avatars/${user?.username}.jpg`}
          alt=""
          onError={(e) => {
            e.target.src = `/images/avatars/default.png`;
          }}
        />
      </div>
      <div className="ml-20 pl-4 space-y-4">
        <p className="text-3xl text-gray-base font-thin">{user?.username}</p>
        <div className="flex space-x-12">
          <p>
            <span className="font-bold">{user ? userPhotos.length : ""}</span>
            {user ? " posts" : ""}
          </p>
          <p>
            <span className="font-bold">{user?.followers.length}</span>
            {user ? " followers" : ""}
          </p>
          <p>
            <span className="font-bold">{user?.following.length}</span>
            {user ? " following" : ""}
          </p>
        </div>
        <p className="font-semibold">{user?.fullName}</p>
      </div>
    </div>
  );
}

export default ProfileHeader;
