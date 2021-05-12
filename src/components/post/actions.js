import React, { useContext, useState } from "react";
import FirebaseContext from "../../context/firebase";
import UserContext from "../../context/user";

function Actions({ docId, totalLikes, likedPhoto, handleFocus, username, caption }) {
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
    <>
      <div className="flex p-3 pb-1">
        <svg
          onClick={handleToggleLiked}
          xmlns="http://www.w3.org/2000/svg"
          fill={`${toggleLiked ? "red" : "none"}`}
          viewBox="0 0 24 24"
          stroke="currentColor"
          className={`w-8 mr-4 select-none cursor-pointer focus:outline-none ${
            toggleLiked ? "text-red-primary" : null
          }`}
        >
          <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
        <svg
          onClick={handleFocus}
          xmlns="http://www.w3.org/2000/svg"
          className="w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          cursor="pointer"
        >
          <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      </div>
      <p className="font-bold text-sm px-4">
        {likes === 1 ? `${likes} like` : `${likes} likes`}
      </p>
      {/* <p className="font-bold text-sm px-4 mt-1">{username} <span className="font-medium ml-1"> {caption}</span></p> */}
    </>
  );
}

export default Actions;
