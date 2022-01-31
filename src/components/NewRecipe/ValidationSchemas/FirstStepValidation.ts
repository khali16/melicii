import * as Yup from "yup";

export const firstStepSchema = Yup.object().shape({
  title: Yup.string().required("Please, enter title.").min(5, "Min 5 char."),
  prepTime: Yup.number().required("Please, select number.").min(5, "Min 5 min"),
  difficulty: Yup.string().required("Please, select difficulty"),
  type: Yup.string().required("Please, select type of meal"),
});
