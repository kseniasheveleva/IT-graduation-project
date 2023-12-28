import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: import.meta.env.FIREBASE_API_KEY,
    authDomain: "robo-school-b9fe1.firebaseapp.com",
    projectId: "robo-school-b9fe1",
    storageBucket: "robo-school-b9fe1.appspot.com",
    messagingSenderId: "1029957789631",
    appId: "1:1029957789631:web:5b83d684f1ee1c6ff2a30a"
};

const app = initializeApp(firebaseConfig);