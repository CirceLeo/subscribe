import React, { useContext } from "react";
import { UserContext } from "../context/user";
import { Navigate, NavLink, useNavigate } from "react-router-dom"
import subscribeLogo from "../subscrybe_logo.jpeg.png";

function Header(props) {

    const [user, setUser] = useContext(UserContext)


    const navigateTo = useNavigate()

    function handleLogOut(){
        fetch(`http://localhost:4000/logout`, { method: "DELETE" })
        .then( res => console.log(res))
        .then(() => 
        { navigateTo("/loggingout") 
            setUser({})
        })
        // .then(data => console.log(data))
        // .then( data => console.log(data))
        .catch( error => console.log(error.message));
    }
    
    return (
        <div className="header">
            {/* <h1 className="header-logo">SubScrybe</h1> */}
            <div className="row">
                <div id ="header-logo-div" className="column">
                    <img id="logo-img" src={subscribeLogo}/>
                </div>

                    {/* if there's a current user, include welcome name */}
                <div className="column">
                    {user.username ? <h2 id="welcome-user">{`Welcome, ${user.username}`}</h2> : <h2 id="welcome-user">Welcome to Subscrybe</h2>}
                </div>
                <div className="column">
                    <div className="navLinks">
                        <NavLink to="/boxes" className={({ isActive }) => (isActive ? 'active' : 'inactive')}> All Boxes </NavLink>
                        {user.username ? 
                        <NavLink to="/myboxes" className={({ isActive }) => (isActive ? 'active' : 'inactive')}> See Your Subscriptions</NavLink>
                        :
                        null
                        }

                {/* if there is a user, conditional render to logout */}
                {/* if not render log in */}
                {/* also, if user render subs, if admin render edit */}

                        {!user.username ? 
                        <NavLink to="/login" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Log In</NavLink>
                        :
                        null
                        }

                        {user.isAdmin ? 
                        <NavLink to="/editboxes" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Edit Your Boxes</NavLink>
                        :
                        null
                        }

                        {user.username || user.isAdmin ?
                        <button className="fake-header-link" onClick={handleLogOut}>Log Out</button>
                        :
                        null
                        }

                {/* <NavLink to="/logout" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Log out</NavLink> */}
                </div>
                </div>
            </div>
        </div>
    )
}
export default Header