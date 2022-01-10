import { ThemeProvider, Typography } from "@material-ui/core";
import styles from "./FavoritesLink.module.css";
import { theme } from "../styles/Themes";

const FavoritesLink = () => {
  return (
    <div className={styles.container}>
      <ThemeProvider theme={theme}>
        <Typography
          variant="h4"
          style={{ textAlign: "center", padding: "30px 0 30px" }}
        >
          Favorites
        </Typography>
      </ThemeProvider>
      <div className={styles.underline}></div>
    </div>
  );
};

export default FavoritesLink;
