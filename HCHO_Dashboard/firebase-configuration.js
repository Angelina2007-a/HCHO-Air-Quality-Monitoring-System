// Firebase App
import { initializeApp } 
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";


// Firebase Realtime Database
import { getDatabase } 
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";


// Firebase Authentication
import { getAuth } 
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";



// Firebase Project Configuration

const firebaseConfig = {

    apiKey: "AIzaSyBxgGhKpzXGv_m-wePxtaaib1HKbMAx3To",

    authDomain: "hcho-monitor.firebaseapp.com",

    databaseURL: 
    "https://hcho-monitor-default-rtdb.asia-southeast1.firebasedatabase.app",

    projectId: "hcho-monitor",

    storageBucket: 
    "hcho-monitor.appspot.com",

    messagingSenderId: 
    "366620913999",

    appId: 
    "1:366620913999:web:050536ec47e387538c153a"

};



// Initialize Firebase

const app = initializeApp(firebaseConfig);



// Initialize Realtime Database

export const db = getDatabase(app);



// Initialize Authentication

export const auth = getAuth(app);