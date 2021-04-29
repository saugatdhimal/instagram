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
  console.log(photos);
  return (
    <div className="col-span-2">
      {!photos ? (
        <Skeleton count={4} width={670} height={760} className="mb-5" />
      ) : (
        photos.map((content) => <Post key={content.docId} content={content}/>)
      )}
    </div>
  );
}

export default Timeline;
