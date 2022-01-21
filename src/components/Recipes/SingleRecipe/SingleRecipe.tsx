import { CircularProgress, ThemeProvider } from "@material-ui/core";
import { theme } from "../../styles/Themes";
import styles from "./SingleRecipe.module.css";
import { useParams } from "react-router-dom";
import { RecipesData } from "../../../interfaces/db_interfaces";
import { RecipeParams } from "../../../interfaces/app_interfaces";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import SingleRecipeHeadline from "./SingleRecipeHeadline";
import Ingredients from "./Ingredients";
import RecipeMethod from "./RecipeMethod";
import useRecipes from "../../../hooks/useRecipes";
import { useEffect, useState } from "react";

const SingleRecipe = () => {
  const [ladowanie, setLadowanie] = useState();
  const { recipes, loading } = useRecipes();
  const { recipeTitle } = useParams<RecipeParams>();

  const filterRecipes = (recipes: RecipesData[], recipeTitle: string) => {
    return recipes.filter(({ title }) => title === recipeTitle)[0];
  };

  const findSelectedRecipe = filterRecipes(recipes, recipeTitle);

  return (
    <>
      {findSelectedRecipe === undefined ? (
        <CircularProgress className={styles.loading} />
      ) : (
        <ThemeProvider theme={theme}>
          <SingleRecipeHeadline
            title={findSelectedRecipe.title}
            ratingValue={findSelectedRecipe.rating}
            author={findSelectedRecipe.author}
            prepTime={findSelectedRecipe.prepTime}
          />
          <div className={styles.container}>
            <img
              src={findSelectedRecipe.pictureUrl}
              className={styles.recipeImg}
              alt=""
            />
            <Ingredients ingredients={findSelectedRecipe.ingredients} />
          </div>
          <RecipeMethod steps={findSelectedRecipe.steps} />
        </ThemeProvider>
      )}
    </>
  );
};

export default SingleRecipe;
