import * as firebase from 'firebase';
import "firebase/auth";

var firebaseConfig = {
    apiKey: "AIzaSyB0CpZWrV1PSTZXQ0AjiuQ5XHMGM-Vso_g",
    authDomain: "fundusproject.firebaseapp.com",
    projectId: "fundusproject",
    storageBucket: "fundusproject.appspot.com",
    messagingSenderId: "736790882290",
    appId: "1:736790882290:web:8dda5d771c5b894373ed6b"
};
  

firebase.initializeApp(firebaseConfig)



export default firebase;