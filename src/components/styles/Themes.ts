import { createTheme, makeStyles } from "@material-ui/core/styles";

export const theme = createTheme({
  typography: {
    fontFamily: ["Frank Ruhl Libre", "Georgia", "serif"].join(","),
  },
});

export const useStyles = makeStyles((theme) => ({
  menu: {
    "& .MuiPaper-root": {
      backgroundColor: "#e4f6f6",
    },
    "& div": {
      width: "170px",
    },
  },
}));
