import { Typography } from "@material-ui/core";
import styles from "./UserRecipes.module.css";
import { sortByRating } from "../../../utils/sortByRating";
import UserRecipe from "./UserRecipe/UserRecipe";
import useUserRecipes from "../../../hooks/useUserRecipes";

const UserRecipes = () => {
  const { userRecipes, userName } = useUserRecipes();
  const sortedRecipes = sortByRating(userRecipes);
  return (
    <>
      <div className={styles.typeContainer}>
        <Typography variant="h4" className={styles.typeText}>
          {userName} recipes
        </Typography>
        <div className={styles.underline} />
      </div>
      <div className={styles.container}>
        {sortedRecipes.map((recipe) => (
          <UserRecipe
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

export default UserRecipes;
