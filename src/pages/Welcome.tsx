import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import LogInModal from "../components/LogIn/LogInModal";
import SignupModal from "../components/Signup/SignupModal";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: "space-between",
    overflowX: "auto",
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));

const Welcome = () => {
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openSignupModal, setOpenSignupModal] = useState(false);
  const classes = useStyles();

  const openLoginModalHandler = () => {
    setOpenLoginModal(true);
  };
  const closeLoginModalHandler = () => {
    setOpenLoginModal(false);
  };
  const openSignupModalHandler = () => {
    setOpenSignupModal(true);
  };
  const closeSignupModalHandler = () => {
    setOpenSignupModal(false);
  };

  return (
    <>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h3" component="h4" align="right">
          Melici Recipes
        </Typography>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          Melicii Recipes
        </Typography>
        <Button
          variant="outlined"
          size="small"
          style={{ marginRight: "10px" }}
          onClick={openLoginModalHandler}
        >
          Log in
        </Button>
        <Button
          variant="outlined"
          size="small"
          onClick={openSignupModalHandler}
        >
          Sign up
        </Button>
      </Toolbar>
      <LogInModal
        openModal={openLoginModal}
        closeModal={closeLoginModalHandler}
      />
      <SignupModal
        openModal={openSignupModal}
        closeModal={closeSignupModalHandler}
      />
    </>
  );
};

export default Welcome;
