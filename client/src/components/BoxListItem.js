import { useState } from "react";

function BoxListItem({ box, openModal }) {

    return (
        <div>
            <div className="box-items">
                <h1>{box.title}</h1>
                <img src={box.image_url} alt="picture of a box" className="box-pic"/>
                <p> <strong> Price: </strong> $ {box.price.toFixed(2)} per month</p>
                <p className="box-description"><strong> Description: </strong>{box.description.length > 125 ? <>{box.description.substring(0,120)}... </>: <>{box.description}</> }</p>
                <button onClick={(e) => openModal(e, box.id)}>View Details</button>
            </div>
        </div>
    )
}
export default BoxListItem