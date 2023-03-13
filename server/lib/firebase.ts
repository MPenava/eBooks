// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBv-xhToGUeM2D6aQgydd5sqe-zUfjmI3A",
  authDomain: "ebooks-e4835.firebaseapp.com",
  databaseURL: "https://ebooks-e4835-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "ebooks-e4835",
  storageBucket: "ebooks-e4835.appspot.com",
  messagingSenderId: "909873441240",
  appId: "1:909873441240:web:06bd51b1fd36bb7ec1eaad"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const firestoreDb = getFirestore(firebaseApp);