import React from "react";
import { Route } from "react-router-dom";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <Route path="/">
      <Welcome />
    </Route>
  );
}

export default App;
