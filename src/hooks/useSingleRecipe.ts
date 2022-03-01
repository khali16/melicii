import { useEffect } from "react";
import { RecipesData } from "../interfaces/db_interfaces";
import useRecipes from "./useRecipes";

const useSingleRecipe = (recipeTitle: string) => {
  const { recipes } = useRecipes();

  const filterRecipes = (recipes: RecipesData[], recipeTitle: string) => {
    return recipes.filter(({ title }) => title === recipeTitle)[0];
  };

  const findSelectedRecipe = filterRecipes(recipes, recipeTitle);

  useEffect(() => {}, [findSelectedRecipe?.comments]);

  return { findSelectedRecipe };
};
export default useSingleRecipe;
