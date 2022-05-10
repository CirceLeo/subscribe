import React, { useContext, useEffect } from "react";
import Header from "./Header"
import { UserContext } from '../context/user'

function UserBoxes(props) {
    const [user, setUser] = useContext(UserContext)


    useEffect(() => {
        fetch(`http://localhost:4000/users/${user.id}`)
        .then(res => res.json())
        .then(updatedUser  => setUser(updatedUser) 
    )}, [])

    const renderedSubscriptions = user.subscriptions.map(sub => {
        console.log(sub)
        return (
            <div className="userSubscription">
                {/* <h4>{ sub}</h4> */}
                <h3>{sub.duration}</h3>
            </div>
        )
    })
    
    return (
        <div>
            <Header />
        <h1>My Subscriptions</h1>
        {renderedSubscriptions.length > 0 ? renderedSubscriptions : <p>You have no current subscriptions, sad!</p>}
        </div>
    )
}
export default UserBoxes