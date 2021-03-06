import React from "react";
import { ReactComponent as Ramen } from "../Icons/HeaderRamen.svg";
import styles from "./HeaderLogo.module.css";

const Logo = () => {
  return (
    <div className={styles.logoBox}>
      <div className={styles.logoIcon}>
        <Ramen />
      </div>
      <div className={styles.logoText}>
        <div className={styles.logoTitle}>Melicii</div>
        <div className={styles.logoSubtitle}>RECIPES</div>
      </div>
    </div>
  );
};

export default Logo;
