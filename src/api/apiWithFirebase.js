import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";
import "firebase/functions";

const firebaseConfig = {
  /* firebase config */
  apiKey: "AIzaSyAVM1FGRcRh0uCXUYGtXgUklyocsT7BTpQ",
  authDomain: "managing-apis-fbe7b.firebaseapp.com",
  projectId: "managing-apis-fbe7b",
  storageBucket: "managing-apis-fbe7b.appspot.com",
  messagingSenderId: "1081838852039",
  appId: "1:1081838852039:web:232e4ed4e84ff9662aebe2",
};

firebase.initializeApp(firebaseConfig);

export default {
  firebase,
  firestore: firebase.firestore(),
  auth: firebase.auth(),
  storage: firebase.storage(),
  functions: firebase.functions(),
};
