import api from "./apiWithFirebase";
import { extractDocs, extractDoc } from './helpers'

const usersCollection = api.firestore.collection("users");

export const listUsers = () => {
  return extractDocs(usersCollection.get());
};

export const getUser = id => {
  return extractDoc(usersCollection.doc(id).get());
};

export const findUsers = email => {
  return extractDocs(usersCollection.where("email", "==", email).get());
};


export const addUser = user => {
  const doc = usersCollection.doc();
  return doc.add({
    id: doc.id,
    ...user,
  });
};
