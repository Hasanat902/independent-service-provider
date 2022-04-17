// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBajlu27auIh-y-rdmpeQ5LzjF_z3uheIg",
  authDomain: "independent-service-prov-5cd6e.firebaseapp.com",
  projectId: "independent-service-prov-5cd6e",
  storageBucket: "independent-service-prov-5cd6e.appspot.com",
  messagingSenderId: "504752914016",
  appId: "1:504752914016:web:bede05f642631fb2048d05"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;