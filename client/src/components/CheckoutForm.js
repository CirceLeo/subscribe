import Header from "./Header"
function CheckoutForm({closeModal, setModalCheckout, modalCheckout}) {
    //need to get the box id somehow
    //get id info from the routing??

    function handleSubmit(e){
        e.preventDefault()
    }

    function handleExitClick(){
        closeModal()
        setModalCheckout(false)
        console.log(modalCheckout)
    }
    return (
        <div>
            <button onClick={handleExitClick} className="close-button">&times;</button>
            {/* <Header /> */}
            <h1>Checkout</h1>
            {/* box info */}
            <form onSubmit={handleSubmit}>
                <label>How many months?</label>
                <input name="duration" type="number" min={0} />
                <br/>
                <button type="submit" >Subscribe!</button>

            </form>
        </div>
    )
}
export default CheckoutForm