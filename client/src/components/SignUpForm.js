import { useState } from "react"
import { useNavigate } from "react-router-dom"

function SignUpForm() {
    
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        password_confirm: ''
    })

    function handleFormChange(event){
        setFormData({
            ...formData,
            [event.target.name] : event.target.value
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        fetch(`http://localhost:3000/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({
                formData
            })
        })
        .then( res => res.json())
        .then( data => console.log(data))
        .catch( error => console.log(error.message));
        setFormData({
            username: '',
            email: '',
            password: '',
            password_confirm: ''
        })
    }
    return (
        <div className="signup_form">
            <h3>Welcome!</h3>
            <p>Fill out your details below to sign up:</p>
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
                    type="text"
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