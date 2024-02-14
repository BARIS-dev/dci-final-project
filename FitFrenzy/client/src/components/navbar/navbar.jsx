//import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";
import { UserAuth } from "../../context/user.context.jsx";

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();
  const handleSignOut = async () => {
    try {
      await logOut();
      navigate("/signed-out");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="navbar-container">
      <h1 className="navbar-title">Firebase test</h1>
      {user?.displayName ? (
        <button onClick={handleSignOut}>Logout</button>
      ) : (
        <Link to="signin" className="navbar-link">
          Sign in
        </Link>
      )}
    </div>
  );
};

export default Navbar;
