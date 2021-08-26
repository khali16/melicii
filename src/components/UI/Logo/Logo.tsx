import React from "react";
import { ReactComponent as Ramen } from "./ramen.svg";
import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={styles.logoBox}>
      <div className={styles.logoIcon}>
        <Ramen />
      </div>
      <div className={styles.logoText}>
        <div className={styles.logoTitle}>Melicii</div>
        <div className={styles.logoSubtitle}>Recipes</div>
      </div>
    </div>
  );
};

export default Logo;
