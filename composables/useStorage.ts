import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

//Radi
export const uploadFile = async (path: any, file: any) => {
  const fullPath = path + "/" + file[0].name;
  const storageRef = ref(storage, fullPath);

  uploadBytes(storageRef, file[0]).then((snapshot) => {
    console.log("Uploaded a blob or file!");
  });
};

//Radi
export const getPathOfFile = async (path: any, file: any)=> {
  const fullPath = path + "/" + file[0].name;
  const storageRef = ref(storage, fullPath);

  const url = await getDownloadURL(storageRef).catch((error) => {
    console.log(error);
  });
  return url;
};
