import React from "react";
import Actions from "./actions";
import Header from "./header";

function Post({ content }) {
  return (
    <div className="rounded bg-white border border-gray-primary mb-12">
      <Header username={content.username} />
      <img
        style={{ maxHeight: "700px", width: "100%" }}
        src={content.imageSrc}
        alt=""
      />
      <Actions
        docId={content.docId}
        totalLikes={content.likes.length}
        likedPhoto={content.userLikedPhoto}
        
      />
    </div>
  );
}

export default Post;
