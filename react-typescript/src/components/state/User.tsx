import { useState } from "react";

type AuthUser = {
    name: string
    email: string
}

export default function User() {

    const [user, setUser] = useState<null | AuthUser>(null)
    
    function handleLogin() {
        setUser({
            name: "Angel",
            email: "aroman@hotmail.com"
        })
    }
    function handleLogout() {
        setUser(null)
    }

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User is {user?.name}</div>
            <div>User email is {user?.email} </div>
        </div>
    )
}