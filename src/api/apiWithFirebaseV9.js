import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection as _collection,
  doc as _doc,
  getDocs as _getDocs,
  getDoc as _getDoc,
  addDoc as _addDoc,
  setDoc,
  query,
} from "firebase/firestore";

const firebaseConfig = {
  /* firebase config */
  apiKey: "AIzaSyAVM1FGRcRh0uCXUYGtXgUklyocsT7BTpQ",
  authDomain: "managing-apis-fbe7b.firebaseapp.com",
  projectId: "managing-apis-fbe7b",
  storageBucket: "managing-apis-fbe7b.appspot.com",
  messagingSenderId: "1081838852039",
  appId: "1:1081838852039:web:232e4ed4e84ff9662aebe2",
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export const collection = path => _collection(firestore, path);
export const doc = (path, ...args) => _doc(collection(path), ...args);
export const getDocs = (path, ...args) =>
  _getDocs(query(collection(path), ...args));
export const getDoc = (path, ...args) => _getDoc(doc(path, ...args));
export const addDoc = (path, ...args) => _addDoc(collection(path), ...args);

/* eslint-disable */
export default {
  firestore,
  collection,
  getDocs,
  getDoc,
  addDoc,
  setDoc,
  doc,
};
