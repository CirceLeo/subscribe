import React from "react"

function AdminBoxItem({ box, openModal}) {
    // console.log(box)
    return (
        <div>
            <div className="box-items">
                <h1>{box.title}</h1>
                <img src={box.image_url} alt="picture of a box" className="box-pic" />
                <p><strong>Current Subscriptions: </strong>{box.subscriptions.length}</p>
                <p><strong>Monthly Profit: </strong>$ {box.subscriptions.length * box.price}</p>
                <p> <strong>Price:</strong> $ {box.price.toFixed(2)} per month</p>
                {/* <p> <strong>Contents:</strong> {box.items.length > 50 ? <>{box.items.substring(0,40)}... </>: <>{box.items}</> }</p> */}
                {/* <p className="box-description"><strong>Description:</strong> {box.description.length > 90 ? <>{box.description.substring(0,90)}... </>: <>{box.description}</> }</p> */}
                <button onClick={(e) => openModal(e, box.id)}>Edit Details</button>
            </div>
        </div>
    )
}
export default AdminBoxItem