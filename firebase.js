import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAxJzRsOoGMHLabjkKRolwnPgHjA7rOgEY",
  authDomain: "incident-monitoring-dashboard.firebaseapp.com",
  projectId: "incident-monitoring-dashboard",
  storageBucket: "incident-monitoring-dashboard.firebasestorage.app",
  messagingSenderId: "662461424536",
  appId: "1:662461424536:web:3baebb4ce899b5c0fc41ed"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
