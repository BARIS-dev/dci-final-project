//import React from 'react'
import "./Chatroom.css"
import { useState, useEffect, useRef } from "react";
import Message from "../Message/Message";
//import { query } from "express";
import {db} from "../../../firebase/firebase.chat"
import {query, collection, orderBy, onSnapshot}from "firebase/firestore"
import SendMessage from "../Sendmessage/SendMessage";




const ChatRoom = () => {

  const [messages, setMessages] = useState([]);
  const scroll = useRef()



  useEffect(() => {
    const q = query(collection(db,"messages"), orderBy("timestamp"))
    const unsubscribe = onSnapshot(q,(querySnapshot) => {
      let messages = []
      querySnapshot.forEach((doc) => {
        messages.push({...doc.data(), id: doc.id})
      })
      setMessages(messages)
        
      });


    return () => unsubscribe();

  }, [])


  return (
    <>
    <main className="chat-room">

      {messages && messages.map((message) => (
        <Message key={message.id} message={message}/>
      ))}
      

    </main>
    <SendMessage scroll={scroll} />
    <span ref={scroll}></span>
    </>
  );
};

export default ChatRoom