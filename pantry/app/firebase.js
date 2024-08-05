// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore" 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBd77yxrCxVsUs7yOB_KN_O_F86Nm74NWc",
  authDomain: "pantry-cd82b.firebaseapp.com",
  projectId: "pantry-cd82b",
  storageBucket: "pantry-cd82b.appspot.com",
  messagingSenderId: "1095670549780",
  appId: "1:1095670549780:web:92bec5ba8c726ca8100601",
  measurementId: "G-SJ2W3ZPNJF"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];

/**
 * Initialize Firestore
 * This creates a connection to your Firestore database
 */
const db = getFirestore(app);

export { db };