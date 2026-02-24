// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAT-SB1abTKwL_zH3FqWzbf6QZaqm9to68",
  authDomain: "netflixgpt-19644.firebaseapp.com",
  projectId: "netflixgpt-19644",
  storageBucket: "netflixgpt-19644.firebasestorage.app",
  messagingSenderId: "326413361379",
  appId: "1:326413361379:web:bdc02006d2486873fc65d6",
  measurementId: "G-YQWYL6EV55",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
