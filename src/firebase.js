import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBbatAeUYRWIykdLWb4neSQngMhImYkHyk",
  authDomain: "newchat2022-ddd11.firebaseapp.com",
  projectId: "newchat2022-ddd11",
  storageBucket: "newchat2022-ddd11.appspot.com",
  messagingSenderId: "578040873995",
  appId: "1:578040873995:web:f41ccdf1aea8f774d8330e",
  measurementId: "G-P88DBDPLRP"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();

