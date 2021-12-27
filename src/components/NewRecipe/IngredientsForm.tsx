import React from "react";
import { useFormik, FormikProvider, FieldArray, Formik, Form } from "formik";
import {
  TextField,
  MenuItem,
  Card,
  CardHeader,
  CardContent,
  Button,
} from "@material-ui/core";
import { useStyles, theme } from "../UI/Logo/Styles";
import { ThemeProvider } from "@material-ui/styles";
import * as Yup from "yup";

interface Props {
  nextStep: () => void;
}

const IngredientsForm: React.FC<Props> = ({ nextStep }) => {
  const classes = useStyles();

  const schema = Yup.object().shape({
    ingredients: Yup.array()
      .of(
        Yup.object().shape({
          amount: Yup.number().required("wybierz"),
          measure: Yup.string().required("wybierz"),
          ingredient: Yup.string().required("wybierz"),
        })
      )
      .required("Must have ingredients")
      .min(3, "At least 3 ingredients"),
  });

  const formik = useFormik({
    initialValues: {
      ingredients: [{ amount: 0, measure: "", ingredient: "" }],
    },
    onSubmit: (values) => {
      console.log(values);
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
        <Form>
          <Card
            style={{ maxWidth: "700px", margin: "auto", marginTop: "20px" }}
          >
            <CardHeader>Add at least 3 ingredients </CardHeader>
            <CardContent>
              <ThemeProvider theme={theme}>
                <div className={classes.inputs}>
                  <FieldArray
                    name="ingredients"
                    render={(arrayHelpers) => (
                      <div>
                        {formik.values.ingredients.length > 0 &&
                          formik.values.ingredients.map((ingredient, index) => (
                            <div key={index}>
                              <TextField
                                required
                                type="number"
                                label="Amount"
                                variant="outlined"
                                margin="normal"
                                name={`ingredients[${index}].amount`}
                                value={ingredient.amount}
                                onChange={formik.handleChange}
                              />
                              <TextField
                                required
                                label="Measure"
                                variant="outlined"
                                margin="normal"
                                name={`ingredients[${index}].measure`}
                                value={ingredient.measure}
                                onChange={formik.handleChange}
                                select
                              >
                                <MenuItem value="cup">Cup</MenuItem>
                                <MenuItem value="tablespoon">
                                  Tablespoon
                                </MenuItem>
                                <MenuItem value="kilo">Kilo</MenuItem>
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
                              {formik.values.ingredients.length > 1 && (
                                <button
                                  type="button"
                                  onClick={() => arrayHelpers.remove(index)}
                                >
                                  -
                                </button>
                              )}
                            </div>
                          ))}
                        <button
                          type="button"
                          onClick={() =>
                            arrayHelpers.push({
                              amount: 0,
                              measure: "",
                              ingredient: "",
                            })
                          }
                        >
                          +
                        </button>
                      </div>
                    )}
                  />{" "}
                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={handleSubmit}
                    type="submit"
                  >
                    ten klinij
                  </Button>
                </div>
              </ThemeProvider>
            </CardContent>
          </Card>
        </Form>
      </FormikProvider>
    </>
  );
};

export default IngredientsForm;
