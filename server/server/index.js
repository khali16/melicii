const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

const recipes = [
  {
    author: "Kamila",
    title: "Tomato Pasta",
    type: "dinner",
    pictureUrl:
      "https://www.simplyrecipes.com/thmb/dBaY84TstQAL88opekC8Oy_0xa0=/580x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2012__04__buttery-tomato-pasta-vertical-735-f594b53b2e9341599b1767369c89c7ff.jpg",
    prepTime: 30,
    difficulty: "easy",
    ingredients: [
      {
        amount: "1/2",
        measure: "kilo",
        ingredient: "favourite pasta",
      },
      {
        amount: "2",
        measure: "tablespoons",
        ingredient: "olive oil",
      },
      {
        amount: "1",
        measure: "-",
        ingredient: "onion",
      },
      {
        amount: "2",
        measure: "-",
        ingredient: "garlic",
      },
      {
        amount: "1/2",
        measure: "teaspoon",
        ingredient: "salt",
      },
      {
        amount: "1/4",
        measure: "teaspoon",
        ingredient: "black pepper",
      },
      {
        amount: "1",
        measure: "can",
        ingredient: "crushed tomatoes",
      },
      {
        amount: "1/2",
        measure: "cup",
        ingredient: "heavy cream",
      },
      {
        amount: "1/2",
        measure: "cup",
        ingredient: "choped fresh basil leaves",
      },
    ],
    steps: [
      {
        step: "Heat olive oil in a large, high-sided sauté pan over medium heat until shimmering. Add the onion and sauté until softened and translucent, 3 to 4 minutes. Add the garlic and red pepper flakes, if using, and sauté until fragrant, 30 seconds to 1 minute. Carefully pour in the crushed tomatoes. Add the salt and pepper and stir to combine. Bring to a simmer and cook, uncovered, stirring occasionally, for 10 minutes. Reduce heat to low and stir in the cream. Taste and season with additional salt and pepper as needed.",
      },
      {
        step: "Meanwhile, bring a large pot of salted water to a boil. Add the pasta and cook al dente, about 10 minutes or according to package instructions.",
      },
      {
        step: "Drain the pasta and add it to the sauce. Toss gently to combine. Add the basil, toss once more, and serve immediately with grated cheese.",
      },
    ],
  },
  {
    author: "Kamila",
    title: "Blueberry Smoothie",
    type: "breakfast",
    pictureUrl:
      "https://www.simplyrecipes.com/thmb/SYy--AvfhM4CqsLS862E9aJ3-O4=/648x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Blueberry-Smoothie-LEAD-5-5385cdff34f74036a38b325c04cc0d27.jpg",
    prepTime: 5,
    difficulty: "easy",
    ingredients: [
      {
        amount: "1",
        measure: "cup",
        ingredient: "blueberries",
      },
      {
        amount: "1/2",
        measure: "cup",
        ingredient: "plain Greek yogurt",
      },
      {
        amount: "3/4",
        measure: "cup",
        ingredient: "milk",
      },
      {
        amount: "2",
        measure: "tablespoons",
        ingredient: "honey",
      },
      {
        amount: "1/2",
        measure: "teaspoon",
        ingredient: "vanilla extract",
      },
      {
        amount: "1/8",
        measure: "teaspoon",
        ingredient: "ground nutmeg",
      },
    ],
    steps: [
      {
        step: "Blend the blueberries, yogurt, milk, sugar, vanilla, and nutmeg in a blender until frothy, scraping down the sides of the blender with a spatula occasionally. Serve immediately.",
      },
    ],
  },
  {
    author: "Kamila",
    title: "Tempeh Bacon",
    type: "Breakfast",
    pictureUrl:
      "https://www.simplyrecipes.com/thmb/kk_zUHpdi_oSwEgv2nBYMMgUAV0=/648x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Tempeh-Bacon-LEAD-4-43bba59d8ca54699bded4f70aa6a3aa7.jpg",
    prepTime: 85,
    difficulty: "Medium",
    ingredients: [
      {
        amount: "1",
        measure: "package",
        ingredient: "tampeh",
      },
      {
        amount: "3",
        measure: "tablespoons",
        ingredient: "soy sauce",
      },
      {
        amount: "2",
        measure: "tablespoons",
        ingredient: "maple syrup",
      },
      {
        amount: "1",
        measure: "tablespoon",
        ingredient: "olive oil",
      },
      {
        amount: "1",
        measure: "teaspoon",
        ingredient: "smoked paprika",
      },
      {
        amount: "1/2",
        measure: "teaspoon",
        ingredient: "black pepper",
      },
    ],
    steps: [
      {
        step: "Slice the tempeh into 1/4-inch strips crosswise or lengthwise, depending on how long you’d like your “bacon” strips. Place the sliced tempeh in a wide shallow dish.",
      },
      {
        step: "In a small bowl, stir the soy sauce, maple syrup, olive oil, Frank’s RedHot sauce, liquid smoke, and black pepper until combined. Pour the marinade over the tempeh, cover tightly with plastic wrap, and refrigerate for at least 1 hour or up to 24 hours.",
      },
      {
        step: "Preheat the oven to 425ºF and line a baking sheet with parchment paper. Lay the marinated tempeh in a single layer. Bake for 15 minutes. Reserve the marinade. When there are 5 minutes left, brush the tempeh with the marinade. Once baked, brush it again and serve warm.",
      },
    ],
  },
  {
    author: "Kamila",
    title: "Oatmeal Cookies",
    type: "Dessert",
    pictureUrl:
      "https://www.simplyrecipes.com/thmb/YrduXBGsumVjeYathNL-7RTuqY4=/648x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Grandmas-Oatmeal-Cookies-LEAD-03-V-bc960fb5a0f247458548f01a39c4e764.jpg",
    prepTime: 30,
    difficulty: "Medium",
    ingredients: [
      {
        amount: "1",
        measure: "cup",
        ingredient: "shortening",
      },
      {
        amount: "1",
        measure: "cup",
        ingredient: "brown sugar",
      },
      {
        amount: "1",
        measure: "cup",
        ingredient: "white sugar",
      },
      {
        amount: "2",
        measure: "-",
        ingredient: "eggs",
      },
      {
        amount: "1",
        measure: "tablespoon",
        ingredient: "vanilla extract",
      },
      {
        amount: "1",
        measure: "cups",
        ingredient: "flour",
      },
      {
        amount: "1",
        measure: "teaspoon",
        ingredient: "salt",
      },
      {
        amount: "1",
        measure: "teaspoon",
        ingredient: "baking soda",
      },
      {
        amount: "1",
        measure: "tablespoon",
        ingredient: "cinnamon",
      },
      {
        amount: "3",
        measure: "cups",
        ingredient: "rolled oats",
      },
      {
        amount: "3/4",
        measure: "cup",
        ingredient: "chopped walnuts",
      },
    ],
    steps: [
      { step: "Preheat the oven to 350°F." },
      {
        step: "Beat together the shortening and sugars. Add the eggs and vanilla extract, and beat well. Whisk together the flour, salt, baking soda and cinnamon. Add to sugar and egg mixture and mix well. Add a tablespoon of water. Add raisins (if using) and nuts. Add oats last.",
      },
      {
        step: "Spoon out by heaping tablespoonfuls on to greased cookie sheets. Bake at 350°F. Bake for 10 minutes. Remove to a wire rack.",
      },
      {
        step: "Cookies will keep for several days in an airtight container on the counter.",
      },
    ],
  },
];

app.get("/api", (req, res) => {
  res.json(recipes);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
