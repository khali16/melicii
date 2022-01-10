import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { RecipesData } from "../interfaces/db_interfaces";
import axios from "axios";

const fetchRecipes = createAsyncThunk("fetchRecipes", async () => {
  const req = await axios.get("/api").then((res) => res.data);
  return req as RecipesData[];
});

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

export const {} = recipesSlice.actions;
export default recipesSlice.reducer;
export { fetchRecipes };
