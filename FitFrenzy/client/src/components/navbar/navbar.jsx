//import React from "react";
import { Link } from "react-router-dom"
import "./navbar.css";
import { UserAuth } from "../../context/user.context.jsx";


const Navbar = () => {

    const {user, logOut} = UserAuth();
    const handleSignOut = async () => {

        try {
            await logOut()

        } catch(error) {
            console.log (error)
        }
    }

    return (
        <div className="navbar-container">
        <h1 className="navbar-title">
            Firebase test
        </h1>
        {user?.displayName ? <button onClick={handleSignOut}>Logout</button>:<Link to="signin" className="navbar-link">Sign in</Link>}
        

        </div>
        
    )
}

export default Navbar;