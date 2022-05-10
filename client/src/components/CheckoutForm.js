import Header from "./Header"
function CheckoutForm(props) {
    
    return (
        <div>
            <Header />
            <h1>Checkout</h1>
            <form>
                <label>Length of subscription</label>
                <input type="number" />
            </form>
        </div>
    )
}
export default CheckoutForm