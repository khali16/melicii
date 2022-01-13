import { RecipesData } from "../interfaces/db_interfaces";
import { countAverage } from "./countAverage";

export const sortByRating = (recipes: RecipesData[]) => {
  return recipes
    .map((recipe) => ({ ...recipe, average: countAverage(recipe.rating) }))
    .sort((a, b) => b.average - a.average);
};
