// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app"

import {getAuth} from "firebase/auth"
import "firebase/compat/firestore"
import "firebase/compat/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCt4YbWD7-ueuVpuO6BHZkJkcqZWDhQjxM",
  authDomain: "clone-3b529.firebaseapp.com",
  projectId: "clone-3b529",
  storageBucket: "clone-3b529.firebasestorage.app",
  messagingSenderId: "293300370915",
  appId: "1:293300370915:web:aa96e1f11432bf2513b4d6"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();


