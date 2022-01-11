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
