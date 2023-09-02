// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiU-6wpl1lbUZ5rjhs39TU670lG61uOcM",
  authDomain: "leitner-vocabulary.firebaseapp.com",
  projectId: "leitner-vocabulary",
  storageBucket: "leitner-vocabulary.appspot.com",
  messagingSenderId: "121966338016",
  appId: "1:121966338016:web:c7da51e5d6534637755585"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
