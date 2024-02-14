//import React from 'react'

import GoogleButton from "react-google-button"
import "./SignInChat.css"
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth"
import { chatAuth } from "../../../firebase/firebase.chat"


const googleSignIn = () => {
  const provider = new GoogleAuthProvider()
  signInWithRedirect(chatAuth, provider)
}

export const SignInChat = () => {
  return (
    <div className="SignInWrapper">
        <GoogleButton onClick={googleSignIn}/>
    </div>
  )
}



export default SignInChat;