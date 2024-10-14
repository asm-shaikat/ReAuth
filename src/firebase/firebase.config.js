// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHsghksvIbIqFPr6T7OGT-mVwEpWaDQf4",
  authDomain: "auth-app-dc6d1.firebaseapp.com",
  projectId: "auth-app-dc6d1",
  storageBucket: "auth-app-dc6d1.appspot.com",
  messagingSenderId: "946743516574",
  appId: "1:946743516574:web:83831c025319324ba30a8f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;