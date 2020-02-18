
 import firebase from 'firebase';
import firestore from 'firebase/firestore';

 var firebaseConfig = {
    apiKey: "AIzaSyCTdldZiwaKB6eA8RWmhcr6KWHjFFDjs_E",
    authDomain: "chat-app-5aa71.firebaseapp.com",
    databaseURL: "https://chat-app-5aa71.firebaseio.com",
    projectId: "chat-app-5aa71",
    storageBucket: "chat-app-5aa71.appspot.com",
    messagingSenderId: "274989013951",
    appId: "1:274989013951:web:ebf4544abb222a186f9f0a",
    measurementId: "G-V9E9FNY4M1"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebaseApp.firestore()
