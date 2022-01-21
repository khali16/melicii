import React from "react";
import { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, fetchUser, addUser } from "../redux/auth-slice";

const AuthContext = React.createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const user = useSelector((state) => state.user.loggedIn);
  const userName = useSelector((state) => state.user.currentUser.username);
  const rejectedLogin = useSelector((state) => state.user.rejected);
  const isUserLoggedIn = localStorage.getItem("user");

  const dispatch = useDispatch();

  const addNewUser = (email, username, password) => {
    dispatch(addUser({ email: email, username: username, password: password }));
    localStorage.setItem("user", username);
  };

  const loginHandler = (email, password) => {
    dispatch(fetchUser({ email: email, password: password }));
    localStorage.setItem("user", userName);
  };

  const logoutHandler = () => {
    dispatch(logout());
    localStorage.removeItem("user");
  };

  const values = {
    addNewUser,
    loginHandler,
    logoutHandler,
    user,
    rejectedLogin,
    isUserLoggedIn,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
