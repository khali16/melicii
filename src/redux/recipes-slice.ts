import { RecipesData, Rating, AddComment } from "./../interfaces/db_interfaces";
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

const addComment = createAsyncThunk(
  "comment",
  async ({ title, author, comment }: AddComment) => {
    await axios.post("/comment", { title, author, comment });
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
export { fetchRecipes, addRecipe, addRating, addComment };
