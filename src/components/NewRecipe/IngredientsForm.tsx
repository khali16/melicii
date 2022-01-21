import React from "react";
import { useFormik, FormikProvider, FieldArray, Form } from "formik";
import {
  TextField,
  MenuItem,
  Card,
  CardContent,
  Button,
  Typography,
} from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import * as Yup from "yup";
import { useForm } from "../../store/form-context";
import { IngredientsMeasurement } from "../../constants/IngredientsMeasurement";
import { theme } from "../styles/Themes";
import styles from "./IngredientsForm.module.css";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

interface Props {
  nextStep: () => void;
}

//TO-DO: refactor
const IngredientsForm: React.FC<Props> = ({ nextStep }) => {
  const schema = Yup.object().shape({
    ingredients: Yup.array()
      .of(
        Yup.object().shape({
          amount: Yup.string().required("wybierz"),
          measure: Yup.string().required("wybierz"),
          ingredient: Yup.string().required("wybierz"),
        })
      )
      .required("Must have ingredients")
      .min(3, "At least 3 ingredients"),
  });

  const { setSecondForm } = useForm();

  const formik = useFormik({
    initialValues: {
      ingredients: [
        { amount: "", measure: "", ingredient: "" },
        { amount: "", measure: "", ingredient: "" },
        { amount: "", measure: "", ingredient: "" },
      ],
    },
    onSubmit: (values) => {
      setSecondForm(values);
      nextStep();
    },
    validationSchema: schema,
  });

  const handleSubmit = () => {
    formik.handleSubmit();
  };

  return (
    <>
      <FormikProvider value={formik}>
        <Form onSubmit={formik.handleSubmit}>
          <Card className={styles.card}>
            <ThemeProvider theme={theme}>
              <Typography variant="h5" className={styles.header}>
                Add at least 3 ingredients
              </Typography>
              <CardContent>
                <div className={styles.inputs}>
                  <FieldArray
                    name="ingredients"
                    render={(arrayHelpers) => (
                      <div>
                        {formik.values.ingredients.map((ingredient, index) => (
                          <div key={index}>
                            <TextField
                              required
                              type="text"
                              label="Amount"
                              variant="outlined"
                              margin="normal"
                              name={`ingredients[${index}].amount`}
                              value={ingredient.amount}
                              onChange={formik.handleChange}
                            />
                            <TextField
                              required
                              variant="outlined"
                              margin="normal"
                              name={`ingredients[${index}].measure`}
                              value={ingredient.measure}
                              onChange={formik.handleChange}
                              select
                              className={styles.measureInput}
                            >
                              {IngredientsMeasurement.map(
                                (measurement, index) => (
                                  <MenuItem
                                    value={measurement.value}
                                    key={index}
                                  >
                                    {measurement.name}
                                  </MenuItem>
                                )
                              )}
                            </TextField>
                            <TextField
                              required
                              label="Ingredient"
                              variant="outlined"
                              margin="normal"
                              name={`ingredients[${index}].ingredient`}
                              value={ingredient.ingredient}
                              onChange={formik.handleChange}
                            />
                            {formik.values.ingredients.length > 3 && (
                              <DeleteIcon
                                onClick={() => arrayHelpers.remove(index)}
                                className={styles.deleteIcon}
                              >
                                -
                              </DeleteIcon>
                            )}
                          </div>
                        ))}
                        <AddIcon
                          className={styles.addIcon}
                          onClick={() =>
                            arrayHelpers.push({
                              amount: "",
                              measure: "",
                              ingredient: "",
                            })
                          }
                        >
                          +
                        </AddIcon>
                      </div>
                    )}
                  />{" "}
                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={styles.submitButton}
                    onClick={handleSubmit}
                    type="button"
                  >
                    NEXT
                  </Button>
                </div>
              </CardContent>
            </ThemeProvider>
          </Card>
        </Form>
      </FormikProvider>
    </>
  );
};

export default IngredientsForm;
