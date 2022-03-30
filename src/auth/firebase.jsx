// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2GuPeE6f54O9JXcV5YXUbRbcmfQrvmE8",
  authDomain: "movieapp3541.firebaseapp.com",
  projectId: "movieapp3541",
  storageBucket: "movieapp3541.appspot.com",
  messagingSenderId: "219628492620",
  appId: "1:219628492620:web:fa03e6a922867e619ca1e9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export const signIn = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(email, password);
      console.log(userCredential);
    })
    .catch((err) => {
      console.log(err);
    });
};
