import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAn1dBYXc6VLRUV-XV0NN0SSaTe8RxYxXc",
  authDomain: "supermall-3273f.firebaseapp.com",
  projectId: "supermall-3273f",
  storageBucket: "supermall-3273f.appspot.com", // ✅ CORRECTED
  messagingSenderId: "994090029864",
  appId: "1:994090029864:web:e1c212e7e5fc6102da761d",
  measurementId: "G-NMCK2ET2WD"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app); // ✅ Main focus
export default app;
