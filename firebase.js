// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
import { getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZOMiauL7AfEYIBhDN64QOFMmsmiEb3IA",
  authDomain: "munin-7a28b.firebaseapp.com",
  projectId: "munin-7a28b",
  storageBucket: "munin-7a28b.appspot.com",
  messagingSenderId: "787393809965",
  appId: "1:787393809965:web:eaa8491c72294feaec32a4"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage}