// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIz-AXGR_Jt-XCWXRVPiebXKs56bXmr_M",
  authDomain: "scholarbot-a93cd.firebaseapp.com",
  projectId: "scholarbot-a93cd",
  storageBucket: "scholarbot-a93cd.appspot.com",
  messagingSenderId: "685898841700",
  appId: "1:685898841700:web:0d680c570f85af6db5a971"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);