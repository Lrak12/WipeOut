// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUFUroHylxyAcLwPwsrBF7QPBqeEB0Qeg",
  authDomain: "wipeout-851f1.firebaseapp.com",
  projectId: "wipeout-851f1",
  storageBucket: "wipeout-851f1.firebasestorage.app",
  messagingSenderId: "316411311047",
  appId: "1:316411311047:web:a3a493e07a3f0a83f15fe2",
  measurementId: "G-GL0FG7JRTN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);