import React, { useContext, useEffect } from "react";
import { auth, app } from "../firebase/config";
import "firebase/compat/auth";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const db = getFirestore(app);

  async function signup(email, password, username) {
    const authentication = getAuth();
    const response = await createUserWithEmailAndPassword(
      authentication,
      email,
      password
    );
    if (response.user.uid) {
      addDoc(collection(db, "users"), {
        uid: response.user.uid,
        email: email,
        username: username,
      });
    }
  }

  async function login(email, password) {
    const authentication = getAuth();
    await signInWithEmailAndPassword(authentication, email, password);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      console.log(user);
    });
    return unsubscribe;
  }, []);

  const value = {
    signup,
    login,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
