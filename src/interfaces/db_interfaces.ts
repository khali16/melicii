export interface RecipesData {
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
  }[];
  steps: {
    step: string;
  }[];
}
