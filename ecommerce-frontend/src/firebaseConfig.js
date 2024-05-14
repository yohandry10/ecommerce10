import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBsNMss9923x8pk_ICOlNU-Iv2RqJfQAys",
  authDomain: "react-app-63450.firebaseapp.com",
  projectId: "react-app-63450",
  storageBucket: "react-app-63450.appspot.com",
  messagingSenderId: "957600692896",
  appId: "1:957600692896:web:cc18b7f32af55a35c227c5",
  measurementId: "G-TBVT8Z75C9"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
