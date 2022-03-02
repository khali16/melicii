import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  ThemeProvider,
  Typography,
} from "@material-ui/core";
import { Rating } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { theme } from "../../../styles/Themes";
import styles from "../Recipes.module.css";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import StarIcon from "@mui/icons-material/Star";

interface OwnProps {
  title: string;
  type: string;
  pictureUrl: string;
  average: number;
  prepTime: number;
}

const TypeRecipe: React.FC<OwnProps> = ({
  title,
  pictureUrl,
  average,
  type,
  prepTime,
}) => {
  return (
    <Card className={styles.card}>
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

export default TypeRecipe;
