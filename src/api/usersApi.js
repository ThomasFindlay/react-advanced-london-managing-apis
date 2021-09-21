import api from "./apiWithFirebase";

const extractDocs = async promise => {
  const result = await promise;
  if (result.empty) return [];
  return result.docs.map(snap => snap.data());
};

export const listUsers = () => {
  return extractDocs(api.firestore.collection("users").get());
};

export const addUser = user => {
  const doc = api.firestore.collection("users").doc();
  return doc.add({
    id: doc.id,
    ...user,
  });
};
