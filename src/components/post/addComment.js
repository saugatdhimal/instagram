import React, { useContext, useState } from "react";
import FirebaseContext from "../../context/firebase";
import UserContext from "../../context/user";

function AddComment({ docId, comments, setComments, commentInput }) {
  const [comment, setComment] = useState("");
  const { firebase, FieldValue } = useContext(FirebaseContext);
  const {
    user: { displayName },
  } = useContext(UserContext);

  const handleSubmitComment = (e) => {
    e.preventDefault();

    setComments([{ displayName, comment }, ...comments]);
    setComment("");

    return firebase
      .firestore()
      .collection("photos")
      .doc(docId)
      .update({
        comments: FieldValue.arrayUnion({ displayName, comment }),
      });
  };

  return (
    <div className="border-t border-gray-primary flex">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-14 w-16 self-center px-4 cursor-pointer"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <form
        className="flex-1"
        method="POST"
        onSubmit={(e) =>
          comment.length >= 1 ? handleSubmitComment(e) : e.preventDefault()
        }
      >
        <input
          className="w-full h-full text-sm text-gray-base"
          type="text"
          aria-label="Add a comment"
          autoComplete="off"
          placeholder="Add a comment..."
          value={comment}
          ref={commentInput}
          onChange={(e) => setComment(e.target.value)}
        ></input>
      </form>
      <button
        type="button"
        disabled={comment.length < 1}
        className={`text-sm font-bold text-blue-follow px-4 self-center ${!comment && 'opacity-25'}`}
        onClick={handleSubmitComment}
      >
        Post
      </button>
    </div>
  );
}

export default AddComment;
