import useNavigate from 'react';

function BoxDetail(props) {
    let navigate = useNavigate()
    
    return (
        <div>
            <h2>More info</h2>
            <button onClick={navigate('/checkout')}>Checkout here</button>
        </div>
    )
}
export default BoxDetail