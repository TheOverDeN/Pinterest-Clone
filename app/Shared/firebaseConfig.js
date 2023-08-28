// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "Insert your key",
  authDomain: "Insert your key",
  projectId: "Insert your key",
  storageBucket: "iInsert your key",
  messagingSenderId: "Insert your key",
  appId: "Insert your key",
  measurementId: "Insert your key"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);

 
export default app;