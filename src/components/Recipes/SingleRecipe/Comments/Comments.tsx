import { Box, Divider, ThemeProvider, Typography } from "@material-ui/core";
import styles from "./Comments.module.css";
import { theme } from "../../../UI/Logo/Styles";
import Comment from "./Comment/Comment";
import NewComment from "./NewComment/NewComment";
import { useEffect } from "react";

interface Props {
  comments: {
    author: string;
    comment: string;
  }[];
  title: string;
}

const Comments: React.FC<Props> = ({ comments, title }) => {
  useEffect(() => {}, [comments]);
  return (
    <Box className={styles.commentsContainer}>
      <ThemeProvider theme={theme}>
        <Typography className={styles.text} variant="h3">
          Comments
        </Typography>
        <Divider className={styles.divider} />
        {comments.map((comment, index) => (
          <Comment
            key={index}
            author={comment.author}
            comment={comment.comment}
          />
        ))}
        <NewComment title={title} />
      </ThemeProvider>
    </Box>
  );
};

export default Comments;
