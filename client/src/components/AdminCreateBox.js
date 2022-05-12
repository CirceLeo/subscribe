import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminCreateBox() {

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
        <h2>Create a new box!</h2>
        <form onSubmit={handleFormSubmit}>
            <label className="form-label">Title</label>
            <input type="text" name="title" onChange={handleInputChange} value={formData.title} required></input>
            <label className="form-label">Image</label>
            <input type="text" name="image_url" onChange={handleInputChange} value={formData.image_url} required></input>
            <label className="form-label">Price</label>
            <input type="number" name="price" onChange={handleInputChange} value={formData.price} required></input>
            <label className="form-label">Contents</label>
            <input type="text" name="items" onChange={handleInputChange} value={formData.items} required></input>
            <label className="form-label">Description</label>
            <input type="text" name="description" onChange={handleInputChange} value={formData.description} required></input>
            <button className='modal-button'>Create box</button>
        </form>
        </>
    )
}

export default AdminCreateBox