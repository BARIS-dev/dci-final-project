//import React from "react";
//import  {useEffect, useState} from "react";
import Navbarchat from "./Navbarchat/NavbarChat";

import { chatAuth } from "../../firebase/firebase.chat"
import { useAuthState } from "react-firebase-hooks/auth"
import "./ChatApp.css"



//import firebase from "firebase.app";
//import { GoogleAuthProvider } from "firebase/auth";
import "firebase/auth"

//import Signin from "../../pages/Signin/Signin";

/*function ChatApp() {

    const [user] = useAuthState(chatAuth)
    console.log(user)
    return (

        <div>
            <Navbarchat />
            <Modal />
            
            
        </div>
    )
}*/




function ChatApp() {
    const [user] = useAuthState(chatAuth);


    return (
        <div className="app-container">
            <section className="section-container">
        
            <Navbarchat />
            {user && <ChatApp /> }
        </section>
        </div>

);
}

export default ChatApp;


/*const Chat = () => {
    const [isLoggedIn, setisLoggedIn] = useState(false);
    const [user] = useAuthState(auth);

    useEffect(() => {

        if (user) {
            setisLoggedIn(true);

        } else {
            setisLoggedIn(false);
        }
       
        
    
}, [user]);



const handleSignIn = async () => {

    try {
        const provider = new firebase.auth.GoogleAuthProvider();
        await auth.signInWithPopup(provider);
    } catch (error) {
        console.log("Google sign in error", error)
    }
};


return (
    <div>
        {isLoggedIn && <Navbarchat />}
        {!isLoggedIn && <Signin onGoogleSign/>}
    </div>

);
};


export default ChatApp; */


