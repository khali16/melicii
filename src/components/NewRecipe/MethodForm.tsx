import {
  Button,
  Card,
  CardContent,
  CardHeader,
  TextField,
} from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { FieldArray, Form, FormikProvider, useFormik } from "formik";
import React from "react";
import { theme, useStyles } from "../UI/Logo/Styles";
import * as Yup from "yup";

interface Props {
  nextStep: () => void;
}

const MethodForm: React.FC<Props> = ({ nextStep }) => {
  const classes = useStyles();

  const schema = Yup.object().shape({
    steps: Yup.array()
      .of(
        Yup.object().shape({
          step: Yup.string().required("Wybierz"),
        })
      )
      .required("Add step")
      .min(2, "At least 2 steps"),
  });

  const handleSubmit = () => {
    formik.handleSubmit();
  };

  const formik = useFormik({
    initialValues: {
      steps: [{ step: "" }],
    },
    onSubmit: (values) => {
      console.log(values);
      nextStep();
    },
    validationSchema: schema,
  });

  return (
    <>
      <FormikProvider value={formik}>
        <Form>
          <Card
            style={{ maxWidth: "700px", margin: "auto", marginTop: "20px" }}
          >
            <CardHeader>Add Recipe</CardHeader>
            <CardContent>
              <ThemeProvider theme={theme}>
                <div className={classes.inputs}>
                  <FieldArray
                    name="steps"
                    render={(arrayHelpers) => (
                      <div>
                        {formik.values.steps.map((step, index) => (
                          <div key={index}>
                            <TextField
                              id={`steps[${index}].step`}
                              value={step.step}
                              onChange={formik.handleChange}
                              label="STEP"
                              required
                              variant="outlined"
                              margin="normal"
                              fullWidth
                              multiline
                              minRows={2}
                              style={{
                                width: "130%",
                                marginRight: "100px",
                              }}
                            />
                            {formik.values.steps.length > 1 && (
                              <button
                                type="button"
                                onClick={() => arrayHelpers.remove(index)}
                              >
                                -
                              </button>
                            )}
                            <button
                              type="button"
                              onClick={() =>
                                arrayHelpers.push({
                                  step: "",
                                })
                              }
                            >
                              +
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  />
                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={handleSubmit}
                  >
                    Next Step
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

export default MethodForm;
