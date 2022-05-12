import React from "react"

function AdminBoxItem({ box, openModal}) {

    return (
        <div>
            <div className="box-items">
                <h1>{box.title}</h1>
                <img src={box.image_url} alt="picture of a box" className="box-pic" />
                <p> <strong>Price:</strong> $ {box.price.toFixed(2)} per month</p>
                <p><strong>Contents:</strong> {box.items}</p>
                <p><strong>Description:</strong> {box.description}</p>
                <button onClick={(e) => openModal(e, box.id)}>Edit</button>
            </div>
        </div>
    )
}
export default AdminBoxItem