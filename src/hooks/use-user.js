import { useEffect, useState } from "react";
import { getUserByUserId } from '../services/firebase';

function useUser(userId) {
    const [ activeUser, setActiveUser] = useState({});

    useEffect(() => {
        async function getUserObjByUserId (userId) {
            const [user] = await getUserByUserId(userId);
            setActiveUser(user || {})
            
        }

        if (userId) {
            getUserObjByUserId(userId)
        }
    }, [userId])

    return { user: activeUser, setActiveUser}
}

export default useUser
