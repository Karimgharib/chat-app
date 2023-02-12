import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBEIkGSoWvi6iB0yPfbYntQ02suUHBjKEQ",
  authDomain: "chat-fa5f0.firebaseapp.com",
  projectId: "chat-fa5f0",
  storageBucket: "chat-fa5f0.appspot.com",
  messagingSenderId: "391742558449",
  appId: "1:391742558449:web:deda8c338d3570910d5950",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
