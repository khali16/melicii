import React from "react";
import styles from "../UserRecipes.module.css";
import { theme } from "../../../styles/Themes";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  ThemeProvider,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import StarIcon from "@mui/icons-material/Star";
import { Rating } from "@mui/material";

interface OwnProps {
  title: string;
  type: string;
  pictureUrl: string;
  average: number;
  prepTime: number;
}

const UserRecipe: React.FC<OwnProps> = ({
  title,
  type,
  pictureUrl,
  average,
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

export default UserRecipe;
