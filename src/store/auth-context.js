import React, { useContext, useEffect } from "react";
import { auth, app } from "../firebase/config";
import "firebase/compat/auth";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getDownloadURL, getStorage, ref } from "firebase/storage";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const db = getFirestore(app);
  const storage = getStorage(app);

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

  async function updateProfileUser(username) {
    const auth = getAuth();
    updateProfile(auth.currentUser, {
      displayName: username,
    })
      .then(() => {
        console.log("Profile Updated!");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async function addRecipe(recipe, image) {
    const storageRef = ref(storage, `${image.name}`).put(image);
    addDoc(collection(db, "recipes"), {
      ...recipe,
      author: getAuth().currentUser.displayName,
    }).then((error) => console.log("Error:", error));
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
    addRecipe,
    updateProfileUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
