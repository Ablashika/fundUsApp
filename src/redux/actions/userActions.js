import { firestore } from "firebase";
import firebase from "../../firebase/firebase";
const db = firebase.firestore();

export function addUser(name, location, title, story, goal) {
  const data = {
    name: name,
    location: location,
    title: title,
    story: story,
    goal: goal,
  };
  return async (dispatch) => {
    try {
      const user = await firebase.auth();
      firebase.firestore().collection("businesses").add(data);
      dispatch(addUsers(user));
    } catch (error) {
      console.log(error);
    }
    console.log({ db });
  };
}

function addBusiness(business) {
  return {
    type: "SET_BUSINESSES",
    payload: business,
  };
}

function addPosts(post) {
  return {
    type: "SET_POST",
    payload: post,
  };
}

export async function getBusinesses(dispatch) {
  try {
    const usersRef = db.collection("businesses");
    const snapshot = await usersRef.get();
    let businesses = [];
    snapshot.forEach((doc) => {
      businesses.push(doc.data());
    });
    dispatch(addBusiness(businesses));
  } catch (e) {
    console.log(e);
  }
}

// export async function UpDateBusinnesses(dispatch) {
//   try {
//     const usersRef = db.collection("businesses");
//     const snapshot = await usersRef.get();
//     let businesses = [];
//     snapshot.forEach((doc) => {
//       businesses.push(doc.data());
//     });
//     dispatch(addPosts(businesses));
//   } catch (e) {
//     console.log(e);
//   }
// }

function addUsers(user) {
  return {
    type: "ADD_USER",
    payload: user,
  };
}

// function getUsers(user) {
//   return {
//     type: "GET_USER",
//     payload: user,
//   };
// }

// export const addUser = (userName) => {
//     return db.collection('users')
//         .add({
//             created: firebase.firestore.FieldValue.serverTimestamp(),
//             users: [{ name: userName}]
//         });
// };
