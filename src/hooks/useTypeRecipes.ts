import useRecipes from "./useRecipes";

const useTypeRecipes = (typeRecipes: string) => {
  const { recipes } = useRecipes();
  const selectedTypeRecipes = recipes.filter(
    ({ type }) => type === typeRecipes
  );

  return { selectedTypeRecipes };
};

export default useTypeRecipes;
