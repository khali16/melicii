import styles from "./RecipeCard.module.css";
import { RecipesData } from "../../../interfaces/db_interfaces";
import RecipeCard from "./RecipeCard";
import useRecipes from "../../../hooks/useRecipes";

const RecipeCards = () => {
  const { recipes, loading } = useRecipes();

  const fourFavouritesRecipes = selectFourFavoritesRecipes(recipes);

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className={styles.cardsContainer}>
          {fourFavouritesRecipes.map((recipe, index) => (
            <RecipeCard
              key={index}
              title={recipe.title}
              type={recipe.type}
              pictureUrl={recipe.pictureUrl}
              prepTime={recipe.prepTime}
              average={recipe.average}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default RecipeCards;

const countAverage = (ratings: number[] = []): number => {
  const sum = ratings.reduce((a, b) => a + b);
  return sum / ratings.length;
};

const selectFourFavoritesRecipes = (recipes: RecipesData[]) => {
  return recipes
    .map((recipe) => ({ ...recipe, average: countAverage(recipe.rating) }))
    .sort((a, b) => b.average - a.average)
    .slice(0, 4);
};
