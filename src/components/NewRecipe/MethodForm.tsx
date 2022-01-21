import { Button, Card, CardContent, TextField } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { FieldArray, Form, FormikProvider, useFormik } from "formik";
import React from "react";
import { theme, useStyles } from "../UI/Logo/Styles";
import * as Yup from "yup";
import CardHeader from "@material-ui/core/CardHeader";
import { useForm } from "../../store/form-context";
import styles from "./MethodForm.module.css";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

interface Props {
  nextStep: () => void;
}
//TO-DO: refactor
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
    validationSchema: schema,
  });

  return (
    <>
      <Card className={styles.card}>
        <CardHeader style={{ color: "red" }}>Add Recipe</CardHeader>
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
                    className={classes.submit}
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
