import {useEffect, useState} from 'react'

function UserEditBox({closeModal, curSub}) {
    const [showSub, setShowSub] = useState({})
    
    useEffect(() => {
        fetch(`http://localhost:4000/subscriptions/${curSub}`)
        .then(resp => resp.json())
        .then(data => setShowSub(data))
    }, [])


    return (
        <div className="user-edit-sub">
            <button className="close-button" onClick={closeModal}>X</button>
            <p><strong>Subscription title: </strong>{showSub.box.title}</p>
            <form></form>
        </div>
    )
}
export default UserEditBox