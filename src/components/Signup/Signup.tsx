import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import { theme } from "../UI/Logo/Styles";
import Container from "@material-ui/core/Container";
import styles from "./Signup.module.css";
import Logo from "../UI/Logo/Logo/Logo";
import { ThemeProvider } from "@material-ui/core/styles";
import { useFormik } from "formik";
import { signupSchema } from "./validationSchema";
import { useAuth } from "../../store/auth-context";

interface OwnProps {
  closeModal: () => void;
}

const Signup: React.FC<OwnProps> = ({ closeModal }) => {
  const { addNewUser } = useAuth();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
      username: "",
    },
    validationSchema: signupSchema,
    onSubmit: (values) => {
      addNewUser(values.email, values.username, values.password);
      closeModal();
    },
  });
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={styles.paper}>
        <Logo />
        <form className={styles.form} onSubmit={formik.handleSubmit}>
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
              label="PASSWORD"
              name="password"
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
              label="CONFIRM"
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
            className={styles.submit}
          >
            <p className={styles.font}>SIGN UP</p>
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default Signup;
