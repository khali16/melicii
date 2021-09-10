import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import { useStyles, theme } from "../UI/Logo/Styles";
import Link from "@material-ui/core/Link";
import Container from "@material-ui/core/Container";
import styles from "./Signup.module.css";
import Logo from "../UI/Logo/Logo";
import { ThemeProvider } from "@material-ui/core/styles";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useAuth } from "../../store/auth-context";

const Signup = () => {
  const classes = useStyles();
  const { signup } = useAuth();

  async function submitHandler(
    email: string,
    password: string,
    username: string
  ) {
    try {
      await signup(email, password, username);
    } catch (error) {
      alert(error);
    }
  }

  const signupSchema = Yup.object().shape({
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

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
      username: "",
    },
    validationSchema: signupSchema,
    onSubmit: (values) => {
      submitHandler(values.email, values.password, values.username);
    },
  });
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Logo />
        <form className={classes.form} onSubmit={formik.handleSubmit}>
          <ThemeProvider theme={theme}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="EMAIL"
              name="email"
              autoFocus
              onChange={formik.handleChange}
              value={formik.values.email}
              helperText={formik.touched.email ? formik.errors.email : ""}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="PASSWORD"
              type="password"
              id="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              helperText={formik.touched.password ? formik.errors.password : ""}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="confirmPassword"
              label="CONFIRM PASSWORD"
              type="password"
              id="confirmPassword"
              onChange={formik.handleChange}
              value={formik.values.confirmPassword}
              helperText={
                formik.touched.confirmPassword
                  ? formik.errors.confirmPassword
                  : ""
              }
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="USERNAME"
              name="username"
              onChange={formik.handleChange}
              value={formik.values.username}
              helperText={formik.touched.username ? formik.errors.username : ""}
            />
          </ThemeProvider>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            <p className={styles.font}>SIGN UP</p>
          </Button>
          <div style={{ float: "right" }}>
            <Link
              href="#"
              variant="body2"
              style={{
                color: "black",
                fontFamily: "Frank Ruhl Libre",
                fontSize: "normal",
                fontWeight: "bold",
              }}
            >
              {"Already registered? Log In now."}
            </Link>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default Signup;
