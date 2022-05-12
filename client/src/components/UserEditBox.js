import {useEffect, useState} from 'react'

function UserEditBox({closeModal, curSub}) {
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        fetch(`http://localhost:4000/subscriptions/${curSub}`)
        .then(resp => resp.json())
        .then(data => {
            setShowSub(data)
            // console.log("from useEffect in edit", data)
            setContentLoaded(true)
        })
    }, [counter])
    
    const [showSub, setShowSub] = useState({})
    const [contentLoaded, setContentLoaded] = useState(false) 
    const [changeDurationValue, setChangeDurationValue] = useState(showSub.duration)
    const [changeTotal, setChangeTotal] = useState(false)
    // console.log(showSub)

    function handleDurationChange(e){
        setChangeDurationValue(e.target.value)
        setChangeTotal(true)
    }

    function handleDurationSubmit(e){
        e.preventDefault()
        fetch(`http://localhost:4000/subscriptions/${showSub.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({
                "duration": changeDurationValue
            })
        })
        .then( res => res.json())
        .then( data => setCounter(counter + 1))
        .catch( error => console.log(error.message));
    }

    function handleEndSub(){
        fetch(`http://localhost:4000/subscriptions/${showSub.id}`, {method: "DELETE"})
        .then(res => console.log("after delete:", res))
        .then(() => {
            closeModal()
            setCounter(counter +1)
        })
        .catch( error => console.log(error.message));
    }

    return (
        <div className="user-edit-sub">
            <button className="close-button" onClick={closeModal}>X</button>
            { contentLoaded ? 
                <div className='subscription-edit'>
                    <div className='box-info'>
                        <h2>Box infomation:</h2>
                        <p><strong>Box title: </strong>{showSub.box.title}</p>
                        <p><strong>Monthly Cost: </strong> $ {showSub.box.price}</p>
                        <p><strong>Box contents: </strong>{showSub.box.items}</p>
                    </div>
                    <div className='sub-info'>
                        <h2>Subscription details:</h2>
                        <p><strong>Current Subscription Length:</strong> {showSub.duration} {showSub.duration > 1 ? "months" : "month"}</p>
                        <p><strong>Deliveries remaining in subscription: </strong> {showSub.remaining_boxes}</p>
                    </div>
                    <h2 className='headline'>Edit Subscription Details: </h2> 
                    <form className="user-edit-form" onSubmit={handleDurationSubmit}>
                        <p><strong>Length of subscription: </strong><input 
                            type="number" 
                            placeholder={showSub.duration} 
                            className="edit-sub-form"
                            onChange={handleDurationChange}
                            value={changeDurationValue}
                            min={0}
                            />
                        months</p> 
                        <div className='user-edit-buttons'>
                            <button className='modal-button'>Submit change</button>
                            <button  className='modal-button' onClick={handleEndSub}>End Subscription</button>
                        </div>
                        
                        {
                            changeTotal ? <p>Total Cost: $ {showSub.box.price * changeDurationValue}</p> : <p>Total Cost: $ {showSub.box.price * showSub.duration}</p>
                        }
                        
                        {/* <p><strong>Length of subscription: </strong>{showSub.duration} months</p> */}
                    </form>
                </div>
            :
            <p>Box content loading!</p>
            }
        </div>
    )
}
export default UserEditBox