// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBW7-9yb9WTMDWTtzB-412fNRzBqrFDxE4",
  authDomain: "homefinder-clone-react.firebaseapp.com",
  projectId: "homefinder-clone-react",
  storageBucket: "homefinder-clone-react.firebasestorage.app",
  messagingSenderId: "822766812026",
  appId: "1:822766812026:web:a2b619cc7868d6065134c3"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()