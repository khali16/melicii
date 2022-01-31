import {
  Button,
  Card,
  CardContent,
  CardHeader,
  MenuItem,
  TextField,
} from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { useFormik } from "formik";
import React from "react";
import { theme, useStyles } from "../UI/Logo/Styles";
import { useForm } from "../../store/form-context";
import { firstStepSchema } from "./ValidationSchemas/FirstStepValidation";

interface Props {
  nextStep: () => void;
}

const FirstStepRecipeForm: React.FC<Props> = ({ nextStep }) => {
  const { setFirstForm } = useForm();

  const formik = useFormik({
    initialValues: {
      title: "",
      prepTime: 0,
      difficulty: "",
      type: "",
    },
    onSubmit: (values) => {
      setFirstForm(values);
      nextStep();
    },
    validationSchema: firstStepSchema,
  });

  const classes = useStyles();

  const handleSubmit = () => {
    formik.handleSubmit();
  };

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <Card style={{ maxWidth: "700px", margin: "auto", marginTop: "20px" }}>
          <CardHeader>Add Recipe</CardHeader>
          <CardContent>
            <div className={classes.inputs}>
              <ThemeProvider theme={theme}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="title"
                  label="TITLE"
                  name="title"
                  autoFocus
                  value={formik.values.title}
                  onChange={formik.handleChange}
                  helperText={formik.errors.title}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="prepTime"
                  label="TOTAL PREP TIME"
                  placeholder="MINS"
                  type="number"
                  name="prepTime"
                  value={formik.values.prepTime}
                  onChange={formik.handleChange}
                  helperText={formik.errors.prepTime}
                />
                <TextField
                  id="type"
                  select
                  label="Type of meal"
                  fullWidth
                  name="type"
                  required
                  value={formik.values.type}
                  onChange={formik.handleChange}
                  helperText={formik.errors.type}
                >
                  <MenuItem value="breakfast">Breakfast</MenuItem>
                  <MenuItem value="lunch">Lunch</MenuItem>
                  <MenuItem value="dinner">Dinner</MenuItem>
                  <MenuItem value="dessert">Dessert</MenuItem>
                </TextField>
                <TextField
                  id="difficulty"
                  select
                  label="Difficulty"
                  fullWidth
                  name="difficulty"
                  required
                  value={formik.values.difficulty}
                  onChange={formik.handleChange}
                  helperText={formik.errors.difficulty}
                >
                  <MenuItem value="easy">Easy</MenuItem>
                  <MenuItem value="medium">Medium</MenuItem>
                  <MenuItem value="difficult">Difficult</MenuItem>
                </TextField>
              </ThemeProvider>
            </div>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleSubmit}
            >
              NEXT
            </Button>
          </CardContent>
        </Card>
      </form>
    </>
  );
};

export default FirstStepRecipeForm;
