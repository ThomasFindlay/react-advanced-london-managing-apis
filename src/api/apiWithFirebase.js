import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/storage'
import 'firebase/firestore'
import 'firebase/functions'

const firebaseConfig = {
  /* firebase config */
}

firebase.initializeApp(firebaseConfig)

export default {
  firebase,
  firestore: firebase.firestore(),
  auth: firebase.auth(),
  storage: firebase.storage(),
  functions: firebase.functions(),
}
