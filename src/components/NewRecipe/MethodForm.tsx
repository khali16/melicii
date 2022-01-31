import { Button, Card, CardContent, TextField } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { FieldArray, Form, FormikProvider, useFormik } from "formik";
import React from "react";
import { theme } from "../UI/Logo/Styles";
import CardHeader from "@material-ui/core/CardHeader";
import { useForm } from "../../store/form-context";
import styles from "./MethodForm.module.css";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import { methodSchema } from "./ValidationSchemas/MethodValidation";

interface Props {
  nextStep: () => void;
}

const MethodForm: React.FC<Props> = ({ nextStep }) => {
  const { setThirdForm } = useForm();

  const handleSubmit = () => {
    formik.handleSubmit();
  };

  const formik = useFormik({
    initialValues: {
      steps: [{ step: "" }, { step: "" }],
    },
    onSubmit: (values) => {
      setThirdForm(values);
      nextStep();
    },
    validationSchema: methodSchema,
  });

  return (
    <>
      <Card className={styles.card}>
        <CardHeader>Add Recipe</CardHeader>
        <CardContent>
          <ThemeProvider theme={theme}>
            <FormikProvider value={formik}>
              <Form onSubmit={formik.handleSubmit}>
                <div>
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
                              className={styles.stepInput}
                              multiline
                              minRows={2}
                              fullWidth
                            />
                            {formik.values.steps.length > 2 && (
                              <DeleteIcon
                                type="button"
                                onClick={() => arrayHelpers.remove(index)}
                                className={styles.deleteIcon}
                              >
                                -
                              </DeleteIcon>
                            )}
                          </div>
                        ))}
                        <AddIcon
                          type="button"
                          onClick={() =>
                            arrayHelpers.push({
                              step: "",
                            })
                          }
                          className={styles.addIcon}
                        >
                          +
                        </AddIcon>
                      </div>
                    )}
                  />
                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={styles.submitButton}
                    onClick={handleSubmit}
                    type="button"
                  >
                    Next Step
                  </Button>
                </div>
              </Form>
            </FormikProvider>
          </ThemeProvider>
        </CardContent>
      </Card>
    </>
  );
};

export default MethodForm;
