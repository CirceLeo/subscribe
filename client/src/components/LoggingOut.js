import React from "react"
import { useNavigate } from "react-router-dom"

function LoggingOut() {

    let navigateTo = useNavigate();

    function navigateFunction() {
        navigateTo("/boxes");
    }

    setTimeout(navigateFunction, 1500)


    return (
        <div className="header">
            <h1 id="logging-out">Logging out...</h1>
        </div>
    )
}

export default LoggingOut