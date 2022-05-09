import React, { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';


function BoxDetail({ closeModal, boxId }) {

    const navigate = useNavigate();
    const [viewBox, setViewBox] = useState({});

    useEffect(() => {
        fetch(`http://localhost:4000/boxes/${boxId}`)
        .then( res => res.json())
        .then( data => setViewBox(data))
        .catch( error => console.log(error.message));
    }, [])

    
    
    return (
        <div>
            <button onClick={closeModal} className="close-button">&times;</button>
            <h2>Title: {viewBox.title}</h2>
            <h3>Price: {viewBox.price}</h3>
            <h3>Items: {viewBox.items}</h3>
            <h3>Description: {viewBox.description}</h3>
            <button onClick={() => navigate('/checkout')}>Checkout here</button>
        </div>
    )
}
export default BoxDetail