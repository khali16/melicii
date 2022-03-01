import { Box, Button, TextField } from "@material-ui/core";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addComment } from "../../../../../redux/recipes-slice";
import styles from "./NewComment.module.css";

interface Props {
  title: string;
}

const NewComment: React.FC<Props> = ({ title }) => {
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();
  const author = localStorage.getItem("user");
  const submitHandler = () => {
    if (author) {
      dispatch(addComment({ title, author, comment }));
    }
    setComment("");
  };
  return (
    <Box className={styles.newCommentContainer}>
      <TextField
        variant="outlined"
        size="medium"
        fullWidth
        placeholder="Add comment"
        value={comment}
        onChange={(e) => setComment(e.currentTarget.value)}
      />
      <Button
        variant="outlined"
        className={styles.submitButton}
        disabled={comment === ""}
        onClick={submitHandler}
      >
        Add comment
      </Button>
    </Box>
  );
};

export default NewComment;
