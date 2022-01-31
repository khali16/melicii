import * as Yup from "yup";

export const methodSchema = Yup.object().shape({
  steps: Yup.array()
    .of(
      Yup.object().shape({
        step: Yup.string().required("Wybierz"),
      })
    )
    .required("Add step")
    .min(2, "At least 2 steps"),
});
