import React, { useRef } from "react";
import Actions from "./actions";
import Header from "./header";
import Comments from './comments'

function Post({ content }) {
  const commentInput = useRef(null);
  const handleFocus = () => commentInput.current.focus();
  return (
    <div className="rounded bg-white border border-gray-primary mb-12">
      <Header username={content.username} />
      <img
        style={{ maxHeight: "680px", width: "100%" }}
        src={content.imageSrc}
        alt=""
      />
      <Actions
        docId={content.docId}
        totalLikes={content.likes.length}
        likedPhoto={content.userLikedPhoto}
        username={content.username}
        caption={content.caption}
        handleFocus={handleFocus}
      />
      <Comments
        docId={content.docId}
        comments={content.comments.reverse()}
        posted={content.dateCreated}
        commentInput={commentInput}
      />
    </div>
  );
}

export default Post;
