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
import * as Yup from "yup";

interface Props {
  nextStep: () => void;
}

const FirstStepRecipeForm: React.FC<Props> = ({ nextStep }) => {
  const schema = Yup.object().shape({
    title: Yup.string().required("Please, enter title.").min(5, "Min 5 char."),
    prepTime: Yup.number()
      .required("Please, select number.")
      .min(5, "Min 5 min"),
    difficulty: Yup.string().required("Please, select difficulty"),
  });

  const formik = useFormik({
    initialValues: {
      title: "",
      prepTime: 0,
      difficulty: "",
    },
    onSubmit: (values) => {
      console.log(values);
      nextStep();
    },
    validationSchema: schema,
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
              type="submit"
            >
              SUBMIT
            </Button>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleSubmit}
            >
              ten
            </Button>
          </CardContent>
        </Card>
      </form>
    </>
  );
};

export default FirstStepRecipeForm;
