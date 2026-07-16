// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASeLvVibZfH1JoEbuIO5f8NKDaBVKNtAI",
  authDomain: "techneespacioportal.firebaseapp.com",
  projectId: "techneespacioportal",
  storageBucket: "techneespacioportal.firebasestorage.app",
  messagingSenderId: "71912857855",
  appId: "1:71912857855:web:7f0d3e07119d6abefe2cca",
  measurementId: "G-MY7LTQQZ57"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Inicializar servicios
export const db = getFirestore(app);
export const auth = getAuth(app);
