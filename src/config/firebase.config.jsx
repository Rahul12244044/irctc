// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { getAuth,GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_API_KEY,
  authDomain:import.meta.env.VITE_AUTH_DOMAIN,
  projectId:import.meta.env.VITE_PROJECT_ID,
  storageBucket:import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId:import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId:import.meta.env.VITE_APP_ID
};

// Initialize Firebase
console.log("firebase is connected");
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
export const auth=getAuth();
export const googleProvider = new GoogleAuthProvider();

