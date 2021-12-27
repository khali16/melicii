import firebase from "firebase/compat/app";
import "firebase/compat/auth";

export const app = firebase.initializeApp({
  apiKey: "AIzaSyD_VOISVCiK5ki6iRMcLAZClhKCPLQvVxI",
  authDomain: "melicii-11277.firebaseapp.com",
  databaseURL: "https://melicii-11277-default-rtdb.firebaseio.com",
  projectId: "melicii-11277",
  storageBucket: "melicii-11277.appspot.com",
  messagingSenderId: "886685643364",
  appId: "1:886685643364:web:2102830d62e3debfaee571",
});

export const auth = app.auth();
export default app;
