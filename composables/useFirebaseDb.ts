import { getDatabase, ref, set, onValue} from "firebase/database";

export const writeUserData = async (name, email) =>{
    const db = getDatabase();
    var userId = Date.now();
    set(ref(db, 'users/' + userId), {
      username: name,
      email: email,
    });
  }
  
  