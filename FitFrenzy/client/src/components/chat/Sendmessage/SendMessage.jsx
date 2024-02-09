//import React from 'react'
import { useState } from "react";
import "./SendMessage.css";
import { chatAuth, db } from "../../../firebase/firebase.chat";

import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import PropTypes from "prop-types";

const SendMessage = ({ scroll }) => {
  const [input, setInput] = useState("");

  const SendMessage = async (e) => {
    e.preventDefault();
    if (input === "") {
      alert("Please enter a valid message");
    }
    const { uid, displayName } = chatAuth.currentUser;
    await addDoc(collection(db, "messages"), {
      text: input,
      name: displayName,
      uid,
      timestamp: serverTimestamp(),
    });

    setInput("");
    scroll.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <form onSubmit={SendMessage} className="form-container">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="input-style"
        type="text"
        placeholder="Message"
      />
      <button className="button-style" type="submit">
        Send
      </button>
    </form>
  );
};

SendMessage.propTypes = {
  scroll: PropTypes.shape({
    current: PropTypes.instanceOf(Element),
  }),
};

export default SendMessage;
