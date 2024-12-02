// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBH4xTk_4WllllxSEz_jcbLWPolKIS76x0",
    authDomain: "investmentdecisionjournal.firebaseapp.com",
    projectId: "investmentdecisionjournal",
    storageBucket: "investmentdecisionjournal.firebasestorage.app",
    messagingSenderId: "433886534381",
    appId: "1:433886534381:web:09ae73f1f469a34b7fcae4",
    measurementId: "G-945KNXGDGP"
    };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
