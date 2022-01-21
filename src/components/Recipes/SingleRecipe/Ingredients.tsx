import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core";
import CircleIcon from "@mui/icons-material/Circle";
import styles from "./SingleRecipe.module.css";

interface OwnProps {
  ingredients: { amount: string; measure: string; ingredient: string }[];
}

const Ingredients: React.FC<OwnProps> = ({ ingredients }) => {
  return (
    <Box className={styles.ingredientsBox}>
      <Box className={styles.ingredients}>
        <Typography variant="h4">Ingredients:</Typography>
      </Box>
      <List className={styles.list}>
        {ingredients.map((recipeIngredients, index) => (
          <ListItem key={index}>
            <ListItemIcon>
              <CircleIcon className={styles.icon} />
            </ListItemIcon>
            <ListItemText className={styles.text} disableTypography>
              {recipeIngredients.amount} {recipeIngredients.measure} {""}
              {recipeIngredients.ingredient}
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Ingredients;
