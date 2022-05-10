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
                    // goodLogin(user)
                    setErrors(null)
                    setUser(userData)
                    navigate('/')
                })
            } else {
                res.json().then(response => {
                    console.log(response.error)
                    setErrors(response.error)
                    setShowErrors(true)
                })
            }
            setFormData({username: '', password: ''})
        })
        .catch( error => console.log(error.message));
    }

    function handleFormChange(event){
        setFormData({
            ...formData,
            [event.target.name] : event.target.value
        })
    }

    function toggleSignUpForm(){
        setShowSignUp(!showSignUp)
    }
    return (
        <div>
            <Header />
            <h1>Login</h1>
            {/* {change errors to snackbar/toast?} */}
            {showErrors ? <p className="logon_issue">{errors} <button className="close-button" onClick={() => setShowErrors(false)}>X</button></p> : null }

            <form onSubmit={handleSubmit}>
                <label>username</label>
                <input 
                    type="text"
                    value={formData.username}
                    onChange={handleFormChange}
                    name="username"
                />
                <br/>
                <label>password</label>
                <input 
                    type="password"
                    value={FormData.password}
                    onChange={handleFormChange}
                    name="password"
                />
                <br/>
                <button type="submit">login</button>
            </form>

            <br />
            {/* cant apply X style cause it only applys to one version? */}
            <button onClick={toggleSignUpForm}>{showSignUp ? "X": "not a user? Sign Up!"}</button>
            {showSignUp ? <SignUpForm/> : null}

        </div>
    )
}

export default LoginPage