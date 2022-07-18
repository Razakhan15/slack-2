import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBB00IHytKINXLzsyUMGEqJJGsoXkPOgHM",
  authDomain: "slack-2-9299c.firebaseapp.com",
  projectId: "slack-2-9299c",
  storageBucket: "slack-2-9299c.appspot.com",
  messagingSenderId: "1010645325358",
  appId: "1:1010645325358:web:0b0a70547a551eab16f1bf",
  measurementId: "G-0XE07KBPT0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
