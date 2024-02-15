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
    <div className="chat-help-container">
      <a className="modal-btn" onClick={() => setOpenModal(true)}>
        Kundensupport-Chat <SiGooglechat />
      </a>
      <Modal open={openModal} onClose={() => setOpenModal(false)} />

      {user ? (
        <div>
          Eingeloggt als: {user.displayName} <LogOutChat />
        </div>
      ) : (
        <div>
          Logge dich ein, um zu chatten
          <SignInChat />
        </div>
      )}
    </div>
  );
};

//

/*Navbarchat.propTypes = {
    onGoogleSignIn: PropTypes.func.isRequired,
  };*/

export default Navbarchat;
