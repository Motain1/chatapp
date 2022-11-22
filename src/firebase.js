import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA03myBfThTiV9c7-kAa7CFhCVMPGVtVy4",
  authDomain: "newchat-e54e1.firebaseapp.com",
  projectId: "newchat-e54e1",
  storageBucket: "newchat-e54e1.appspot.com",
  messagingSenderId: "449071349761",
  appId: "1:449071349761:web:ef1b4158a6b5b9f16f0000"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();