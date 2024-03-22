import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyDbBBECf6q7CPieO6BB0okRjrgxtdFntjc",
    authDomain: "complaint-forum-655ef.firebaseapp.com",
    projectId: "complaint-forum-655ef",
    storageBucket: "complaint-forum-655ef.appspot.com",
    messagingSenderId: "657344757723",
    appId: "1:657344757723:web:61d9e3319847bc135e31fe"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
