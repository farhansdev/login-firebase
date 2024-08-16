import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyCYXsTjwF3XsptFzhUybXO1y69fxPc2J4M",
  authDomain: "blog-fbe70.firebaseapp.com",
  projectId: "blog-fbe70",
  storageBucket: "blog-fbe70.appspot.com",
  messagingSenderId: "1026796841711",
  appId: "1:1026796841711:web:ac3a1ad36ed879fa08891a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);
