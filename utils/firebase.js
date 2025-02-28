// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUeRUO816fDJD3iXToPkxj_y0KDJ8I5Ss",
  authDomain: "netflixclone-16623.firebaseapp.com",
  projectId: "netflixclone-16623",
  storageBucket: "netflixclone-16623.firebasestorage.app",
  messagingSenderId: "853699868501",
  appId: "1:853699868501:web:6a821b73b1b6bac52ba1dc",
  measurementId: "G-NQRSB5G764"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();