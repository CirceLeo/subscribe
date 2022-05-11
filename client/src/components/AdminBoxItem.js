import React from "react"

function AdminBoxItem({ box, openModal}) {

    return (
        <div>
            <div className="box-items">
                <h1>Title: {box.title}</h1>
                <img src={box.image_url} alt="picture of a box" />
                <h4>Price: $ {box.price.toFixed(2)} per month</h4>
                <h4>{box.items}</h4>
                <h4>Description: {box.description}</h4>
                <button onClick={(e) => openModal(e, box.id)}>Edit</button>
            </div>
        </div>
    )
}
export default AdminBoxItem