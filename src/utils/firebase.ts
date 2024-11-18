// src/utils/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyB2l54Ulw1fIeAhx9dGqCW2OsIL2zB864E",
    authDomain: "vue-firebase-8ee9a.firebaseapp.com",
    projectId: "vue-firebase-8ee9a",
    storageBucket: "vue-firebase-8ee9a.firebasestorage.app",
    messagingSenderId: "267269356589",
    appId: "1:267269356589:web:d6a5b95d1bd3d58aee8ca4",
};

const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };