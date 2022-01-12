import { Typography } from "@material-ui/core";
import React from "react";
import styles from "./SingleRecipe.module.css";

interface OwnProps {
  steps: {
    step: string;
  }[];
}

const RecipeMethod: React.FC<OwnProps> = ({ steps }) => {
  return (
    <div className={styles.methodHeadline}>
      <Typography variant="h3">Method</Typography>
      <div className={styles.methodUnderline} />
      <div className={styles.methodContainer}>
        {steps.map((recipeSteps, index) => (
          <Typography variant="h5" gutterBottom key={index}>
            {recipeSteps.step}
          </Typography>
        ))}
      </div>
    </div>
  );
};

export default RecipeMethod;
