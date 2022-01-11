import { Typography } from "@material-ui/core";
import Rating from "@mui/material/Rating";
import { useDispatch } from "react-redux";
import { addRating } from "../../../redux/recipes-slice";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import styles from "./SingleRecipe.module.css";

interface OwnProps {
  title: string;
  ratingValue: number[];
  author: string;
  prepTime: number;
}

const SingleRecipeHeadline: React.FC<OwnProps> = ({
  title,
  ratingValue,
  author,
  prepTime,
}) => {
  const dispatch = useDispatch();
  const countedAverageRating = averageRating(ratingValue);

  return (
    <>
      <div className={styles.headline}>
        <Typography variant="h3">{title}</Typography>
        <Rating
          value={Math.round(countedAverageRating)}
          onChange={(event, newValue) => {
            dispatch(
              addRating({
                title: title,
                //@ts-ignore
                rating: newValue,
              })
            );
          }}
        />
      </div>
      <div className={styles.info}>
        <Typography variant="h5">By {author}</Typography>
        <AccessTimeIcon className={styles.prepTime} /> {prepTime} mins
      </div>
    </>
  );
};

export default SingleRecipeHeadline;

const averageRating = (values: number[]) => {
  return values.reduce((a, b) => a + b, 0) / values.length;
};
