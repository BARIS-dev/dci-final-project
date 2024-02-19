//import React from "react";
import './Signin.css';
import { GoogleButton } from 'react-google-button';
import { UserAuth } from '../../context/user.context.jsx';
// import { useNavigate } from 'react-router-dom';
// import { useEffect } from 'react';
import LoginVEmail from '../LoginVEmail/LoginVEmail.jsx';

const Signin = () => {
  const {
    googleSignIn,
    // user
  } = UserAuth();

  // const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   if (user != null) {
  //     navigate('/account');
  //   }
  // }, [user, navigate]);

  return (
    <>
      <br />
      <div className="signin-container">
        <h1 className="signin-title">Sign in</h1>
        <LoginVEmail />
        <div className="signin-content">
          <GoogleButton onClick={handleGoogleSignIn} />
        </div>
      </div>
    </>
  );
};

export default Signin;
