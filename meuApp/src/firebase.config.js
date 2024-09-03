// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDo61iujoR1bpzJNUM4V0-NZTStBUYQBEE",
  authDomain: "vtproject3.firebaseapp.com",
  projectId: "vtproject3",
  storageBucket: "vtproject3.appspot.com",
  messagingSenderId: "623754573975",
  appId: "1:623754573975:web:c519f6285c7345392791d2",
  measurementId: "G-WM2S7HZMSZ"
};

// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);
export const auth = getAuth(firebase);
