import { firebase, FieldValue } from "../lib/firebase";

export async function doesUsernameExist(username) {
  const result = await firebase
    .firestore()
    .collection("users")
    .where("username", "==", username)
    .get();
    
  //or we can return result.docs.length, it will either return 1 or 0, 0 is a falsy value

  return result.docs.map((user) => user.data().length > 0);
}
