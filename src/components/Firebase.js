// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-96b2fqw3xs2jqgNQ3vPBzeok61-D9TQ",
  authDomain: "girls-code-collab.firebaseapp.com",
  projectId: "girls-code-collab",
  storageBucket: "girls-code-collab.appspot.com",
  messagingSenderId: "844846365004",
  appId: "1:844846365004:web:6a2abfe2ca99bdb74cb7e9",
  measurementId: "G-82SPY5321Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };