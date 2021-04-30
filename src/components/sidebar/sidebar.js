import React, { useContext } from 'react'
import UserContext from '../../context/user'
import useUser from '../../hooks/use-user'
import User from './user'
import Suggestions from './suggestions'

function Sidebar() {
    const { user } = useContext(UserContext)
    const { activeUser: {docId, username, fullName, userId, following}} = useUser(user?.uid)
    return (
        <div className="hidden md:flex flex-col">
            <User username={username} fullName={fullName}/>
            <Suggestions userId={userId} following={following} loggedInUserDocId={docId}/>
        </div>
    )
}

export default Sidebar