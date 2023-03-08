import { getDatabase, ref, set, onValue} from "firebase/database";

export const writeUserData = async (fullname, email) =>{
    const db = getDatabase();
    var userId = Date.now();
    set(ref(db, 'users/' + userId), {
      fullname: fullname,
      email: email,
    });
  }
  
  