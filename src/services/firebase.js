// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGZm6LRry3MBfY8Y43h2n0ecl_3zqs92k",
  authDomain: "star-wars-store-d3831.firebaseapp.com",
  projectId: "star-wars-store-d3831",
  storageBucket: "star-wars-store-d3831.appspot.com",
  messagingSenderId: "986974460819",
  appId: "1:986974460819:web:36fa0ef403a5647c882666",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
