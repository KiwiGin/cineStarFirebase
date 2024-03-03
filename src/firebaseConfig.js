// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAILwhZX-yir_by4c_vtcGJvV08nZ5ULAU",
  authDomain: "cinestar1-30af0.firebaseapp.com",
  projectId: "cinestar1-30af0",
  storageBucket: "cinestar1-30af0.appspot.com",
  messagingSenderId: "179943967792",
  appId: "1:179943967792:web:c8890411e339bf033cf1f5"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)