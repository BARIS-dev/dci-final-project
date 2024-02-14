//import React from 'react'
import { chatAuth } from "../../../firebase/firebase.chat";
import "./Message.css";
import PropTypes from "prop-types";

const Message = ({ message }) => {
  const isSent = message.uid === chatAuth.currentUser.uid;

  return (
    <div className="message">
      <div className={isSent ? "sent" : "received"}>
        <p className="name">{message.name}</p>
        <p>{message.text}</p>
      </div>
    </div>
  );
};

Message.propTypes = {
  message: PropTypes.shape({
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    uid: PropTypes.string.isRequired,
  }).isRequired,
};

export default Message;
