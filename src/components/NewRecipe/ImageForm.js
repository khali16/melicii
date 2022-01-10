import { useState } from "react";
import { CardContent, Fab, Button, Grid, Box } from "@material-ui/core";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import { useStyles } from "../UI/Logo/Styles";
import { useHistory } from "react-router";
import { useForm } from "../../store/form-context";
import { useAuth } from "../../store/auth-context";
import styles from "./ImageForm.module.css";

//TO-DO refactor

const ImageForm = () => {
  const classes = useStyles();
  const history = useHistory();
  const [img, setImg] = useState();
  const { firstForm, secondForm, thirdForm } = useForm();
  const { addRecipe } = useAuth();

  const uploadHandler = (event) => {
    setImg(URL.createObjectURL(event.currentTarget.files[0]));
  };

  const data = { ...firstForm, ...secondForm, ...thirdForm };

  const submitHandler = () => {
    addRecipe(data, img);
    console.log(data);
    history.push("/");
  };

  return (
    <>
      <CardContent>
        <Grid container justifyContent="center" alignItems="center">
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
        <Box className={styles.box}>
          <img src={img} alt="" />
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
