import {
  Card,
  CardActions,
  CardMedia,
  CardContent,
  ThemeProvider,
  Typography,
} from "@material-ui/core";
import styles from "./RecipeCard.module.css";
import { theme } from "../../styles/Themes";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import { Rating } from "react-simple-star-rating";
import { Link } from "react-router-dom";
import useRecipes from "../../../hooks/useRecipes";
import { RecipesData } from "../../../interfaces/db_interfaces";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

const RecipeCard = () => {
  const recipes = useSelector((state: RootState) => state.recipes.recipes);
  const { recipesData } = useRecipes();

  return (
    <>
      <div className={styles.cardsContainer}>
        {recipes.map((recipe) => (
          <Card className={styles.card} key={recipe.title}>
            {console.log(recipe.pictureUrl)}
            <Link to={`/recipe/${recipe.title}`} className={styles.link}>
              <CardMedia
                component="img"
                image={recipe.pictureUrl}
                height={200}
              />
              <CardContent>
                <ThemeProvider theme={theme}>
                  <Typography variant="overline" style={{ color: "#B84F1A" }}>
                    {recipe.type}
                  </Typography>
                  <Typography variant="h5">{recipe.title}</Typography>
                </ThemeProvider>
              </CardContent>
              <CardActions>
                <QueryBuilderIcon />
                <Typography variant="overline" component="p">
                  {recipe.prepTime} min
                </Typography>
                <Rating
                  ratingValue={5}
                  size={25}
                  fillColor="#117777"
                  style={{ marginLeft: "40px" }}
                />
              </CardActions>
            </Link>
          </Card>
        ))}
      </div>
    </>
  );
};

export default RecipeCard;
