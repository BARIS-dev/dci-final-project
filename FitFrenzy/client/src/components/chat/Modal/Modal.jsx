//import React from 'react'
import PropTypes from "prop-types";
import "./Modal.css";
import ChatRoom from "../ChatRoom/Chatroom";
import SendMessage from "../Sendmessage/SendMessage";

const Modal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div className="overlay">
      <div className="modalContainer">
        <div className="navbar-chat">
          <h2>Hallo!</h2>
          <p>
            Wir sind für dich da und freuen uns auf deine Fragen oder dein
            Feedback
          </p>
        </div>
        <div className="content">
          <ChatRoom />
        </div>

        <div className="send-message">
          <SendMessage />
        </div>

        <div className="modalRight">
          <button onClick={onClose} className="closeBtn">
            X
          </button>

          <div className="btnContainer"></div>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
