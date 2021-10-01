import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCCvqMOb_2Vo8a1M6_mfhnvbDIOMUAMq04",
  authDomain: "blueforce-tech.firebaseapp.com",
  projectId: "blueforce-tech",
  storageBucket: "blueforce-tech.appspot.com",
  messagingSenderId: "210511562063",
  appId: "1:210511562063:web:b347c93cca34d22598f13a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { app, db };
