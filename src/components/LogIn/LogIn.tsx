import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import { useStyles, theme } from "../UI/Logo/Styles";
import Link from "@material-ui/core/Link";
import Container from "@material-ui/core/Container";
import styles from "./LogInModal.module.css";
import Logo from "../UI/Logo/Logo";
import { ThemeProvider } from "@material-ui/core/styles";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useAuth } from "../store/auth-context";

const LogIn = () => {
  const { login } = useAuth();
  const classes = useStyles();

  async function handleLogin(email: string, password: string) {
    try {
      login(email, password);
      console.log("logged in");
    } catch (error) {
      alert(error);
    }
  }

  const loginSchema = Yup.object().shape({
    email: Yup.string().required("Please, enter your email."),
    password: Yup.string().required("Please, enter your password."),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      handleLogin(values.email, values.password);
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
              autoComplete="email"
              autoFocus
              onChange={formik.handleChange}
              value={formik.values.email}
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
              autoComplete="current-password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
          </ThemeProvider>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            <p className={styles.font}>LOG IN</p>
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
              {"Don't have an account? Sign Up"}
            </Link>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default LogIn;
