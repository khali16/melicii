import { Box, ThemeProvider, Typography } from "@material-ui/core";
import { theme } from "../../UI/Logo/Styles";
import { Rating } from "react-simple-star-rating";
import smoothie from "../blueberry-smoothie.jpg";
import styles from "./SingleRecipe.module.css";
import { useParams } from "react-router-dom";
import useRecipes from "../../../hooks/useRecipes";
import { RecipesData } from "../../../interfaces/db_interfaces";
import { Params } from "../../../interfaces/app_interfaces";

const SingleRecipe = () => {
  const { recipesData } = useRecipes();
  const recipes: RecipesData[] = recipesData;
  const { recipeTitle } = useParams<Params>();
  const selectedRecipe = recipes.find(({ title }) => title === recipeTitle);
  return (
    <>
      <ThemeProvider theme={theme}>
        <div className={styles.headline}>
          <Typography variant="h3">{selectedRecipe?.title}</Typography>
          <Rating ratingValue={5} fillColor="#117777" />
        </div>
        <div className={styles.container}>
          <img src={smoothie} className={styles.recipeImg} alt="" />
          <Box className={styles.ingredientsBox}>
            {selectedRecipe
              ? selectedRecipe.ingredients.map((recipeIngredients) => (
                  <Typography variant="h6" style={{ fontWeight: 1000 }}>
                    {" "}
                    {recipeIngredients.amount} {recipeIngredients.measure}{" "}
                    {recipeIngredients.ingredient}
                  </Typography>
                ))
              : null}
          </Box>
        </div>
        <div className={styles.methodHeadline}>
          <Typography variant="h3">Method</Typography>
          <div className={styles.methodUnderline}></div>
          <div className={styles.methodContainer}>
            {selectedRecipe?.steps.map((recipeSteps) => (
              <Typography variant="h5" gutterBottom>
                {recipeSteps.step}
              </Typography>
            ))}
          </div>
        </div>
      </ThemeProvider>
    </>
  );
};

export default SingleRecipe;
