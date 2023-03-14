import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";


import { getDatabase, ref, set, onValue} from "firebase/database";

export const createUser = async (email: string, password: string, fullname: string) => {
  const auth = getAuth();
  const db = getDatabase();

  const credentials = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  ).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

  set(ref(db, 'users/' + auth.currentUser?.uid), {
    fullname: fullname,
    email: email,
  });


  return credentials;
};

export const signInUser = async (email:string, password:string) => {
  const auth = getAuth();

  const credentials = await signInWithEmailAndPassword(auth, email, password)
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
    return credentials;
};

export const initUser = async () => {
  const auth = getAuth();
  const firebaseUser = useFirebaseUser();
  firebaseUser.value = auth.currentUser;
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("Auth changed: ", user.uid);
    } else {
      console.log("Auth changed: ", user);
    }

    firebaseUser.value = user;
  });
};

export const signOutUser = async () => {
  const auth = getAuth(); 
  const result = await auth.signOut();
  console.log("Sign out: ", result);
}
