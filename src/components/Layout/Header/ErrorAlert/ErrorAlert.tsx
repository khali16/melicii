import { useState } from "react";
import Alert from "@mui/material/Alert";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";
import styles from "./ErrorAlert.module.css";
import IconButton from "@mui/material/IconButton";
import { Box } from "@mui/material";

const ErrorAlert = () => {
  const [open, setOpen] = useState(true);

  return (
    <Box className={styles.box}>
      <Collapse in={open}>
        <Alert
          severity="error"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              data-testid="button"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          Sorry couldn't log you in...
        </Alert>
      </Collapse>
    </Box>
  );
};

export default ErrorAlert;
