import React, { useContext } from 'react'
import FirebaseContext from '../context/firebase'
import UserContext from '../context/user'

function Header() {
    const { firebase } = useContext(FirebaseContext);
    const { user } = useContext(UserContext);
    return (
        <div>
            <p>{user.displayName}</p>
        </div>
    )
}

export default Header
