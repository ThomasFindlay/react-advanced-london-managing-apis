import api from "./apiWithFirebase";

const extractDocs = async promise => {
  const result = await promise;
  if (result.empty) return [];
  return result.docs.map(snap => snap.data());
};

const extractDoc = async promise => {
  const result = await promise;
  if (result.empty) return null;
  return result.data();
};

const usersCollection = api.firestore.collection("users");

export const listUsers = () => {
  return extractDocs(usersCollection.get());
};

export const getUser = id => {
  return extractDoc(usersCollection.doc(id).get());
};

export const addUser = user => {
  const doc = usersCollection.doc();
  return doc.add({
    id: doc.id,
    ...user,
  });
};
