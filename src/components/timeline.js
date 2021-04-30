import React, { useContext } from "react";
import UserContext from "../context/user";
import usePhotos from "../hooks/use-photos";
import useUser from "../hooks/use-user";
import Skeleton from "react-loading-skeleton";
import Post from "./post";

function Timeline() {
  const { user } = useContext(UserContext);
  const { activeUser } = useUser(user?.uid);
  const { photos } = usePhotos(activeUser);
  return (
    <div className="col-span-2">
      {!photos ? (
        <Skeleton count={4} height={760} style={{width:'100%', maxWidth:'615px'}} />
      ) : (
        photos.map((content) => <Post key={content.docId} content={content}/>)
      )}
    </div>
  );
}

export default Timeline;
