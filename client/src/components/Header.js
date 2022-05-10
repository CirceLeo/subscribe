import { Navigate, NavLink, useNavigate } from "react-router-dom"

function Header(props) {

    const navigateTo = useNavigate()

    function handleLogOut(){
        fetch(`http://localhost:4000/logout`, { method: "DELETE" })
        .then( res => {
            console.log(res)
            alert("BYE")
            navigateTo('/boxes')
            // setUser(null)
        })
        // .then( data => console.log(data))
        .catch( error => console.log(error.message));
    }
    
    return (
        <div className="header">
            <h1>SubScrybe</h1>
            {/* if there's a current user, include welcome name */}
            <div className="navLinks">
                <NavLink to="/boxes" className={({ isActive }) => (isActive ? 'active' : 'inactive')}> All Boxes </NavLink>
                <NavLink to="/myboxes" className={({ isActive }) => (isActive ? 'active' : 'inactive')}> See Your Subscriptions</NavLink>
                {/* if there is a user, conditional render to logout */}
                {/* if not render log in */}
                {/* also, if user render subs, if admin render edit */}
                <NavLink to="/login" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Log In</NavLink>
                <button onClick={handleLogOut}>Log Out</button>
                {/* <NavLink to="/logout" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Log out</NavLink> */}
            </div>
        </div>
    )
}
export default Header