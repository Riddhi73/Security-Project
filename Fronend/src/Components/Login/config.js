
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAA0gymqtKKkpLlqCgBGiWUipjvcaMvtXs",
  authDomain: "tune-expo-ai.firebaseapp.com",
  projectId: "tune-expo-ai",
  storageBucket: "tune-expo-ai.appspot.com",
  messagingSenderId: "895836183278",
  appId: "1:895836183278:web:d64b0b44f184f068eb31ff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app);
const provider = new GoogleAuthProvider();
export {auth,provider};