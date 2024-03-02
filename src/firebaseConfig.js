// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtyBkBS8dcmjGc8B3lS9TOpWIQzKtQrhg",
  authDomain: "tilin-80cf0.firebaseapp.com",
  projectId: "tilin-80cf0",
  storageBucket: "tilin-80cf0.appspot.com",
  messagingSenderId: "10346186856",
  appId: "1:10346186856:web:233c69cbb78517c620d3dd"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)