// import Header from "./Header"
//import use context things
import React, {useState, useEffect, useContext} from 'react'
import { UserContext } from "../context/user";
import {useNavigate} from 'react-router-dom'

function CheckoutForm({closeModal, setModalCheckout, boxId}) {
    const [viewBox, setViewBox] = useState({});
    const [inputDuration, setInputDuration] = useState(1)
    const [user] = useContext(UserContext)
    const [errors, setErrors] = useState('')
    const [showErrors, setShowErrors] = useState(false)
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
        .then(res => {
            if(res.ok){
                navigate('/subscribing')
            } else{
                res.json().then(recieved => {
                    setErrors(recieved.errors)
                    setShowErrors(true)
                })
            }
        })
        // .then( res => if() res.json())
        // .then( navigate('/myboxes'))
        .catch( error => console.log(error.message));
    }

    return (
        <div className="box-detail">
            <button onClick={handleExitClick} className="close-button">&times;</button>
            <h2 className='modal-title'>Checkout</h2>
            <p className="box-detail-content"><strong className="content-title">{viewBox.title}</strong></p>
            <p className="box-detail-content"><strong className="content-title">Price:</strong> $ {viewBox.price} per month</p>
            <div className="row">
                <div className="column">
                    <p><strong>Contents:</strong> {viewBox.items}</p>
                </div>
                <div className="column">
                    <p><strong>Description:</strong> {viewBox.description}</p>
                </div>
            </div>
            {showErrors ? <> <h3 className='checkout-issue'>{errors}</h3> <button className="close-button" onClick={() => setShowErrors(false)}>X</button> </> : null}
            
            <form onSubmit={handleSubmit}>
                <h2>Payment</h2>
                <h2>Credit/Debit Card</h2>
                <div id ="credit-card-form"  className='row'>
                    <div className="column">
                        <label className="form-label">How many months?</label>
                        <input onChange={handleDurationChange} className="form-input" name="duration" type="number" min={1} max={12} value={inputDuration} />
                        <p className="box-detail-content"><strong className="content-title">Total Cost:</strong> $ {viewBox.price * inputDuration}</p>
                    </div>
                    
                    <div className="column">
                        <label className='form-label'>Card Number:</label>
                        <input type="text" className="form-input" required maxLength="19" minLength="19"></input>
                        <label className='form-label'>Expiration Date:</label>
                        <input type="month" className="form-input" required></input>
                        <label className='form-label'>Name on Card:</label>
                        <input type="text" className="form-input" required></input>
                        <label className='form-label'>CVV:</label>
                        <input type="text" className="form-input" required maxLength="3"></input>
                    </div>
                <button className="modal-button" type="submit" >Subscribe!</button>
                </div>
            </form>
            </div>
    )
}
export default CheckoutForm