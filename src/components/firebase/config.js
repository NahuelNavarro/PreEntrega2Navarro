// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGM1Psdfk9b-zDH0NFnVjv6BP5HSAy2Kc",
  authDomain: "proyecto-e7be3.firebaseapp.com",
  projectId: "proyecto-e7be3",
  storageBucket: "proyecto-e7be3.appspot.com",
  messagingSenderId: "89037592913",
  appId: "1:89037592913:web:57343d17d6af1a5df91b70",
  measurementId: "G-6G7BD57FFC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);