import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  const firebaseConfig = {
    apiKey: config.FIREBASE_API_KEY,
    authDomain: "ebooks-e4835.firebaseapp.com",
    databaseURL:
      "https://ebooks-e4835-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "ebooks-e4835",
    storageBucket: "ebooks-e4835.appspot.com",
    messagingSenderId: "909873441240",
    appId: "1:909873441240:web:06bd51b1fd36bb7ec1eaad",
  };
  const app = initializeApp(firebaseConfig);

  initUser();

  const auth = getAuth();
  nuxtApp.vueApp.provide("auth", auth);
  nuxtApp.provide("auth", auth);
});
