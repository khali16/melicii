import { useEffect, useState } from "react";
import { RecipesData } from "../interfaces/db_interfaces";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecipes } from "../redux/recipes-slice";
import { RootState } from "../redux/store";

const useRecipes = () => {
  const dispatch = useDispatch();
  const [recipesData, setRecipesData] = useState<RecipesData[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    dispatch(fetchRecipes());
    setLoading(false);
  }, []);

  const recipes = useSelector((state: RootState) => state.recipes.recipes);

  return { recipes, loading };
};

export default useRecipes;
