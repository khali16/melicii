import { Box } from "@material-ui/core";
import styles from "./Comment.module.css";
import FaceIcon from "@mui/icons-material/Face";

interface Props {
  author: string;
  comment: string;
}

const Comment: React.FC<Props> = ({ author, comment }) => {
  return (
    <Box className={styles.commentContainer}>
      <Box className={styles.author}>
        <FaceIcon className={styles.icon} />
        <span>{author}</span>
      </Box>
      <Box className={styles.comment}>
        <span>{comment}</span>
      </Box>
    </Box>
  );
};

export default Comment;
