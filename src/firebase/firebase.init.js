//DO NOT Send firebase config to public repo


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHwWFxOcfYLhKb8YjbL4lDupEQYgJ4f-k",
  authDomain: "simple-firebase-auth-fb6c7.firebaseapp.com",
  projectId: "simple-firebase-auth-fb6c7",
  storageBucket: "simple-firebase-auth-fb6c7.firebasestorage.app",
  messagingSenderId: "700137573605",
  appId: "1:700137573605:web:250356b8d9b2366408980c",
  measurementId: "G-9ECEKFV4F4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
