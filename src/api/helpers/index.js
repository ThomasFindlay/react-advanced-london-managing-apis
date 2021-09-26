export const extractDocs = async promise => {
  const result = await promise;
  if (result.empty) return [];
  return result.docs.map(snap => snap.data());
};

export const extractDoc = async promise => {
  const result = await promise;
  if (result.empty) return null;
  return result.data();
};
