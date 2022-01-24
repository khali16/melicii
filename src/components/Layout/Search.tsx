import { Box, List, ListItem, ListItemText } from "@material-ui/core";
import { ListItemButton } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useRecipes from "../../hooks/useRecipes";
import { RecipesData } from "../../interfaces/db_interfaces";
import styles from "./Search.module.css";

const Search = () => {
  const [searchedRecipe, setSearchedRecipe] = useState("");
  const [foundRecipes, setFoundRecipes] = useState<RecipesData[]>([]);
  const { recipes } = useRecipes();

  useEffect(() => {
    const filteredRecipes = recipes.filter(({ title }) =>
      title.toLowerCase().includes(searchedRecipe.toLowerCase())
    );

    if (searchedRecipe === "") {
      setFoundRecipes([]);
    } else {
      setFoundRecipes(filteredRecipes);
    }
  }, [searchedRecipe]);
  return (
    <>
      <div className={styles.searchContainer}>
        <div className={styles.searchInput}>
          <input
            type="text"
            value={searchedRecipe}
            onChange={({ target: { value } }) => setSearchedRecipe(value)}
          />
        </div>
        {foundRecipes.length != 0 && (
          <Box className={styles.result}>
            <List>
              {foundRecipes.map((recipe) => {
                return (
                  <ListItem>
                    <ListItemButton>
                      <Link to={`/recipe/${recipe.title}`}>
                        <ListItemText>{recipe.title}</ListItemText>
                      </Link>
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Box>
        )}
      </div>
    </>
  );
};

export default Search;
