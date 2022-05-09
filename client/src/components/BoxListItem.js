import { useState } from "react";

function BoxListItem({ box, openModal }) {

    return (
        <div>
            <div className="box-items">
                <h1>Title: {box.title}</h1>
                <h4>Price: {box.price}</h4>
                <h4>Description: {box.description}</h4>
                <button onClick={(e) => openModal(e, box.id)}>View</button>
            </div>
        </div>
    )
}
export default BoxListItem