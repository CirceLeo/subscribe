import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminCreateBox({ closeModal }) {

    let navigateTo = useNavigate();

    const [formData, setFormData] = useState({
        title: "",
        price: 0,
        image_url: "",
        items: "",
        description: ""
    })

    function handleInputChange(e) {
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })
    }

    function handleFormSubmit(e) {
        e.preventDefault();
        fetch(`http://localhost:4000/boxes`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then( res => {
            res.json()
            navigateTo("/creating")
        })
        .then( data => console.log(data))
        .catch( error => console.log(error.message));
    } 

    return (
        <>
        <button onClick={closeModal} className="close-button">&times;</button>
        <h2>Create a new box!</h2>
        <form className="admin-edit-form" onSubmit={handleFormSubmit}>
            <div className="admin-title">
                <label className="form-label">Title:</label>
                <input type="text" className="form-input" name="title" placeholder="Title" onChange={handleInputChange} value={formData.title} required></input>
            </div>
            <div className="admin-image">
                <label className="form-label">Image:</label>
                <input type="text" className="form-input" name="image_url" placeholder="Image" onChange={handleInputChange} value={formData.image_url} required></input>
            </div>
            <div className="admin-price">
                <label className="form-label">Price:</label>
                <input type="number" className="form-input" name="price" placeholder="Price" onChange={handleInputChange} value={formData.price} required></input>
            </div>
            <div className="admin-contents">
                <label className="form-label">Contents:</label>
                <textarea type="text" className="form-input" name="items" placeholder="Items" onChange={handleInputChange} value={formData.items} required></textarea>
            </div>
            <div className="admin-description">
                <label className="form-label">Description:</label>
                <textarea type="text"  className="form-input"name="description" placeholder="Description" onChange={handleInputChange} value={formData.description} required></textarea>
            </div>
            <div className="admin-btn">
                <button className="modal-button">Create box</button>
            </div>
        </form>
        </>
    )
}

export default AdminCreateBox