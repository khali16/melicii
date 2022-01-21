const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const recipes = require("./recipes");
const users = require("./users");
const { rejects } = require("assert");

const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/create", (req, res) => {
  recipes.push(req.body);
  console.log(recipes);
});

app.post("/rating", (req, res) => {
  const selectedRecipe = recipes.find(({ title }) => title === req.body.title);
  if (req.body.rating === null) {
    selectedRecipe.rating.push(5);
  } else {
    selectedRecipe.rating.push(req.body.rating);
  }
  console.log(selectedRecipe.rating);
});

app.post("/addUser", (req, res) => {
  users.push(req.body);
  console.log(users);
  const newUser = users.find(({ email }) => email === req.body.email);
  res.json({ email: newUser.email, username: newUser.username });
});

app.get("/fetchUser", (req, res) => {
  const selectedUser = users.find(({ email }) => email === req.query.email);
  if (selectedUser) {
    if (selectedUser.password === req.query.password) {
      res.json({ email: selectedUser.email, username: selectedUser.username });
    } else {
      res.json(null);
    }
  } else {
    res.json(null);
  }
});

app.get("/api", (req, res) => {
  res.json(recipes);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
