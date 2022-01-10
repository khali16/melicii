import { configureStore } from "@reduxjs/toolkit";
import recipesReducer from "./recipes-slice";

export const store = configureStore({
  reducer: {
    recipes: recipesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
