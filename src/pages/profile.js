import React, { useEffect, useState } from 'react'
import { useParams, useHistory} from 'react-router-dom'
import { doesUsernameExist } from '../services/firebase'
import * as ROUTES from '../constants/routes';

function Profile() {
    const { username } = useParams();
    const [ user, setUser ] = useState();
    const history = useHistory();

    useEffect(() => {
        async function checkUserExists() {
            const [ user ] = await doesUsernameExist(username);
            console.log(user)
            if(user?.userId) {
                setUser(user)
            } else {
                history.push(ROUTES.NOT_FOUND)
            }
        }

        checkUserExists()
    }, [history, username])

    return (
        <div>
            <p>{username}</p>
        </div>
    )
}

export default Profile
