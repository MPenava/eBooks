import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  deleteDoc,
  doc,
  query,
  where,
  setDoc,
  collectionGroup,
  Timestamp,
} from "firebase/firestore";

export const getBooks = async () => {
  const colRef = collection(db, "books");
  const snapshot = await getDocs(colRef);

  const docs = Array.from(snapshot.docs).map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  });
  return docs;
};

export const addBookToDb = async (document: Object) => {
    const colRef = collection(db, "books");
  
    const docRef = await addDoc(colRef, document);
  
    return docRef;
};
