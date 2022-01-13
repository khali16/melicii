import useTypeRecipes from "../../../hooks/useTypeRecipes";
import { sortByRating } from "../../../utils/sortByRating";
import TypeRecipe from "./TypeRecipe";
import styles from "./Recipes.module.css";
import { Typography } from "@material-ui/core";
import { useParams } from "react-router";
import { MealTypeParams } from "../../../interfaces/app_interfaces";

const TypeRecipes = () => {
  const { mealType } = useParams<MealTypeParams>();
  const { selectedTypeRecipes } = useTypeRecipes(mealType);
  const sortedRecipes = sortByRating(selectedTypeRecipes);

  const capitalizeTitle = (title: string) => {
    return title.charAt(0).toUpperCase() + title.slice(1);
  };

  console.log(selectedTypeRecipes);
  return (
    <>
      <div className={styles.typeContainer}>
        <Typography variant="h4" className={styles.typeText}>
          {capitalizeTitle(mealType)}
        </Typography>
        <div className={styles.underline} />
      </div>
      <div className={styles.container}>
        {sortedRecipes.map((recipe) => (
          <TypeRecipe
            title={recipe.title}
            type={recipe.type}
            pictureUrl={recipe.pictureUrl}
            prepTime={recipe.prepTime}
            average={recipe.average}
          />
        ))}
      </div>
    </>
  );
};

export default TypeRecipes;
