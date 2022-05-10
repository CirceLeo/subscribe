// import Header from "./Header"
//import use context things
import React, {useState, useEffect, useContext} from 'react'
import { UserContext } from "../context/user";
import {useNavigate} from 'react-router-dom'

function CheckoutForm({closeModal, setModalCheckout, boxId}) {
    const [viewBox, setViewBox] = useState({});
    const [inputDuration, setInputDuration] = useState(0)
    const [user] = useContext(UserContext)
    const navigate = useNavigate()
    // console.log("checkout form user", user)

    useEffect(() => {
        fetch(`http://localhost:4000/boxes/${boxId}`)
        .then( res => res.json())
        .then( data => setViewBox(data))
        .catch( error => console.log(error.message));
    }, [])

    
    function handleDurationChange(e){
        setInputDuration(e.target.value)
    }
    
    function handleExitClick(){
        closeModal()
        setModalCheckout(false)
    }
    function handleSubmit(e){
        e.preventDefault()
        fetch(`http://localhost:4000/subscriptions`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({
                user_id: user.id,
                box_id: viewBox.id,
                duration: inputDuration
            })
        })
        .then( res => res.json())
        .then( navigate('/myboxes'))
        .catch( error => console.log(error.message));
    }

    return (
        <div className="checkout">
            <button onClick={handleExitClick} className="close-button">&times;</button>
            <h1>Checkout</h1>
            <h2>Title: {viewBox.title}</h2>
            <p>Price: $ {viewBox.price} per month</p>
            <p>Items: {viewBox.items}</p>
            <p>Description: {viewBox.description}</p>
            {/* box info */}
            <form onSubmit={handleSubmit}>
                <label>How many months?</label>
                <input onChange={handleDurationChange} name="duration" type="number" min={0} max={12} value={inputDuration} />
                <br/>
                <p>Total Cost: $ {viewBox.price * inputDuration}</p>
                <br/>
                <button type="submit" >Subscribe!</button>

            </form>
        </div>
    )
}
export default CheckoutForm