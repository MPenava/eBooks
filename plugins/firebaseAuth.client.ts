import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  const firebaseConfig = {
    apiKey: config.FIREBASE_API_KEY,
    databaseURL: "https://ebooks-e4835-default-rtdb.europe-west1.firebasedatabase.app",
  };
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);
  console.log(app);
  console.log(database);
});
