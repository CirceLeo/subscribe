import React, { useEffect, useState } from "react"

function AdminEditBox({ closeModal, boxId }) {

    const [viewedBox, setViewedBox] = useState({});

    // fetch using boxId to render selected box
    useEffect(() => {
        fetch(`http://localhost:4000/boxes/${boxId}`)
        .then( res => res.json())
        .then( data => setViewedBox(data))
        .catch( error => console.log(error.message));
    }, [])

    console.log("from edit moidak: ", viewedBox)

    return (
        <div className="box-detail">
            <button onClick={closeModal} className="close-button">&times;</button>
            <h2>Edit {viewedBox.title}!</h2>
            <form>
            <label className="form-label">Title:</label>
            <input type="text" placeholder={viewedBox.title}></input>
            <label className="form-label">Price:</label>
            <input type="number" placeholder={viewedBox.price}></input>
            <label className="form-label">Items:</label>
            <input type="textbox" placeholder={viewedBox.items}></input>
            <label className="form-label">Description:</label>
            <input type="textbox" placeholder={viewedBox.description}></input>
            <button>Submit changes</button>
            <button onClick={closeModal}>Cancel changes</button>
            </form>
        </div>

    )
}

export default AdminEditBox