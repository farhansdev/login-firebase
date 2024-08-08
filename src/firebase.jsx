import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyC0YXcfj2NnZn6vABsL40NV9CJzCNMz12I",
    authDomain: "smit-signup.firebaseapp.com",
    projectId: "smit-signup",
    storageBucket: "smit-signup.appspot.com",
    messagingSenderId: "738422301579",
    appId: "1:738422301579:web:4bc91ef89da7ab528cc58e",
    measurementId: "G-XSN4V19ZNS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);
