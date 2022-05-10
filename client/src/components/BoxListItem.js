import { useState } from "react";

function BoxListItem({ box, openModal }) {

    return (
        <div>
            <div className="box-items">
                <h1>Title: {box.title}</h1>
                {console.log(box)}
                <img src={box.image_url} alt="picture of a box" />
                <h4>Price: {box.price} per month</h4>
                <h4>Description: {box.description}</h4>
                <button onClick={(e) => openModal(e, box.id)}>View</button>
            </div>
        </div>
    )
}
export default BoxListItem