import { CircularProgress, ThemeProvider } from "@material-ui/core";
import { theme } from "../../styles/Themes";
import styles from "./SingleRecipe.module.css";
import { useParams } from "react-router-dom";
import { RecipesData } from "../../../interfaces/db_interfaces";
import { RecipeParams } from "../../../interfaces/app_interfaces";
import SingleRecipeHeadline from "./SingleRecipeHeadline";
import Ingredients from "./Ingredients";
import RecipeMethod from "./RecipeMethod";
import Comments from "./Comments/Comments";
import { useEffect, useState } from "react";
import useSingleRecipe from "../../../hooks/useSingleRecipe";

const SingleRecipe = () => {
  const { recipeTitle } = useParams<RecipeParams>();
  const [selectedRecipe, setSelectedRecipe] = useState<RecipesData>();

  const { findSelectedRecipe } = useSingleRecipe(recipeTitle);
  useEffect(() => {
    setSelectedRecipe(findSelectedRecipe);
  }, [findSelectedRecipe, selectedRecipe]);

  return (
    <>
      {selectedRecipe === undefined ? (
        <CircularProgress className={styles.loading} />
      ) : (
        <ThemeProvider theme={theme}>
          <SingleRecipeHeadline
            title={selectedRecipe.title}
            ratingValue={selectedRecipe.rating}
            author={selectedRecipe.author}
            prepTime={selectedRecipe.prepTime}
          />
          <div className={styles.container}>
            <img
              src={selectedRecipe.pictureUrl}
              className={styles.recipeImg}
              alt=""
            />
            <Ingredients ingredients={selectedRecipe.ingredients} />
          </div>
          <RecipeMethod steps={selectedRecipe.steps} />
          <Comments
            comments={selectedRecipe.comments}
            title={selectedRecipe.title}
          />
        </ThemeProvider>
      )}
    </>
  );
};

export default SingleRecipe;
