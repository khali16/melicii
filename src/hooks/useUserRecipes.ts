import useRecipes from "./useRecipes";

const useUserRecipes = () => {
  const userName = localStorage.getItem("user");
  const { recipes } = useRecipes();
  const userRecipes = recipes.filter(({ author }) => author === userName);
  return { userRecipes, userName };
};

export default useUserRecipes;
