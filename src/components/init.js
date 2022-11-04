// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOm2FwPQQ-rxdRcLpK8J1wnXIuvO-YbYw",
  authDomain: "venturo-18b5f.firebaseapp.com",
  projectId: "venturo-18b5f",
  storageBucket: "venturo-18b5f.appspot.com",
  messagingSenderId: "31023958703",
  appId: "1:31023958703:web:1e88dba2f4f344ce24a25a",
  measurementId: "G-H8M5MKCBCY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
