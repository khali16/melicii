import Search from "../components/Layout/Search";
import FavoritesLink from "../components/Layout/FavoritesLink";
import RecipeCard from "../components/Recipes/RecipeCard/RecipeCard";

const Welcome = () => {
  return (
    <>
      <Search />
      <FavoritesLink />
      <RecipeCard />
    </>
  );
};

export default Welcome;
