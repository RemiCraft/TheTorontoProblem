// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMSKBQ66RCjDt-qObF7nsWjLAWt5zC36s",
  authDomain: "the-toronto-problem.firebaseapp.com",
  projectId: "the-toronto-problem",
  storageBucket: "the-toronto-problem.appspot.com",
  messagingSenderId: "970761800377",
  appId: "1:970761800377:web:494030369f17c6f7bfa968"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)