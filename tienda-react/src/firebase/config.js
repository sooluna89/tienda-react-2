// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCNRqPMXzusURMvv6jYXc49r9zistP4r-o",
    authDomain: "moda-shop-547e7.firebaseapp.com",
    projectId: "moda-shop-547e7",
    storageBucket: "moda-shop-547e7.appspot.com",
    messagingSenderId: "687801253077",
    appId: "1:687801253077:web:fce3baf093e0869de6b65c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);