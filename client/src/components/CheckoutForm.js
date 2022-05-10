// import Header from "./Header"
import {useState, useEffect} from 'react'

function CheckoutForm({closeModal, setModalCheckout, boxId}) {
    const [viewBox, setViewBox] = useState({});
    const [inputDuration, setInputDuration] = useState(0)

    useEffect(() => {
        fetch(`http://localhost:4000/boxes/${boxId}`)
        .then( res => res.json())
        .then( data => setViewBox(data))
        .catch( error => console.log(error.message));
    }, [])

    function handleSubmit(e){
        e.preventDefault()
    }

    function handleDurationChange(e){
        setInputDuration(e.target.value)
    }

    function handleExitClick(){
        closeModal()
        setModalCheckout(false)
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