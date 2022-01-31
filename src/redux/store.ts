import { configureStore } from "@reduxjs/toolkit";
import recipesReducer from "./recipes-slice";
import authReducer from "./auth-slice";

export const store = configureStore({
  reducer: {
    recipes: recipesReducer,
    user: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
