import firebase from "firebase";

//? authentication
import "firebase/auth";
//? database
import "firebase/database";
//? storage
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD3fnh5uqkjUF-cODlGhPvETtoPlbUjnKc",
  authDomain: "spotify-clone-98243.firebaseapp.com",
  projectId: "spotify-clone-98243",
  storageBucket: "spotify-clone-98243.appspot.com",
  messagingSenderId: "520325463837",
  appId: "1:520325463837:web:ef900b6305ede89a78abf4",
};

firebase.initializeApp(firebaseConfig);
export default firebase;
