
import { initializeApp } from "firebase/app";

//initialize the get auth
//import { getAuth } from 'firebase/auth';


// Your web app's Firebase configuration / from Firebase Dashboard 
const firebaseConfig = {
  apiKey: "AIzaSyCmPMbrk9bdk4jPtC8LOixLA9A4rK9TnoQ",
  authDomain: "final-project-be96c.firebaseapp.com",
  projectId: "final-project-be96c",
  storageBucket: "final-project-be96c.appspot.com",
  messagingSenderId: "910375801251",
  appId: "1:910375801251:web:386761e173d2adfbe14a16"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
// A export 
//export const auth = getAuth(app);
export default firebaseApp