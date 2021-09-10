import { makeStyles } from "@material-ui/core/styles";
import { createTheme } from "@material-ui/core/styles";

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
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#020000",
    opacity: "0.6",
    height: "70px",
  },
  frame: {
    marginTop: theme.spacing(8),
    border: "2px solid",
    borderImageSlice: 1,
    borderImageSource: "linear-gradient(to bottom, #117777, #38a870)",
  },
  inputs: {
    marginTop: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "white",
  },
}));

const theme = createTheme({
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
    MuiFormHelperText: {
      root: {
        color: "red",
        opacity: "0.7",
      },
    },
  },
});

export { useStyles, theme };
