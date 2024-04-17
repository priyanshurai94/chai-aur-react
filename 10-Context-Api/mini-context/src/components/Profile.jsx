import React from "react";
import UserContext from "../context/UserContext";
import { useContext } from "react";

function Profile() {
    const {user} = useContext(UserContext)
    // yha [UserContext] se user ke value ko liya jaa rha h
    //[useContext] ek hook h jo [Usercontext] ke value ko fetch kr ke uska user variable ka value provide kara rha h

    if (!user) return <div>please login</div>

    return <div>Welcome {user.username}</div>
    
}

export default Profile