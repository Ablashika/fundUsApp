import * as firebase from 'firebase';
import "firebase/auth";
import "firebase/firestore"

var firebaseConfig = {
    apiKey: "AIzaSyCc1zv6sxotPjvWn8LjmXXSRchTeavm-nY",
    authDomain: "fundusproject-a3b64.firebaseapp.com",
    projectId: "fundusproject-a3b64",
    storageBucket: "fundusproject-a3b64.appspot.com",
    messagingSenderId: "987277757373",
    appId: "1:987277757373:web:a8348382bf12a24565e0d4"
  };
  
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }else {
    firebase.app(); // if already initialized, use that one
 }




 export default firebase;