export const countAverage = (ratings: number[] = []): number => {
  const sum = ratings.reduce((a, b) => a + b);
  return sum / ratings.length;
};
