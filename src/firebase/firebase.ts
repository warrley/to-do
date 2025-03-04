import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyA_cIBVNDz8VhZ9uK3nsYNZigrbsqhikfk",
  authDomain: "to-do-fe52a.firebaseapp.com",
  projectId: "to-do-fe52a",
  storageBucket: "to-do-fe52a.firebasestorage.app",
  messagingSenderId: "68809512370",
  appId: "1:68809512370:web:342d73beda7d67d6e800ab"
};

const app = initializeApp(firebaseConfig);

export default app;