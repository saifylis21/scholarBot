// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdwe9uNkx9gHWjYbo0nrwlRbRg1t_HMig",
  authDomain: "scholarbotai.firebaseapp.com",
  projectId: "scholarbotai",
  storageBucket: "scholarbotai.appspot.com",
  messagingSenderId: "639752380513",
  appId: "1:639752380513:web:614239e0820f6c21e18a20",
  measurementId: "G-X3TJ68E0ZW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore
export const db = getFirestore(app)

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);