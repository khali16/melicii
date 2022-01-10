interface Measurement {
  value: string;
  name: string;
}

export const IngredientsMeasurement: Measurement[] = [
  { value: "cup", name: "Cup" },
  { value: "tablespoon", name: "Tbsp" },
  { value: "kilo", name: "Kilo" },
  { value: "can", name: "Can" },
  { value: "piece", name: "Piece" },
  { value: "teaspoon", name: "Teasp" },
  { value: "package", name: "Pckg" },
  { value: "-", name: "-" },
];
