import { ThemeProvider } from "@material-ui/core";
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

const SingleRecipe = () => {
  const recipes = useSelector((state: RootState) => state.recipes.recipes);
  const { recipeTitle } = useParams<RecipeParams>();

  const findSelectedRecipe = filterRecipes(recipes, recipeTitle);

  return (
    <>
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
    </>
  );
};

export default SingleRecipe;

const filterRecipes = (recipes: RecipesData[], recipeTitle: string) => {
  return recipes.filter(({ title }) => title === recipeTitle)[0];
};
