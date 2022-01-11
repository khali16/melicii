import Search from "../components/Layout/Search";
import FavoritesLink from "../components/Layout/FavoritesLink";
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
