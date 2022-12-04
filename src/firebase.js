// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getStorage}  from 'firebase/storage'
import {getFirestore}  from 'firebase/firestore'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDDHNuIkiJLSXvx3RdfTCXFMJwHh_iouA",
  authDomain: "test-cctv-43b1d.firebaseapp.com",
  projectId: "test-cctv-43b1d",
  storageBucket: "test-cctv-43b1d.appspot.com",
  messagingSenderId: "1074903701647",
  appId: "1:1074903701647:web:e3373305c30b8bec2378fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db= getFirestore(app)


export  const storage =getStorage(app)