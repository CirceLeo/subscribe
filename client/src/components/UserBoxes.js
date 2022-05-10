import React, { useContext } from "react";
import Header from "./Header"
import { UserContext } from '../context/user'

function UserBoxes(props) {
    const user = useContext(UserContext)
    console.log("usercontext: ", user)
    
    return (
        <div>
            <Header />
        <h1>My Boxes</h1>
        {/* <BoxesList boxInfo={userBoxes} /> */}
        </div>
    )
}
export default UserBoxes