
import { Link } from "react-router-dom"
import "./navbar.css";


const Navbar = () => {

    return (
        <div className="navbar-container">
        <h1 className="navbar-title">
            Firebase test
        </h1>
        <Link to="signin" className="navbar-link">Sign in</Link>

        </div>
        
    )
}

export default Navbar;