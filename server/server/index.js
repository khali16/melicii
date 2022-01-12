const express = require("express");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3001;

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const recipes = [
  {
    author: "Kamila",
    title: "Tomato Pasta",
    type: "dinner",
    pictureUrl:
      "https://www.simplyrecipes.com/thmb/dBaY84TstQAL88opekC8Oy_0xa0=/580x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2012__04__buttery-tomato-pasta-vertical-735-f594b53b2e9341599b1767369c89c7ff.jpg",
    prepTime: 30,
    difficulty: "easy",
    rating: [4, 5, 5, 5, 4],
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
    rating: [4, 5, 5, 5, 4],
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
    rating: [4, 5, 5, 5, 4],
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
    rating: [4, 5, 5, 5, 4],
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
  {
    author: "Kuba",
    title: "Fish Stew",
    type: "Dinner",
    pictureUrl:
      "https://www.feastingathome.com/wp-content/uploads/2017/06/Brazilian-Fish-Stew-21.jpg",
    prepTime: 35,
    difficulty: "Medium",
    rating: [4, 4, 3, 4, 4],
    ingredients: [
      {
        amount: "6",
        measure: "tablespoons",
        ingredient: "extra virgin olive oil",
      },
      {
        amount: "1",
        measure: "-",
        ingredient: "medium onion",
      },
      {
        amount: "3",
        measure: "-",
        ingredient: "large cloves garlic, minced",
      },
      {
        amount: "2/3",
        measure: "cup",
        ingredient: "fresh parsley leaves, chopped",
      },
      {
        amount: "1",
        measure: "cup",
        ingredient: "chopped tomato",
      },
      {
        amount: "2",
        measure: "teaspoons",
        ingredient: "tomato paste",
      },
      {
        amount: "1",
        measure: "cup",
        ingredient: "clam juice",
      },
      {
        amount: "1/2",
        measure: "cup",
        ingredient: "dry white wine",
      },
      {
        amount: "0.7",
        measure: "kilo",
        ingredient:
          "white fish fillets such as halibut, cod, red snapper, or sea bass, cut into 2-inch pieces",
      },
      {
        amount: "1",
        measure: "teaspoon",
        ingredient: "oregano",
      },
      {
        amount: "1",
        measure: "teaspoon",
        ingredient: "thyme",
      },
      {
        amount: "1/8",
        measure: "teaspoon",
        ingredient: "tabasco sauce",
      },
      {
        amount: "1/8",
        measure: "teaspoon",
        ingredient: "black pepper",
      },
      {
        amount: "1",
        measure: "teaspoon",
        ingredient: "salt",
      },
    ],
    steps: [
      {
        step: "Heat olive oil in a large, thick-bottomed pot over medium-high heat. Add onion and sauté 4 minutes. Add the garlic and cook a minute more. Add parsley and stir 2 minutes. Add tomato and tomato paste, and gently cook for 10 more minutes or so.",
      },
      {
        step: "Add clam juice, dry white wine, and fish. Bring to a simmer, and let simmer until the fish is cooked through and easily flakes apart, about 3 to 5 minutes. Add seasoning — salt, pepper, oregano, thyme, and Tabasco. Add more salt and pepper to taste.",
      },
      {
        step: "Ladle into individual bowls and serve. Great served with crusty bread for dipping in the fish stew broth.",
      },
    ],
  },
  {
    author: "Kuba",
    title: "Pork Stir Fry With Green Onion",
    type: "Dinner",
    pictureUrl:
      "https://www.simplyrecipes.com/thmb/kEy41YGTaMk871JsKiyj8Bjf07U=/648x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2013__01__pork-stir-fry-green-onion-vertical-a-1600-2db7319f57da45e786e9a7f2cc90451c.jpg",
    prepTime: 25,
    difficulty: "Medium",
    rating: [3, 3, 3, 3, 4],
    ingredients: [
      {
        amount: "1/2",
        measure: "kilo",
        ingredient: "pork loin or boneless pork chops",
      },
      {
        amount: "2",
        measure: "tablespoons",
        ingredient: "soy sauce",
      },
      {
        amount: "1",
        measure: "teaspoon",
        ingredient: "sugar",
      },
      {
        amount: "1",
        measure: "teaspoon",
        ingredient: "cornstarch",
      },
      {
        amount: "4",
        measure: "tablespoons",
        ingredient: "peanut oil or canola oil",
      },
      {
        amount: "5",
        measure: "-",
        ingredient: "gloves garlic, thinly sliced",
      },
      {
        amount: "1",
        measure: "cup",
        ingredient: "green onion",
      },
      {
        amount: "1/2",
        measure: "teaspoon",
        ingredient: "seasame oil",
      },
      {
        amount: "-",
        measure: "-",
        ingredient: "cooked rice",
      },
    ],
    steps: [
      {
        step: "Pork chops tend to come in thicknesses either around 1/2 inch thick or an inch thick. If you are working with a thick boneless pork chop, start by slicing it into two thin layers, horizontally. If starting with pork loin, cut slices 1/2 inch thick. Put the slices under some plastic wrap or wax paper and pound them thin with a rubber mallet, meat mallet or even an empty wine bottle. This will help tenderize the meat. The slices should be about 1/4 inch thick. Cut the pork across the grain into thin strips, about 1 1/2 inches long.",
      },
      {
        step: "Put the soy sauce, sugar, and cornstarch into a large bowl and whisk to combine. Add the pork strips to the bowl with the marinade and toss to coat completely. Set aside for at least 10 minutes.",
      },
      {
        step: "Heat the peanut oil in a wok or large sauté pan on high heat. When the oil is hot (shimmering but not smoking) add the garlic slices and stir-fry until they begin to turn brown at the edges, about 30 seconds. Add the pork strips and stir-fry until the pork changes color, about 90 seconds, stirring constantly.",
      },
      {
        step: "Add the sliced green onions and continue to stir-fry for another minute, or until the green onions wilt. Turn off the heat and stir in the sesame oil, if using.",
      },
      {
        step: "Serve immediately. Serve alone (paleo and low carb), or with rice.",
      },
    ],
  },
];

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

app.get("/api", (req, res) => {
  res.json(recipes);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
