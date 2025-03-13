// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "ai-generated-course-8e632.firebaseapp.com",
  projectId: "ai-generated-course-8e632",
  storageBucket: "ai-generated-course-8e632.firebasestorage.app",
  messagingSenderId: "242447446549",
  appId: "1:242447446549:web:e2c5b493687a1435f1141c",
  measurementId: "G-YVB3E486J0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage=getStorage(app)