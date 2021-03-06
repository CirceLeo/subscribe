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

    function handleDeleteClick() {
        fetch(`http://localhost:4000/boxes/${boxId}`, {
            method: "DELETE"
        })
        .catch( error => console.log(error.message));
    }


    return (
        <div className="box-detail">
            <button onClick={closeModal} className="close-button">&times;</button>
            <h2 className='modal-title'>Edit {viewedBox.title}!</h2>
            <div >
            <form className="admin-edit-form" onSubmit={handleEditFormSubmit}>
                <div className="admin-title">
                    <label className="form-label">Title:</label>
                    <textarea className="form-input" placeholder={viewedBox.title} onChange={handleInputChange} name="title" value={formData.title}></textarea>
                </div>
                <div className="admin-image">
                    <label className="form-label">Image:</label>
                    <textarea  className="form-input" placeholder={viewedBox.image_url} onChange={handleInputChange} name="image_url" value={formData.image_url}></textarea>
                </div>
                <div className="admin-price">
                    <label className="form-label ">Price:</label>
                    <input type="number" className="form-input " placeholder={viewedBox.price} onChange={handleInputChange} name="price" value={formData.price}></input>
                </div>
                <div className="admin-contents">
                    <label className="form-label ">Contents:</label>
                    <textarea className="form-input" placeholder={viewedBox.items} onChange={handleInputChange} name="items" value={formData.items}></textarea>
                </div>
                <div className="admin-description">
                    <label className="form-label">Description:</label>
                    <textarea className="form-input" placeholder={viewedBox.description} onChange={handleInputChange} name="description" value={formData.description}></textarea>
                </div>
                <div className="admin-btn">
                    <button className='modal-button'>Submit changes</button>
                    <button className='modal-button' onClick={handleDeleteClick}>Delete this box</button>
                </div>
            </form>
            </div>
        </div>

    )
}

export default AdminEditBox