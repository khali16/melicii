import React from "react";
import { Route } from "react-router-dom";
import NewRecipe from "./pages/NewRecipe";
import Welcome from "./pages/Welcome";
import ImageForm from "./components/NewRecipe/ImageForm";

function App() {
  return (
    <>
      <Route path="/">
        <Welcome />
      </Route>
      <Route path="/new-recipe">
        <NewRecipe />
      </Route>
      <Route path="/image">
        <ImageForm />
      </Route>
    </>
  );
}

export default App;
