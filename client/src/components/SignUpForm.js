function SignUpForm() {
    
    function handleSubmit(e){
        e.preventDefault()
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
                />
                <br/>
                <label>email address</label>
                <input
                    type="text"
                    name="email"
                />
                <br/>
                <label>password</label>
                <input
                    type="password"
                    name="password"
                />
                <br/>
                <label>confirm password</label>
                <input
                    type="password"
                    name="password_confirm"
                />
                <br/>

                <button type="submit">Sign up!</button>
            </form>
        </div>
    )
}
export default SignUpForm