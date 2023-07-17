// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-analytics.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0lYMOlysw7XxThhld-hICz0PiHDzW4_0",
  authDomain: "personal-f62b0.firebaseapp.com",
  projectId: "personal-f62b0",
  storageBucket: "personal-f62b0.appspot.com",
  messagingSenderId: "71086410596",
  appId: "1:71086410596:web:85f02169367cdd6aac4871",
  measurementId: "G-DPSE3BYF3R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
