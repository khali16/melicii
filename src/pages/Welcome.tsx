import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";
import LogInModal from "../components/LogIn/LogInModal";
import SignupModal from "../components/Signup/SignupModal";
import HeaderLogo from "../components/UI/Logo/HeaderLogo";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid #F5D175`,
    height: "60px !important",
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
        <HeaderLogo />
        <Grid container justify="flex-end">
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
        </Grid>
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
