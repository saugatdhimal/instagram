import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { doesUsernameExist, getUserPhotosByUserId } from "../services/firebase";
import * as ROUTES from "../constants/routes";
import Header from '../components/header';
import UserProfile from '../components/profile';
import FallbackLoading from '../components/fallbackLoading'

function Profile() {
  const { username } = useParams();
  const [user, setUser] = useState();
  const [userPhotos, setUserPhotos] = useState(null);
  const history = useHistory();

  useEffect(() => {
    async function checkUserExists() {
      document.title = `@${username} Instagram`;
      const [user] = await doesUsernameExist(username);
      if (user?.userId) {
        setUser(user);
      } else {
        history.push(ROUTES.NOT_FOUND);
      }
    }

    checkUserExists();

    async function getProfileUserPhotos() {
      const photos = await getUserPhotosByUserId(user.userId);
      setUserPhotos(photos);
    }

    if (user) {
      getProfileUserPhotos();
    }
  }, [history, username, user]);

  return user && userPhotos ? (<>
          <Header />
          <UserProfile user={user} userPhotos={userPhotos}/>
          </>
      
  ) : <FallbackLoading />
}

export default Profile;
