import { createContext, useEffect, useState } from "react";
import firebase from "../firebase";
export let AuthContextApi = createContext(null);

let AuthProvider = ({ children }) => {
  let [state, setState] = useState(null);
  //? anonymous user or existing user checking
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user.emailVerified === true) {
        setState(user);
      } else {
        setState(null);
      }
    });
  }, []);
  return (
    <AuthContextApi.Provider value={state}>{children}</AuthContextApi.Provider>
  );
};
export default AuthProvider;
