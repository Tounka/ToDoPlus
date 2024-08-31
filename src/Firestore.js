
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDNDyLOdCdBifJGgkTGVN6Nk845tZ7r0aM",
  authDomain: "todoplus-2559c.firebaseapp.com",
  projectId: "todoplus-2559c",
  storageBucket: "todoplus-2559c.appspot.com",
  messagingSenderId: "286312641602",
  appId: "1:286312641602:web:09fd229f43395a7f27e9db"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);