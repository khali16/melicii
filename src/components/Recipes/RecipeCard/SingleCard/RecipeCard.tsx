import {
  Card,
  CardActions,
  CardMedia,
  CardContent,
  ThemeProvider,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import styles from "../RecipeCard.module.css";
import { theme } from "../../../styles/Themes";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";

interface OwnProps {
  title: string;
  pictureUrl: string;
  type: string;
  prepTime: number;
  average: number;
}

const RecipeCard: React.FC<OwnProps> = ({
  title,
  pictureUrl,
  type,
  prepTime,
  average,
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
      </Link>
      <CardActions>
        <QueryBuilderIcon />
        <Typography variant="overline" component="p">
          {prepTime} min
        </Typography>
        <Rating
          value={Math.round(average)}
          readOnly
          icon={<StarIcon className={styles.ratingIcon} />}
          className={styles.rating}
        />
      </CardActions>
    </Card>
  );
};

export default RecipeCard;
