import firebase from 'firebase/app'
import 'firebase/firestore'

let firebaseConfig = {
    apiKey: "AIzaSyASP17fPJWmC__QxEyUXJczWW7rkuwND-0",
    authDomain: "restaurants-8c259.firebaseapp.com",
    projectId: "restaurants-8c259",
    storageBucket: "restaurants-8c259.appspot.com",
    messagingSenderId: "249105774948",
    appId: "1:249105774948:web:ea6f7d9a1398ee3d846271"
  };
  // Initialize Firebase
export const firebaseApp = firebase.initializeApp(firebaseConfig);

