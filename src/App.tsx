import React from "react";
import { Route } from "react-router-dom";
import NewRecipe from "./pages/NewRecipe";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <>
      <Route path="/">
        <Welcome />
      </Route>
      <Route path="/new-recipe">
        <NewRecipe />
      </Route>
    </>
  );
}

export default App;
