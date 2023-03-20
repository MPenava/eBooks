import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

//Radi
export const uploadFile = async (path: any, file: any) => {
  const fullPath = path + "/" + file[0].name;
  const storageRef = ref(storage, fullPath);

  await uploadBytes(storageRef, file[0]).then((snapshot) => {
    console.log("Uploaded a blob or file!");
  });
};

// Radi
export const getPathOfFile = async (path: any, file: any) => {
  const fullPath = path + "/" + file[0].name;
  const storageRef = ref(storage, fullPath);

  const url = await getDownloadURL(storageRef).catch((error) => {
    console.log(error);
  });
  return url;
};

export const download = async (path:any) => {
  const httpsReference = ref(storage, path);

  getDownloadURL(httpsReference)
  .then((url) => {
    // `url` is the download URL for 'images/stars.jpg'

    // This can be downloaded directly:
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = (event) => {
      const blob = xhr.response;
    };
    xhr.open('GET', url);
    xhr.send();

  })
  .catch((error) => {
    console.log(error);
  });
}
