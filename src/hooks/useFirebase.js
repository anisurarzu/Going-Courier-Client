import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";

import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState();
  const [error, setError] = useState("");

  const auth = getAuth();

  const googleProvider = new GoogleAuthProvider();
  // Google Login Method

  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  //    logout
  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  // observing user  auth state change or not
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
    });
  }, []);

  return {
    user,
    error,
    googleLogin,
    logOut,
  };
};

export default useFirebase;
