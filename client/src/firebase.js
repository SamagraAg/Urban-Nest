// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "urban-nest-a391d.firebaseapp.com",
  projectId: "urban-nest-a391d",
  storageBucket: "urban-nest-a391d.appspot.com",
  messagingSenderId: "1075625390013",
  appId: "1:1075625390013:web:bb03fed1d430d43138ecd4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);