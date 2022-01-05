import React from "react";
import { Route } from "react-router-dom";
import NewRecipe from "./pages/NewRecipe";
import Welcome from "./pages/Welcome";
import ImageForm from "./components/NewRecipe/ImageForm";
import SingleRecipe from "./components/Recipes/SingleRecipe/SingleRecipe";
import Layout from "./components/Layout/Header/Layout";

function App() {
  return (
    <Layout>
      <Route path="/" exact>
        <Welcome />
      </Route>
      <Route path="/new-recipe">
        <NewRecipe />
      </Route>
      <Route path="/recipe/:recipeTitle">
        <SingleRecipe />
      </Route>
      <Route path="/image">
        <ImageForm />
      </Route>
      <Route path="/test">
        <SingleRecipe />
      </Route>
    </Layout>
  );
}

export default App;
