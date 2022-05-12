import React, { useContext, useEffect, useState } from "react";
import { UserContext } from '../context/user'
import Header from "./Header"
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
    )}, [closeModal])

    // console.log(user)
    
    const renderedSubscriptions = user.subscriptions.map(sub => {
        // console.log(sub)
        const date = new Date(sub.created_at)
        return (
            <div key={sub.id} className="userSubscription">
                <h3>{sub.box.title}</h3>
                <img src={sub.box.image_url} alt="picture of a box" className="box-pic"/>
                <p> Total subscription length: {sub.duration} {sub.duration > 1 ? "months" : "month"} </p>
                <p>subscription started: {date.toLocaleDateString("en-US")}</p>
                <p>remaining deliveries in your subscription: {sub.remaining_boxes}</p>
                <button className="modal-button" onClick={(e) => openModal(e, sub.id)}>Edit this subscription?</button>
            </div>
        )
    })
    
    return (
        <div>
            <Header />
            <h1>My Subscriptions</h1>
            <div className="user-sub-summary">
                <h4>Summary:</h4>
                <p><strong>Number of subscriptions:</strong> {renderedSubscriptions.length}</p>
                <p><strong>Total monthly cost: </strong>$ {user.total_box_cost.toFixed(2)}</p>
            </div>
            <div className="flex">
                {renderedSubscriptions.length > 0 ? renderedSubscriptions : <p>You have no current subscriptions, sad!</p>}
            </div>
            {
                modalOpen && (
                    <>
                    <div className="overlay"></div>
                    <div className="modal">
                        
                        <UserEditBox closeModal={closeModal} curSub={currentSubscription} />
                    </div>
                    </>
                )
            }
            
        </div>
    )
}
export default UserBoxes