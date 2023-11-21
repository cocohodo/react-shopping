import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDTo8qqXuk2_vvQTXQ8ImDkawPh1MV-PA8",
  authDomain: "shoppingmall-17a7b.firebaseapp.com",
  projectId: "shoppingmall-17a7b",
  storageBucket: "shoppingmall-17a7b.appspot.com",
  messagingSenderId: "95560656289",
  appId: "1:95560656289:web:85cfe5f9c98aae0ffc97e0",
  measurementId: "G-YN66EC2K2C"
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth();
export { firebaseApp, firebaseAuth };