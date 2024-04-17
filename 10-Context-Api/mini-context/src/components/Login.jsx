import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";

function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)
    //yha [UserContext] se setUser ko liya ja rha h [usecontext] hook se [UserContext] ko fetch kar ke

    const handleSubmit = (e) =>{
        e.preventDefault()
        setUser({username, password})
        // yha data veja ja rha h [usercontext] ke value me .....login ke input ke  username aur pasword ke value ko set kr rha h [UserContext] ke user me
        
    }


    return(
        <div>
        <h2>Login</h2>
        <input type="text" 
        value={username}
        onChange={(e)=> setUsername(e.target.value)}
        placeholder="username" />
        <input type="text"
        value={password}
        onChange={(e)=> setPassword(e.target.value)} 
        placeholder="password" />
        <button onClick={handleSubmit}>Submit</button>





        </div>
    )
    
}

export default Login