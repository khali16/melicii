import {
  Button,
  Card,
  CardContent,
  MenuItem,
  TextField,
  Typography,
} from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { FieldArray, Form, FormikProvider, useFormik } from "formik";
import React from "react";
import { IngredientsMeasurement } from "../../../constants/IngredientsMeasurement";
import { useForm } from "../../../store/form-context";
import { theme } from "../../styles/Themes";
import { ingredientsSchema } from "../ValidationSchemas/IngredientValidation";
import styles from "./IngredientsForm.module.css";

interface Props {
  nextStep: () => void;
}

const IngredientsForm: React.FC<Props> = ({ nextStep }) => {
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
    validationSchema: ingredientsSchema,
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
