import Header from "./Header"
import SignUpForm from "./SignUpForm"
import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext, userObject } from "../context/user";


function LoginPage({}) {

    const navigate = useNavigate()

    const [user, setUser] = useContext(UserContext)
    const [formData, setFormData] = useState({username: '', password: ''})
    const [showSignUp, setShowSignUp] = useState(false)
    const [errors, setErrors] = useState([]);
    const [showErrors, setShowErrors] = useState(false)

    function handleSubmit(e) {
        e.preventDefault()
        fetch("http://localhost:4000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then( res => {
            if(res.ok){
                res.json().then(userData => {
                    setErrors(null)
                    setUser(userData)
                    navigate('/loggingin')
                })
            } else {
                res.json().then(response => {
                    setErrors(response.error)
                    setShowErrors(true)
                })
            }
            setFormData({username: '', password: ''})
            
        })
        // .then(navigate("/loggingin"))
        .catch( error => console.log(error.message));
    }

    function handleFormChange(event){
        setFormData({
            ...formData,
            [event.target.name] : event.target.value
        })
    }

    function openSignUp(){
        setShowSignUp(true)
    }

    function closeSignUp(){
        setShowSignUp(false)
    }
    return (
        <div>
            <Header />
            <form className="login-form" onSubmit={handleSubmit}>
            <h1>Login</h1>
            {/* {change errors to snackbar/toast?} */}
            {showErrors ? <p className="logon-issue">{errors} <button className="close-button" onClick={() => setShowErrors(false)}>X</button></p> : null }
                <label>username: </label>
                <input 
                    type="text"
                    value={formData.username}
                    onChange={handleFormChange}
                    name="username"
                />
                <br/>
                <br/>
                <label>password: </label>
                <input 
                    type="password"
                    value={FormData.password}
                    onChange={handleFormChange}
                    name="password"
                />
                <br/>
                <button className="modal-button" type="submit">login</button>
            </form>

            <br />
            {/* cant apply X style cause it only applys to one version? */}
            <button className="modal-button" onClick={openSignUp}> not a user? Sign Up!</button>
            {
                showSignUp && (
                    <>
                    <div className="overlay"></div>
                    <div className="modal">
                        <SignUpForm closeSignUp={closeSignUp}/>
                    </div>
                    </>
                )
            }
        </div>
    )
}

export default LoginPage