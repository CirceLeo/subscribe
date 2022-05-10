import { NavLink } from "react-router-dom"

function Header(props) {
    
    return (
        <div className="header">
            <h1>SubScrybe</h1>
            {/* if there's a current user, include welcome name */}
            <div className="navLinks">
                <NavLink to="/boxes" className={({ isActive }) => (isActive ? 'active' : 'inactive')}> All Boxes </NavLink>
                <NavLink to="/myboxes" className={({ isActive }) => (isActive ? 'active' : 'inactive')}> See Your Subscriptions</NavLink>
                {/* if there is a user, conditional render to logout */}
                <NavLink to="/login" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Log In</NavLink>
            </div>
        </div>
    )
}
export default Header