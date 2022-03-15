import Search from "../components/Layout/SearchBar/Search";
import FavoritesLink from "../components/Layout/Favorites/FavoritesLink";
import RecipeCards from "../components/Recipes/RecipeCard/RecipeCards";

const Welcome = () => {
  return (
    <>
      <Search />
      <FavoritesLink />
      <RecipeCards />
    </>
  );
};

export default Welcome;
