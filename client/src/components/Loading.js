import React from "react"
import { useNavigate } from "react-router-dom"

function Loading({message, destination}) {

    let navigateTo = useNavigate();

    function navigateFunction() {
        navigateTo(destination);
    }

    setTimeout(navigateFunction, 1500)


    return (
        <div className="loading-page">
            <div className="header">
                <h1 id="logging-out">{message}</h1>
            </div>
            <img src="https://media4.giphy.com/media/42EDQGQSRXOGJ49atm/200w.webp?cid=ecf05e47urendu2z1qt0uqos8i26pvtj25b01e3r9livw20g&rid=200w.webp&ct=g" alt="a happy cat holding a box" id="loading-cat"/>
        </div>
    )
}

export default Loading