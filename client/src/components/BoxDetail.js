import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from "../context/user";
import { useNavigate } from "react-router-dom";
// import {useNavigate} from 'react-router-dom';


function BoxDetail({ closeModal, boxId, setModalCheckout }) {

    let navigateTo = useNavigate();

    const [user] = useContext(UserContext);
    // console.log("from boxdetail: ", user)
    const [viewBox, setViewBox] = useState({});

    useEffect(() => {
        fetch(`http://localhost:4000/boxes/${boxId}`)
        .then( res => res.json())
        .then( data => setViewBox(data))
        .catch( error => console.log(error.message));
    }, [])

    let userHasBox = false

    if(user.username && user.subscriptions.length > 0){
        userHasBox = user.subscriptions.find(sub => {
            return sub.box_id === boxId
        })
    }

    return (
        <div className='box-detail'>
            <button onClick={closeModal} className="close-button">&times;</button>
            {/* {console.log(viewBox)} */}
            <h2>{viewBox.title}</h2>
            <img className="box-pic" src={viewBox.image_url}></img>
            <h3>Price: $ {viewBox.price} per month</h3>
            <p><strong>Contents: </strong>{viewBox.items}</p>
            <p><strong>Description:  </strong>{viewBox.description}</p>
            {
            
            user.username ?
            <>
            { user.username && userHasBox ? <p>You're already subscribed to this box!</p> : 
            <>
            <label>Like this box? </label>
            <button className='modal-button' onClick={() => setModalCheckout(true)}>Click here to subscribe!</button>
            </>
            }
            </>
            :
            <>
            <label>Like the look of this box? Login to Subscribe! </label>
            <button className="modal-button" onClick={() => navigateTo("/login")}>Login</button>
            </>
            }
        </div>
    )
}
export default BoxDetail