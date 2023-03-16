import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBv-xhToGUeM2D6aQgydd5sqe-zUfjmI3A",
  authDomain: "ebooks-e4835.firebaseapp.com",
  databaseURL:
    "https://ebooks-e4835-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "ebooks-e4835",
  storageBucket: "ebooks-e4835.appspot.com",
  messagingSenderId: "909873441240",
  appId: "1:909873441240:web:06bd51b1fd36bb7ec1eaad",
};
export const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
export const storage = getStorage(app);
export const db = getFirestore(app);


