import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
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

const RecipeCard = () => {
  const { recipesData } = useRecipes();

  return (
    <>
      <div className={styles.cardsContainer}>
        {recipesData.map((recipe: RecipesData) => (
          <Card className={styles.card} key={recipe.title}>
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
