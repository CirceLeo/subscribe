import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext, userObject } from "../context/user";


const emptyFormObj = {
    username: '',
    email: '',
    password: '',
    password_confirm: '',
    isAdmin: false
}
function SignUpForm({closeSignUp}) {

    
    
    const navigate = useNavigate()
    
    const [user, setUser] = useContext(UserContext)
    const [formData, setFormData] = useState(emptyFormObj)
    const [errors, setErrors] = useState([]);
    const [showErrors, setShowErrors] = useState(false)

    function handleFormChange(event){
        setFormData({
            ...formData,
            [event.target.name] : event.target.value
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        fetch(`http://localhost:4000/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then( res => 
            {
                if(res.ok){
                    res.json().then(newUser => {
                        setErrors(null)
                        console.log(newUser)
                        setUser(newUser)
                        // alert("Welcome! Check out some boxes!")
                        navigate('/signedup')
                    })
                } else {
                    res.json().then(response => {
                        setErrors(response.errors)
                        setShowErrors(true)
                    })
                }
                setFormData(emptyFormObj)
            }
        )
        .catch( error => console.log(error.message));
    }
    return (
        <div className="signup_form">
            <button className="close-button" onClick={closeSignUp}>X</button>
            <h3>Welcome!</h3>
            <p>Fill out your details below to sign up:</p>
            {showErrors ? <p className="signup_issues">{errors} <button className="close-button" onClick={() => setShowErrors(false)}>X</button></p> : null }
            <form onSubmit={handleSubmit}>
                <label className="form-label">username:</label>
                <input className="form-input"
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleFormChange}
                    required
                />
                <br/>
                <label className="form-label">email address:</label>
                <input className="form-input"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    required
                />
                <br/>
                <label className="form-label">password:</label>
                <input className="form-input"
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleFormChange}
                    required
                />
                <br/>
                <label className="form-label">confirm password:</label>
                <input className="form-input"
                    type="password"
                    name="password_confirm"
                    value={formData.password_confirm}
                    onChange={handleFormChange}
                    required
                />
                <br/>

                <button className="modal-button" type="submit">Sign up!</button>
            </form>
        </div>
    )
}
export default SignUpForm