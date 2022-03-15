import { useState } from "react";
import { Button, Box, TextField } from "@material-ui/core";
import { useHistory } from "react-router";
import styles from "./ImageForm.module.css";
import useNewRecipe from "../../../hooks/useNewRecipe";

const ImageForm = () => {
  const history = useHistory();
  const [pictureUrl, setPictureUrl] = useState();
  const { addNewRecipe } = useNewRecipe(pictureUrl);

  const uploadHandler = (event) => {
    setPictureUrl(event.currentTarget.value);
  };

  const cancelImgHandler = () => {
    setPictureUrl();
  };

  const submitHandler = () => {
    addNewRecipe();
    history.push("/");
  };

  return (
    <>
      {!pictureUrl && (
        <TextField
          type="url"
          variant="outlined"
          onChange={uploadHandler}
          className={styles.urlInput}
          label="urlInput"
          id="urlInput"
        />
      )}
      {pictureUrl && (
        <>
          <Box className={styles.box}>
            <img src={pictureUrl} alt="" />
          </Box>
          <Box className={styles.buttonsContainer}>
            <Button
              variant="contained"
              color="primary"
              className={styles.cancelButton}
              onClick={cancelImgHandler}
            >
              CANCEL
            </Button>
            <Button
              variant="contained"
              color="primary"
              className={styles.confirmButton}
              onClick={submitHandler}
            >
              POST
            </Button>
          </Box>
        </>
      )}
    </>
  );
};

export default ImageForm;
