import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

function AdminEditBox({ closeModal, boxId }) {

    let navigateTo = useNavigate();

    const [formData, setFormData] = useState({
        price: 0,
        title: "",
        description: "",
        items: "",
        image_url: ""
    })

    const [viewedBox, setViewedBox] = useState({});

    // fetch using boxId to render selected box
    useEffect(() => {
        fetch(`http://localhost:4000/boxes/${boxId}`)
        .then( res => res.json())
        .then( data => setViewedBox(data))
        .catch( error => console.log(error.message));
    }, [])

    
    function handleInputChange(e) {
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })

    }

    function handleEditFormSubmit(e) {
       e.preventDefault();
       fetch(`http://localhost:4000/boxes/${boxId}`, {
           method: "PATCH",
           headers: {
               "Content-Type": "application/json",
               Accept: "application/json"
           },
           body: JSON.stringify(formData)
       })
       .then( res => {
           res.json()
           navigateTo("/updating")
    })
       .catch( error => console.log(error.message));
    }


    return (
        <div className="box-detail">
            <button onClick={closeModal} className="close-button">&times;</button>
            <h2>Edit {viewedBox.title}!</h2>
            <form onSubmit={handleEditFormSubmit}>
            <label className="form-label">Title:</label>
            <input type="text" placeholder={viewedBox.title} onChange={handleInputChange} name="title" value={formData.title}></input>
            <label className="form-label">Image:</label>
            <input type="text" placeholder={viewedBox.image_url} onChange={handleInputChange} name="image_url" value={formData.image_url}></input>
            <label className="form-label">Price:</label>
            <input type="number" placeholder={viewedBox.price} onChange={handleInputChange} name="price" value={formData.price}></input>
            <label className="form-label">Items:</label>
            <input type="textbox" placeholder={viewedBox.items} onChange={handleInputChange} name="items" value={formData.items}></input>
            <label className="form-label">Description:</label>
            <input type="textbox" placeholder={viewedBox.description} onChange={handleInputChange} name="description" value={formData.description}></input>
            <button>Submit changes</button>
            <button onClick={closeModal}>Cancel changes</button>
            </form>
        </div>

    )
}

export default AdminEditBox