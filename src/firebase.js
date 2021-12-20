import firebase from "firebase";

//? authentication
import "firebase/auth";
//? database
import "firebase/database";
//? storage
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDSbX3tVFV1miMw1Be-hi8EYJUA6VWSDR0",
  authDomain: "spotify-clone-4de33.firebaseapp.com",
  projectId: "spotify-clone-4de33",
  storageBucket: "spotify-clone-4de33.appspot.com",
  messagingSenderId: "630112756086",
  appId: "1:630112756086:web:d68021dc0c279012575a57",
};

firebase.initializeApp(firebaseConfig);
export default firebase;
