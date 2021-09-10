import React from "react";
import { Card, CardHeader, CardContent, Fab, Button } from "@material-ui/core";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import { useStyles } from "../UI/Logo/Styles";
import { useFormik } from "formik";

const ImageForm = () => {
  const classes = useStyles();
  return (
    <>
      <Card style={{ maxWidth: "700px", margin: "auto", marginTop: "20px" }}>
        <CardHeader>Add Recipe</CardHeader>
        <CardContent>
          <form>
            <input
              accept="image/*"
              style={{ display: "none" }}
              id="contained-button-file"
              multiple
              type="image"
            />
            <label htmlFor="contained-button-file">
              <Fab component="span" style={{ color: "#117777", margin: 10 }}>
                <AddPhotoAlternateIcon style={{ margin: "auto" }} />
              </Fab>
            </label>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              type="submit"
            >
              Check form
            </Button>
          </form>
        </CardContent>
      </Card>
    </>
  );
};

export default ImageForm;
