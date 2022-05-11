import {useEffect, useState} from 'react'

function UserEditBox({closeModal, curSub}) {
    
    useEffect(() => {
        fetch(`http://localhost:4000/subscriptions/${curSub}`)
        .then(resp => resp.json())
        .then(data => {
            setShowSub(data)
            console.log("from useEffect in edit", data)
            setContentLoaded(true)
        })
    }, [])
    
    const [showSub, setShowSub] = useState({})
    const [contentLoaded, setContentLoaded] = useState(false) 
    const [changeDurationValue, setChangeDurationValue] = useState(showSub.duration)
    // console.log(showSub)

    function handleDurationChange(e){
        setChangeDurationValue(e.target.value)
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
        .then( data => console.log(data))
        .catch( error => console.log(error.message));
    }

    function handleEndSub(){
        fetch(`http://localhost:4000/subscriptions/${showSub.id}`, {method: "DELETE"})
        .then(res => console.log("after delete:", res))
        .then(() => {
            closeModal()
        })
        .catch( error => console.log(error.message));
    }

    return (
        <div className="user-edit-sub">
            <button className="close-button" onClick={closeModal}>X</button>
            { contentLoaded ? 
                <>
                    <h2>Box infomation:</h2>
                    <p><strong>Box title: </strong>{showSub.box.title}</p>
                    <p><strong>Monthly Cost: </strong> $ {showSub.box.price}</p>
                    <p><strong>Current Subscription Length:</strong> {showSub.duration} {showSub.duration > 1 ? "months" : "month"}</p>
                    <h2>Subscription details:</h2>
                    <p><strong>Number recieved so far: </strong></p>
                    <p><strong>Deliveries remaining in subscription: </strong></p>
                    <h2>Edit Subscription Details: </h2> 
                    <form onSubmit={handleDurationSubmit}>
                        <p><strong>Length of subscription: </strong><input 
                            type="number" 
                            placeholder={showSub.duration} 
                            className="edit-sub-form"
                            onChange={handleDurationChange}
                            value={changeDurationValue}
                            min={0}
                            />
                        months</p> <button>Submit change</button>
                        <button onClick={handleEndSub}>End Subscription</button>
                        {/* <p><strong>Length of subscription: </strong>{showSub.duration} months</p> */}
                    </form>
                </>
            :
            <p>Box content loading!</p>
            }
        </div>
    )
}
export default UserEditBox