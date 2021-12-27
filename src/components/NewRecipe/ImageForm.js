import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Fab,
  Button,
  Grid,
  Box,
} from "@material-ui/core";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import { useStyles } from "../UI/Logo/Styles";
import { useFormik } from "formik";
import { useHistory } from "react-router";

const ImageForm = () => {
  const classes = useStyles();
  const history = useHistory();
  const [img, setImg] = useState();

  const uploadHandler = (event) => {
    setImg(URL.createObjectURL(event.currentTarget.files[0]));
  };

  const submitHandler = () => {
    history.push("/");
  };

  return (
    <>
      <CardContent>
        <Grid container justify="center" alignItems="center">
          <input
            accept="image/*"
            id="contained-button-file"
            multiple
            type="file"
            style={{ display: "none" }}
            onChange={uploadHandler}
          />
          <label htmlFor="contained-button-file">
            <Fab component="span">
              <AddPhotoAlternateIcon style={{ color: "#117777" }} />
            </Fab>
          </label>
        </Grid>
        <Box style={{ margin: "auto", width: "70%", marginTop: "20px" }}>
          <img src={img} />
        </Box>
        {img && (
          <Box style={{ margin: "auto", width: "30%" }}>
            <Button
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={submitHandler}
              fullWidth
            >
              POST
            </Button>
          </Box>
        )}
      </CardContent>
    </>
  );
};

export default ImageForm;
