import * as firebase from 'firebase';
import "firebase/auth";

var firebaseConfig = {
    apiKey: "AIzaSyCc1zv6sxotPjvWn8LjmXXSRchTeavm-nY",
    authDomain: "fundusproject-a3b64.firebaseapp.com",
    projectId: "fundusproject-a3b64",
    storageBucket: "fundusproject-a3b64.appspot.com",
    messagingSenderId: "987277757373",
    appId: "1:987277757373:web:a8348382bf12a24565e0d4"
  };
  
  if (!firebase.apps.length) {
    firebase.initializeApp({});
 }else {
    firebase.app(); // if already initialized, use that one
 }

// firebase.initializeApp(firebaseConfig)



export default firebase;