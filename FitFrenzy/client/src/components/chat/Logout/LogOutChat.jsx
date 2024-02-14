//import React from 'react'

import { chatAuth } from "../../../firebase/firebase.chat";

import "./LogOutChat.css";

/*const LogOutChat = () => {
  const SignOutChat = () => {
    SignOutChat(chatAuth)
  }
  return (
    <button onClick={() => chatAuth.SignOutChat()}className="logout-button">
      Logout

    </button>
  )
}

export default LogOutChat*/

const LogOutChat = () => {
  return (
    <button onClick={() => chatAuth.LogOutChat()} className="logout-button">
      Logout
    </button>
  );
};

export default LogOutChat;
