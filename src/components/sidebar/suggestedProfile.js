import React, { useState } from "react";
import { Link } from "react-router-dom";
import { updateFollowedUserFollowers, updateLoggedInUserFollowing } from "../../services/firebase";

function SuggestedProfile({ username, profileDocId, profileId, userId, loggedInUserDocId }) {
    const [ followed, setFollowed] = useState(false);

    async function handleFollowUser() {
        setFollowed(true);
        await updateLoggedInUserFollowing(loggedInUserDocId, profileId, false);
        await updateFollowedUserFollowers(profileDocId, userId, false);

    }
  return !followed ? (
    <div className="flex justify-between">
      <div className="flex items-center">
        <img
          className="rounded-full w-8 flex mr-3"
          src={`/images/avatars/${username}.jpg`}
          alt=""
          onError={(e) => {
            e.target.src = `/images/avatars/default.png`;
          }}
        />
        <Link to={`/p/${username}`}>
            <p className="font-bold text-sm">{username}</p>
            <p className="font-bold text-xs text-black-faded">Suggested for you</p>
        </Link>
      </div>
      <button className="text-xs font-bold text-blue-follow" type="button" onClick={handleFollowUser}>
          Follow
      </button>
    </div>
  ) : null ;
}

export default SuggestedProfile;
