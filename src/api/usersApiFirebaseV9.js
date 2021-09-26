import api from "./apiWithFirebaseV9";
import { extractDocs, extractDoc } from './helpers'

export const listUsers = () => {
  return extractDocs(api.getDocs("users"));
};

export const getUser = id => {
  return extractDoc(api.getDoc("users", id));
};

export const addUser = user => {
  const doc = api.doc("users");
  return api.setDoc(doc, {
    id: doc.id,
    ...user,
  });
};
