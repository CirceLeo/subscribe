import React, { useContext, useEffect, useState } from "react";
import Header from "./Header"
import { UserContext } from '../context/user'
import UserEditBox from "./UserEditBox";

function UserBoxes(props) {
    const [user, setUser] = useContext(UserContext)

    const [modalOpen, setModalOpen] = useState(false);
    const [currentSubscription, setCurrentSubscription] = useState(5765764);

    function openModal(e, boxId) {
        setModalOpen(true)
        setCurrentSubscription(boxId)
    }
    
    function closeModal(){
        setModalOpen(false)
    }


    useEffect(() => {
        fetch(`http://localhost:4000/users/${user.id}`)
        .then(res => res.json())
        .then(updatedUser  => setUser(updatedUser) 
    )}, [])

    console.log(user)

    const renderedSubscriptions = user.subscriptions.map(sub => {
        console.log(sub)
        return (
            <div className="userSubscription">
                {/* <p>things be breaking</p> */}
                <h3>{sub.box.title}</h3>
                <p>{sub.box.description}</p>
                <p>Current duration: {sub.duration}</p>
                <p>TO CHANGE - remaining time</p>
                <button onClick={openModal}>Edit this subscription?</button>
            </div>
        )
    })
    
    return (
        <div>
            <Header />
            <h1>My Subscriptions</h1>
            <div className="user-sub-summary">
                <h4>Summary:</h4>
                {/* <p><strong>Number of subscriptions:</strong> {renderedSubscriptions.length}</p>
                <p><strong>Total monthly cost:</strong>{user.subscriptions.sum(sub => sub.box.price)}</p> */}
            </div>
            {
                modalOpen && (
                    <>
                    <div className="overlay"></div>
                    <div className="modal">
                        
                        <UserEditBox closeModal={closeModal} />
                    </div>
                    </>
                )
            }
            <div className="flex">
                {renderedSubscriptions.length > 0 ? renderedSubscriptions : <p>You have no current subscriptions, sad!</p>}
            </div>
        </div>
    )
}
export default UserBoxes