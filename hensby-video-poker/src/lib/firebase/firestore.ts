// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLypDzYu1wFoix0l7OQTPdCg9psH4Le9w",
  authDomain: "hensbys-video-poker.firebaseapp.com",
  projectId: "hensbys-video-poker",
  storageBucket: "hensbys-video-poker.firebasestorage.app",
  messagingSenderId: "369437016786",
  appId: "1:369437016786:web:dd4b8d400c2ea389d3230b",
  measurementId: "G-NLQQK16E34",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
