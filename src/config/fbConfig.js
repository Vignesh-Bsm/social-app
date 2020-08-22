import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyDwwBkk5NrHLYP5DxqgEkg47BMfnMIYTcc",
    authDomain: "socail-app-a1a54.firebaseapp.com",
    databaseURL: "https://socail-app-a1a54.firebaseio.com",
    projectId: "socail-app-a1a54",
    storageBucket: "socail-app-a1a54.appspot.com",
    messagingSenderId: "98694890327",
    appId: "1:98694890327:web:4bd79e2eb42f8ce046f412",
    measurementId: "G-HFDKTJZR19"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
  firebase.firestore().settings({timestampsInSnapshots: true})

  export default firebase;