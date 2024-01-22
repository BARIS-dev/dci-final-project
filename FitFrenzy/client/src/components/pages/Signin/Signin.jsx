//import React from "react";
import './Signin.css';
import { GoogleButton } from 'react-google-button';
import { UserAuth } from '../../../context/user.context';


const Signin = () =>  {
    const { googleSignIn } = UserAuth();


    const handleGoogleSignIn = async () => {
        try {
            await googleSignIn();


        } catch (error) {
            console.log(error);
        }

    };
    return (
        <div className="signin-container">
            <h1 className="signin-title">Sign in</h1>
            <div className="signin-content">
                <GoogleButton onClick={handleGoogleSignIn} />

            </div>
        </div>
    );
};

export default Signin;