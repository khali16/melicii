import {
  Card,
  CardActions,
  CardMedia,
  CardContent,
  ThemeProvider,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import styles from "./RecipeCard.module.css";
import { theme } from "../../styles/Themes";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import { Rating } from "react-simple-star-rating";

interface OwnProps {
  title: string;
  pictureUrl: string;
  type: string;
  prepTime: number;
}

const RecipeCard: React.FC<OwnProps> = ({
  title,
  pictureUrl,
  type,
  prepTime,
}) => {
  return (
    <Card className={styles.card} key={title}>
      <Link to={`/recipe/${title}`} className={styles.link}>
        <CardMedia component="img" image={pictureUrl} height={200} />
        <CardContent>
          <ThemeProvider theme={theme}>
            <Typography variant="overline" style={{ color: "#B84F1A" }}>
              {type}
            </Typography>
            <Typography variant="h5">{title}</Typography>
          </ThemeProvider>
        </CardContent>
        <CardActions>
          <QueryBuilderIcon />
          <Typography variant="overline" component="p">
            {prepTime} min
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
  );
};

export default RecipeCard;
