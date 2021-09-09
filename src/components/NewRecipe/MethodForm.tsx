import {
  Button,
  Card,
  CardContent,
  CardHeader,
  TextField,
} from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { FieldArray, FormikProvider, useFormik } from "formik";
import React from "react";
import { theme, useStyles } from "../UI/Logo/Styles";

interface Props {
  nextStep: () => void;
}

const MethodForm: React.FC<Props> = ({ nextStep }) => {
  const classes = useStyles();

  const formik = useFormik({
    initialValues: {
      steps: [{ step: "" }],
    },
    onSubmit: (values) => console.log(values),
  });

  return (
    <>
      <FormikProvider value={formik}>
        <Card style={{ maxWidth: "700px", margin: "auto", marginTop: "20px" }}>
          <CardHeader>Add Recipe</CardHeader>
          <CardContent>
            <ThemeProvider theme={theme}>
              <div className={classes.inputs}>
                <form>
                  <FieldArray
                    name="steps"
                    render={(arrayHelpers) => (
                      <div>
                        {formik.values.steps.map((_, index) => (
                          <div key={index}>
                            <TextField
                              id={`steps[${index}].step`}
                              value={formik.values.steps[index].step}
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
                    type="submit"
                  >
                    Check form
                  </Button>
                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={nextStep}
                  >
                    Next Step
                  </Button>
                </form>
              </div>
            </ThemeProvider>
          </CardContent>
        </Card>
      </FormikProvider>
    </>
  );
};

export default MethodForm;
