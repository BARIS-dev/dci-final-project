// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfigChat = {
  apiKey: "AIzaSyAOshxYXCYE4kVm6AcqeeQ_1RRxRVGGUw0",
  authDomain: "chat-app-9cd41.firebaseapp.com",
  projectId: "chat-app-9cd41",
  storageBucket: "chat-app-9cd41.appspot.com",
  messagingSenderId: "569033571281",
  appId: "1:569033571281:web:b755cd2a5646baddf3fef0"
};

// Initialize Firebase
const chatApp = initializeApp(firebaseConfigChat, 'chat-app');
export const chatAuth = getAuth(chatApp)
export const db = getFirestore(chatApp)




