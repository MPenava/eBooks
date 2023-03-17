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

import { ref,  getDownloadURL } from "firebase/storage";

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

export const addBookToDb = async (
  title: String,
  author: String,
  description: String,
  image: any,
  pdf: any
) => {
  await uploadFile("images", image)
    .then((result) => {
      return result;
    })
    .catch(console.error.bind(console));

  var imagePath = await getDownloadURL(ref(storage, "images/" + image[0].name));

  await uploadFile("files", pdf)
    .then((result) => {
      return result;
    })
    .catch(console.error.bind(console));

  var pdfPath = await getDownloadURL(ref(storage, "files/" + pdf[0].name));

  const docRef = await addDoc(collection(db, "books"), {
    title: title,
    author: author,
    description: description,
    image: imagePath,
    pdf: pdfPath
  });
  console.log("Document written to firestore: ", );
};
