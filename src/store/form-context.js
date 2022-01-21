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

  const [recipesData, setRecipesData] = useState([]);

  const values = [3, 4, 4];
  const calculateAverageHandler = (values) => {
    return values.reduce((a, b) => (a + b) / values.length);
  };
  const averageValue = calculateAverageHandler(values);

  const value = {
    setFirstForm,
    firstForm,
    setSecondForm,
    setThirdForm,
    secondForm,
    thirdForm,
    recipesData,
    setRecipesData,
  };
  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};
