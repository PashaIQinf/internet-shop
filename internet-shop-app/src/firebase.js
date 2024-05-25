// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from '@firebase/firestore'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY_CONST,
  authDomain: import.meta.env.VITE_AUTHDOMAIN_CONST,
  projectId: import.meta.env.VITE_PROJECTID_CONST,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET_CONST,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID_CONST,
  appId: import.meta.env.VITE_APPID_CONST,
  measurementId: import.meta.env.VITE_MEASUREMENTID_CONST
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firestore = getFirestore(app);