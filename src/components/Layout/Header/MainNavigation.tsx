import { Button, Grid, makeStyles, Toolbar } from "@material-ui/core";
import { useState } from "react";
import { Link } from "react-router-dom";
import LogInModal from "../../LogIn/LogInModal";
import SignupModal from "../../Signup/SignupModal";
import HeaderLogo from "../../UI/Logo/HeaderLogo";
import Menu from "./Menu/DropdownMenu";

//TO-DO: refactor
const MainNavigation = () => {
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
        <Link to="/">
          <HeaderLogo />
        </Link>
        <Menu />
        <Grid container justifyContent="flex-end">
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

export default MainNavigation;
