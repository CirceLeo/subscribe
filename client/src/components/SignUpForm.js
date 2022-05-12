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
function SignUpForm() {

    
    
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
                        //add spaces etc to errors
                        setShowErrors(true)
                    })
                }
                setFormData(emptyFormObj)
            }
        //     res.json())
        // .then( data => {
        //     console.log(data)
        )
        .catch( error => console.log(error.message));
    }
    return (
        <div className="signup_form">
            <h3>Welcome!</h3>
            <p>Fill out your details below to sign up:</p>
            {showErrors ? <p className="signup_issues">{errors} <button onClick={() => setShowErrors(false)}>X</button></p> : null }
            <form onSubmit={handleSubmit}>
                <label>username</label>
                <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleFormChange}
                    required
                />
                <br/>
                <label>email address</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    required
                />
                <br/>
                <label>password</label>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleFormChange}
                    required
                />
                <br/>
                <label>confirm password</label>
                <input
                    type="password"
                    name="password_confirm"
                    value={formData.password_confirm}
                    onChange={handleFormChange}
                    required
                />
                <br/>

                <button type="submit">Sign up!</button>
            </form>
        </div>
    )
}
export default SignUpForm