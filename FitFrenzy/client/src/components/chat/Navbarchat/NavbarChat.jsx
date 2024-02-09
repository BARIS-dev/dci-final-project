//import React from "react";
import "./NavbarChat.css";
import { chatAuth } from "../../../firebase/firebase.chat";
import { useAuthState } from "react-firebase-hooks/auth";
import SignInChat from "../SignInChat/SignInChat";
import LogOutChat from "../Logout/LogOutChat";
import { SiGooglechat } from "react-icons/si";
import Modal from "../Modal/Modal";
import { useState } from "react";

//import Signin from "../../../pages/Signin/Signin";
//import SigninChat from "../SignInChat/SignInChat"
//import GoogleButton from "react-google-button";
//import PropTypes from "prop-types"

const Navbarchat = () => {
  const [user] = useAuthState(chatAuth);
  const [openModal, setOpenModal] = useState(false);

  console.log(user);

  return (
    <div className="nav">
      <h1 className="heading">
        <a href="navbarchat" target="_blank">
          {" "}
          Brauchen Sie Rat? Chatte mit uns{" "}
        </a>
      </h1>
      <h2 className="heading">Montag bis Freitag 09:00 - 17:00 </h2>
      <p></p>
      <button className="modalBtn" onClick={() => setOpenModal(true)}>
        Chat
      </button>
      <Modal open={openModal} onClose={() => setOpenModal(false)} />
      <SiGooglechat size={20} className="icon" />

      {user ? <LogOutChat /> : <SignInChat />}
    </div>
  );
};

//

/*Navbarchat.propTypes = {
    onGoogleSignIn: PropTypes.func.isRequired,
  };*/

export default Navbarchat;
