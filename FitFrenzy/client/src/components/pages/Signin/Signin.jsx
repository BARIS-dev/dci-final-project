//import React from "react";
import './Signin.css';
import { GoogleButton } from 'react-google-button';
import { UserAuth } from '../../../context/user.context';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Signin = () =>  {
    const { googleSignIn, user } = UserAuth();

    const navigate = useNavigate();


    const handleGoogleSignIn = async () => {
        try {
            await googleSignIn();


        } catch (error) {
            console.log(error);
        }

    };



    useEffect(() => {
        if(user !=null) {
            navigate("/account")
        }


    }, [user, navigate]);


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