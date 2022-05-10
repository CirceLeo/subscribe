import React from "react";
import { useState, createContext } from "react";
 
const UserContext = createContext();

const userObject = {}

function UserProvider({children}) {
    const [user, setUser] = useState(userObject)

    return <UserContext.Provider value={userObject}>{children}</UserContext.Provider>;
}

export { UserContext, UserProvider };