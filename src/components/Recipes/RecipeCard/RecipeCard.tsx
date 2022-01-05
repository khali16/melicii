import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  ThemeProvider,
  Typography,
} from "@material-ui/core";
import { recipes } from "../../DummyData";
import styles from "./RecipeCard.module.css";
import smoothie from "../blueberry-smoothie.jpg";
import { theme } from "../../styles/Themes";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import { Rating } from "react-simple-star-rating";
import { Link } from "react-router-dom";

const RecipeCard = () => {
  return (
    <>
      <div className={styles.cardsContainer}>
        {recipes.map((recipe) => (
          <Card className={styles.card}>
            <Link to={`/recipe/${recipe.title}`} className={styles.link}>
              <CardMedia component="img" image={smoothie} />
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
                  {recipe.totalPrepTime} min
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
    // <Card className={styles.card}>
    //   <CardMedia component="img" image={smoothie} />
    //   <CardContent>
    //     <ThemeProvider theme={theme}>
    //       <Typography variant="overline" style={{ color: "#B84F1A" }}>
    //         BREAKFAST
    //       </Typography>
    //       <Typography variant="h5">Blueberry Smoothie</Typography>
    //     </ThemeProvider>
    //   </CardContent>
    //   <CardActions>
    //     <QueryBuilderIcon />
    //     <Typography variant="overline" component="p">
    //       35 mins
    //     </Typography>
    //     <Rating
    //       ratingValue={5}
    //       size={30}
    //       fillColor="#117777"
    //       style={{ marginLeft: "40px" }}
    //     />
    //   </CardActions>
    // </Card>
  );
};

export default RecipeCard;
