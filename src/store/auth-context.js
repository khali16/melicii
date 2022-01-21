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
  const rejectedLogin = useSelector((state) => state.user.rejected);

  const dispatch = useDispatch();

  const addNewUser = (email, username, password) => {
    dispatch(addUser({ email: email, username: username, password: password }));
  };

  const loginHandler = (email, password) => {
    dispatch(fetchUser({ email: email, password: password }));
  };

  const logoutHandler = () => {
    dispatch(logout());
  };

  const values = {
    addNewUser,
    loginHandler,
    logoutHandler,
    user,
    rejectedLogin,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
