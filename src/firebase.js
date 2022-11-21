import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAX54eSHZPUzYZFXbnTsH57ikLZ5ZOycaE",
  authDomain: "chatapp-c567c.firebaseapp.com",
  projectId: "chatapp-c567c",
  storageBucket: "chatapp-c567c.appspot.com",
  messagingSenderId: "275756392298",
  appId: "1:275756392298:web:4bbd5c7185950b187e4f13"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()