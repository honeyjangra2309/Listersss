// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDTxo7CT3hhvcmQzT5kFL_Yaz3JJL_i6A",
  authDomain: "listersss-f7c1f.firebaseapp.com",
  projectId: "listersss-f7c1f",
  storageBucket: "listersss-f7c1f.appspot.com",
  messagingSenderId: "233231151247",
  appId: "1:233231151247:web:c97b5f4ade8410a34600fa",
  measurementId: "G-YV3YB5J2B4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)
export {db}