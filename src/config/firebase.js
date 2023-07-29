
import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBBGfsYm5UZg_l_M9Q9IGwYSmAdiwSsbD8",
  authDomain: "user-crud-app-bd63f.firebaseapp.com",
  projectId: "user-crud-app-bd63f",
  storageBucket: "user-crud-app-bd63f.appspot.com",
  messagingSenderId: "1077527490329",
  appId: "1:1077527490329:web:5da835740d25fb3eb71f88"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)