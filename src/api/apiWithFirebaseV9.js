import { initializeApp } from 'firebase/app'
import {
  getFirestore,
  collection as _collection,
  doc as _doc,
  getDocs as _getDocs,
  getDoc as _getDoc,
  addDoc as _addDoc,
  setDoc,
  query,
} from 'firebase/firestore'

const firebaseConfig = {
  /* firebase config */
}

const app = initializeApp(firebaseConfig)
const firestore = getFirestore(app)

export const collection = (path) => _collection(firestore, path)
export const doc = (path, ...args) => _doc(collection(path), ...args)
export const getDocs = (path, ...args) =>
  _getDocs(query(collection(path), ...args))
export const getDoc = (path, ...args) => _getDoc(doc(path, ...args))
export const addDoc = (path, ...args) => _addDoc(collection(path), ...args)

/* eslint-disable */
export default {
  firestore,
  collection,
  getDocs,
  getDoc,
  addDoc,
  setDoc,
  doc,
}
