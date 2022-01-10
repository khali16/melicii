import { useEffect, useState } from "react";
import { getFirestore, collection, getDocs, query } from "firebase/firestore";
import { app } from "../firebase/config";
import { RecipesData } from "../interfaces/db_interfaces";
import { useDispatch } from "react-redux";
import { fetchRecipes } from "../redux/recipes-slice";

const useRecipes = () => {
  const dispatch = useDispatch();
  const [recipesData, setRecipesData] = useState<RecipesData[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(fetchRecipes());
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setRecipesData(data));
  }, []);

  return { recipesData };
};

export default useRecipes;
