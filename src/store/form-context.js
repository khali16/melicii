import React from "react";
import { useContext, useState } from "react";

const FormContext = React.createContext();

export const useForm = () => {
  return useContext(FormContext);
};

export const FormProvider = ({ children }) => {
  const [firstForm, setFirstForm] = useState([]);
  const [secondForm, setSecondForm] = useState([]);
  const [thirdForm, setThirdForm] = useState([]);

  const value = { setFirstForm, firstForm, setSecondForm, setThirdForm };
  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};
