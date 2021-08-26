import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import { useStyles, theme } from "../UI/Logo/Styles";
import Link from "@material-ui/core/Link";
import Container from "@material-ui/core/Container";
import styles from "./Signup.module.css";
import Logo from "../UI/Logo/Logo";
import { ThemeProvider } from "@material-ui/core/styles";

const Signup = () => {
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Logo />
        <form className={classes.form} noValidate>
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
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="USERNAME"
              name="username"
              autoFocus
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
              {"Already registered? Log In now."}
            </Link>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default Signup;
