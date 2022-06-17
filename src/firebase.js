// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'; 
import {getFirestore} from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-Ka3RQyWo6PxYJUev804O4hum8_fN-uQ",
  authDomain: "disrave-64d56.firebaseapp.com",
  projectId: "disrave-64d56",
  storageBucket: "disrave-64d56.appspot.com",
  messagingSenderId: "319578760846",
  appId: "1:319578760846:web:88ca351ccd1c58564a4bdf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage(app); 
