import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from "firebase/storage"
import {getFirestore} from "firebase/firestore"
import { getAuth } from "firebase/auth";

const firebaseConfig = {
   apiKey: "AIzaSyCYBt__z3juh0b85SmtKvNVslHQS58NI4M",
   authDomain: "react-ecommerce-app-4fb87.firebaseapp.com",
   projectId: "react-ecommerce-app-4fb87",
   storageBucket: "react-ecommerce-app-4fb87.appspot.com",
   messagingSenderId: "476951384811",
   appId: "1:476951384811:web:0b613c35622e6f8d6a24ae",
   measurementId: "G-DCPVP73D6E"
 };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);
const db = getFirestore(app);
const auth = getAuth(app);

export {storage, db, auth}
