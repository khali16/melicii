import * as Yup from "yup";

export const ingredientsSchema = Yup.object().shape({
  ingredients: Yup.array()
    .of(
      Yup.object().shape({
        amount: Yup.string().required("wybierz"),
        measure: Yup.string().required("wybierz"),
        ingredient: Yup.string().required("wybierz"),
      })
    )
    .required("Must have ingredients")
    .min(3, "At least 3 ingredients"),
});
