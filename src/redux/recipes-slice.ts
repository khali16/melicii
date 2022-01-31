import { RecipesData, Rating } from "./../interfaces/db_interfaces";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchRecipes = createAsyncThunk("fetchRecipes", async () => {
  const req = await axios.get("/api").then((res) => res.data);
  return req as RecipesData[];
});

const addRecipe = createAsyncThunk(
  "addRecipe",
  async (recipeData: RecipesData) => {
    await axios.post("/create", recipeData);
  }
);

const addRating = createAsyncThunk(
  "addRating",
  async ({ title, rating }: Rating) => {
    await axios.post("/rating", { title, rating });
  }
);

export const recipesSlice = createSlice({
  name: "recipes",
  initialState: { recipes: [] as RecipesData[] },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRecipes.fulfilled, (state, action) => {
      state.recipes = action.payload;
    });
  },
});

export default recipesSlice.reducer;
export { fetchRecipes, addRecipe, addRating };
