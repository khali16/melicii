export interface RecipesData {
  author: string;
  title: string;
  type: string;
  pictureUrl: string;
  rating: number[];
  prepTime: number;
  difficulty: string;
  ingredients: {
    amount: string;
    measure: string;
    ingredient: string;
  }[];
  steps: {
    step: string;
  }[];
}

export interface Rating {
  title: string;
  rating: number;
}

export interface User {
  email: string;
  username: string;
}

export interface NewUser {
  email: string;
  username: string;
  password: string;
}

export interface CheckUser {
  email: string;
  password: string;
}
