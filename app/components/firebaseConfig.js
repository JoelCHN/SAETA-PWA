// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getDatabase } from "firebase/database";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClNeOEL4nR7N--V6_N3zq4C3pZtJN3x0s",
  authDomain: "saeta-fa2f8.firebaseapp.com",
  projectId: "saeta-fa2f8",
  storageBucket: "saeta-fa2f8.firebasestorage.app",
  messagingSenderId: "525797854939",
  appId: "1:525797854939:web:6b36eeccb878071ce146fe",
  measurementId: "G-S47KCCQ4TP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const database = getDatabase(app);

export { auth, database };