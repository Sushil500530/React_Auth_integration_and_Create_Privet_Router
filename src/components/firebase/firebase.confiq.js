// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOQAqw4l4iAJ5rlF7lOLudYzy27wMG_qM",
  authDomain: "auth-moha-somaroho.firebaseapp.com",
  projectId: "auth-moha-somaroho",
  storageBucket: "auth-moha-somaroho.appspot.com",
  messagingSenderId: "167524315624",
  appId: "1:167524315624:web:ff74eefa0515a051b4f45d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth ;