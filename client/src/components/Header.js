import { NavLink } from "react-router-dom"

// import navLinks (?)
function Header(props) {
    
    return (
        <div className="header">
            <h1>SubScrybe</h1>
            <div className="navLinks">
                <NavLink to="/boxes" activeClassName="active"> All Boxes </NavLink>
                <NavLink to="/myboxes" activeClassName="active"> See Your Subscriptions</NavLink>
                <NavLink to="/login" activeClassName="active">Log In</NavLink>
            </div>
        </div>
    )
}
export default Header