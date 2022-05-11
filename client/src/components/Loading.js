import React from "react"
import { useNavigate } from "react-router-dom"

function Loading({message, destination}) {

    let navigateTo = useNavigate();

    function navigateFunction() {
        navigateTo(destination);
    }

    setTimeout(navigateFunction, 1500)


    return (
        <div className="header">
            <h1 id="logging-out">{message}</h1>
        </div>
    )
}

export default Loading