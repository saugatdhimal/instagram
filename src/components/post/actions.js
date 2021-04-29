import React, { useContext, useState } from "react";
import FirebaseContext from "../../context/firebase";
import UserContext from "../../context/user";

function Actions({ docId, totalLikes, likedPhoto }) {
  const { firebase, FieldValue } = useContext(FirebaseContext);
  const {
    user: { uid: userId },
  } = useContext(UserContext);
  const [toggleLiked, setToggleLiked] = useState(likedPhoto);
  const [likes, setLikes] = useState(totalLikes);

  const handleToggleLiked = async () => {
    setToggleLiked((toggleLiked) => !toggleLiked);

    await firebase
      .firestore()
      .collection("photos")
      .doc(docId)
      .update({
        likes: toggleLiked
          ? FieldValue.arrayRemove(userId)
          : FieldValue.arrayUnion(userId),
      });

    setLikes((likes) => (toggleLiked ? likes - 1 : likes + 1));
  };

  return (
    <div>
      <svg
        onClick={handleToggleLiked}
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill={`${toggleLiked ? 'red' : 'none'}`}
        viewBox="0 0 24 24"
        stroke="currentColor"
        className={`w-8 mr-4 select-none cursor-pointer focus:outline-none ${
              toggleLiked ? 'text-red-primary' : null
            }`}
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    </div>
  );
}

export default Actions;
