import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Stepper from "@material-ui/core/Stepper";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import React from "react";
import FirstStepRecipeForm from "../components/NewRecipe/FirstStep/FirstStepRecipeForm";
import ImageForm from "../components/NewRecipe/ImageForm/ImageForm";
import IngredientsForm from "../components/NewRecipe/IngredientsForm/IngredientsForm";
import MethodForm from "../components/NewRecipe/MethodForm/MethodForm";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
    },
    backButton: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  })
);

function getSteps() {
  return [
    "Choose title and difficulty",
    "Add ingredients",
    "Add method steps",
    "Send a picture!",
  ];
}

const NewRecipe = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  function getStepContent(stepIndex: number) {
    switch (stepIndex) {
      case 0:
        return <FirstStepRecipeForm nextStep={handleNext} />;
      case 1:
        return <IngredientsForm nextStep={handleNext} />;
      case 2:
        return <MethodForm nextStep={handleNext} />;
      case 3:
        return <ImageForm />;
      default:
        return "Unknown stepIndex";
    }
  }

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>{getStepContent(activeStep)}</div>
    </div>
  );
};
export default NewRecipe;
