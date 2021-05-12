import React, { useEffect, useState } from "react";
import Skeleton from 'react-loading-skeleton'
import ProfileHeader from "./profileHeader";
import Photos from "./photos";

function Profile({ user, userPhotos }) {
  return  ( 
    <div className="flex flex-col">
      <div className="w-full max-w-screen-lg mx-auto">
      <ProfileHeader user={user} userPhotos={userPhotos}/>
      <Photos userPhotos={userPhotos}/>
    </div>
    </div>
  );
}

export default Profile;
