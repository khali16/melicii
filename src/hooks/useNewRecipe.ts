import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useForm } from "../store/form-context";
import { addRecipe } from "../redux/recipes-slice";

const useNewRecipe = (pictureUrl: string) => {
  const userName = localStorage.getItem("user");
  useEffect(() => {}, [userName]);
  const { firstForm, secondForm, thirdForm } = useForm();
  const dispatch = useDispatch();

  const recipeData = {
    author: userName,
    rating: [0],
    pictureUrl,
    ...firstForm,
    ...secondForm,
    ...thirdForm,
  };

  const addNewRecipe = () => {
    dispatch(addRecipe(recipeData));
  };

  return { addNewRecipe };
};

export default useNewRecipe;
