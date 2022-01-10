author: string;
title: string;
type: string;
pictureUrl: string;
prepTime: number;
difficulty: string;
ingredients: {
  amount: string;
  measure: string;
  ingredient: string;
}
[];
steps: {
  step: string;
}
[];
export const recipes = [
  {
    author: "Kamila",
    title: "Tomato Pasta",
    type: "dinner",
    pictureUrl: "",
    prepTime: 30,
    difficulty: "easy",
    ingredients: [
      {
        amount: "1",
        measure: "",
        ingredient: "tomatos",
      },
      {
        amount: "2",
        measure: "-",
        ingredient: "tomatos",
      },
      {
        amount: "2",
        measure: "-",
        ingredient: "tomatos",
      },
    ],
    steps: [
      {
        step: "Do it.",
      },
      {
        step: "Do it.",
      },
      {
        step: "Do it.",
      },
    ],
  },
  {
    author: "Kamila",
    title: "Tomato Pasta 2",
    type: "dinner",
    pictureUrl: "",
    prepTime: 30,
    difficulty: "easy",
    ingredients: [
      {
        amount: "2",
        measure: "-",
        ingredient: "tomatos",
      },
      {
        amount: "2",
        measure: "-",
        ingredient: "tomatos",
      },
      {
        amount: "2",
        measure: "-",
        ingredient: "tomatos",
      },
    ],
    steps: [
      {
        step: "Do it.",
      },
      {
        step: "Do it.",
      },
      {
        step: "Do it.",
      },
    ],
  },
];
