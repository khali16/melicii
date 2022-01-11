import * as Yup from "yup";

export const signupSchema = Yup.object().shape({
  email: Yup.string()
    .required("Please, enter your email.")
    .email("Please, enter a valid email."),
  username: Yup.string()
    .required("Please, enter your username.")
    .min(4, "At least 4 letters."),
  password: Yup.string()
    .required("Please, enter your password.")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Must Contain 8 Characters, one uppercase, one lowercase, one number and one special case character."
    ),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match."
  ),
});
