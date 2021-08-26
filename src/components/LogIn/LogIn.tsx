import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import styles from "./LogInModal.module.css";
import Logo from "../UI/Logo/Logo";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "white",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#020000",
    opacity: "0.6",
    height: "70px",
  },
}));

const theme = createMuiTheme({
  overrides: {
    MuiOutlinedInput: {
      root: {
        "&$focused $notchedOutline": {
          borderColor: "#117777",
          borderWidth: 2,
        },
      },
      notchedOutline: {
        borderColor: "#020000",
      },
    },
    MuiFormLabel: {
      root: {
        color: "#020000",
        opacity: "0.6",
        fontFamily: "Frank Ruhl Libre",
        fontSize: "large",
      },
      asterisk: {
        display: "none",
      },
    },
  },
});

const LogIn = () => {
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
              name="password"
              label="PASSWORD"
              type="password"
              id="password"
              autoComplete="current-password"
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
