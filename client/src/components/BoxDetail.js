import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from "../context/user";
import { useNavigate } from "react-router-dom";
// import {useNavigate} from 'react-router-dom';


function BoxDetail({ closeModal, boxId, setModalCheckout }) {

    let navigateTo = useNavigate();

    const user = useContext(UserContext);
    // console.log("from boxdetail: ", user)
    const [viewBox, setViewBox] = useState({});

    useEffect(() => {
        fetch(`http://localhost:4000/boxes/${boxId}`)
        .then( res => res.json())
        .then( data => setViewBox(data))
        .catch( error => console.log(error.message));
    }, [])

    
    
    return (
        <div className='box-detail'>
            <button onClick={closeModal} className="close-button">&times;</button>
            {/* {console.log(viewBox)} */}
            <h2>Title: {viewBox.title}</h2>
            <h3>Price: $ {viewBox.price} per month</h3>
            <h3>Items: {viewBox.items}</h3>
            <h3>Description: {viewBox.description}</h3>
            {/* conditional if user or say to log in */}
            {
            
            user[0].username ?
            <>
            <label>Like the look of this box? Subscribe! </label>
            <button onClick={() => setModalCheckout(true)}>Checkout here</button>
            </>
            :
            <>
            <label>Like the look of this box? Login to Subscribe! </label>
            <button onClick={() => navigateTo("/login")}>Login</button>
            </>
            }
        </div>
    )
}
export default BoxDetail