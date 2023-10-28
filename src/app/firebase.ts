import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBKfzcBJz48FsWPHW-gCEJtCGC3FLGnIUM",
    authDomain: "game-stats-ce3f2.firebaseapp.com",
    projectId: "game-stats-ce3f2",
    storageBucket: "game-stats-ce3f2.appspot.com",
    messagingSenderId: "882689628870",
    appId: "1:882689628870:web:64541e53cf9faa1b5b95c7",
    measurementId: "G-JKLEWJCG5K"
  };

  const app = initializeApp(firebaseConfig);
  export default app;
  export const db = getFirestore(app);