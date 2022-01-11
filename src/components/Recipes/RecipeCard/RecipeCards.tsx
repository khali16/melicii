import styles from "./RecipeCard.module.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { useEffect } from "react";
import { fetchRecipes } from "../../../redux/recipes-slice";
import RecipeCard from "./RecipeCard";

const RecipeCards = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRecipes());
  }, []);

  const recipes = useSelector((state: RootState) => state.recipes.recipes);

  return (
    <>
      <div className={styles.cardsContainer}>
        {recipes.map((recipe) => (
          <RecipeCard
            title={recipe.title}
            type={recipe.type}
            pictureUrl={recipe.pictureUrl}
            prepTime={recipe.prepTime}
          />
        ))}
      </div>
    </>
  );
};

export default RecipeCards;
