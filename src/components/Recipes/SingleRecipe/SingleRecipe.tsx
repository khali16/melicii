import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ThemeProvider,
  Typography,
} from "@material-ui/core";
import { theme } from "../../styles/Themes";
import { Rating } from "react-simple-star-rating";
import styles from "./SingleRecipe.module.css";
import { useParams } from "react-router-dom";
import useRecipes from "../../../hooks/useRecipes";
import { RecipesData } from "../../../interfaces/db_interfaces";
import { Params } from "../../../interfaces/app_interfaces";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import CircleIcon from "@mui/icons-material/Circle";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const SingleRecipe = () => {
  const recipes = useSelector((state: RootState) => state.recipes.recipes);
  const { recipeTitle } = useParams<Params>();

  const findSelectedRecipe = filterRecipes(recipes, recipeTitle);

  return (
    <>
      <ThemeProvider theme={theme}>
        <div className={styles.headline}>
          <Typography variant="h3">{findSelectedRecipe.title}</Typography>
          <Rating
            ratingValue={5}
            fillColor="#117777"
            className={styles.rating}
          />
        </div>
        <div className={styles.info}>
          <Typography variant="h5">By {findSelectedRecipe.author}</Typography>
          <AccessTimeIcon className={styles.prepTime} />{" "}
          {findSelectedRecipe.prepTime} mins
        </div>
        <div className={styles.container}>
          <img
            src={findSelectedRecipe.pictureUrl}
            className={styles.recipeImg}
            alt=""
          />
          <Box className={styles.ingredientsBox}>
            <Typography variant="h4" className={styles.ingredients}>
              Ingredients:
            </Typography>
            <List className={styles.list}>
              {findSelectedRecipe.ingredients.map((recipeIngredients) => (
                <ListItem>
                  <ListItemIcon>
                    <CircleIcon className={styles.icon} />
                  </ListItemIcon>
                  <ListItemText className={styles.text} disableTypography>
                    {recipeIngredients.amount} {recipeIngredients.measure}
                    {recipeIngredients.ingredient}
                  </ListItemText>
                </ListItem>
              ))}
            </List>
          </Box>
        </div>
        <div className={styles.methodHeadline}>
          <Typography variant="h3">Method</Typography>
          <div className={styles.methodUnderline} />
          <div className={styles.methodContainer}>
            {findSelectedRecipe.steps.map((recipeSteps) => (
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
function filterRecipes(recipes: RecipesData[], recipeTitle: string) {
  return recipes.filter(({ title }) => title === recipeTitle)[0];
}
