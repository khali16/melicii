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
import { signupSchema } from "./validationSchema";

const Signup = () => {
  const classes = useStyles();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
      username: "",
    },
    validationSchema: signupSchema,
    onSubmit: (values) => {},
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
