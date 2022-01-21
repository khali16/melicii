import { Button, Grid, Toolbar } from "@material-ui/core";
import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../../store/auth-context";
import LogInModal from "../../LogIn/LogInModal";
import SignupModal from "../../Signup/SignupModal";
import HeaderLogo from "../../UI/Logo/HeaderLogo";
import Menu from "./Menu/DropdownMenu";
import styles from "./MainNavigation.module.css";
import ErrorAlert from "./ErrorAlert/ErrorAlert";

//TO-DO: refactor
const MainNavigation = () => {
  const { logoutHandler, user, rejectedLogin } = useAuth();
  useEffect(() => {}, [user, rejectedLogin]);
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openSignupModal, setOpenSignupModal] = useState(false);
  const history = useHistory();

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
      <Toolbar className={styles.toolbar}>
        <Link to="/">
          <HeaderLogo />
        </Link>
        <Menu />
        {rejectedLogin && <ErrorAlert />}
        <Grid container justifyContent="flex-end">
          {user ? (
            <>
              <Button
                variant="outlined"
                size="small"
                className={styles.buttonMargin}
                onClick={() => history.push("/new-recipe")}
              >
                Add Recipe
              </Button>
              <Button variant="outlined" size="small" onClick={logoutHandler}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button
                variant="outlined"
                size="small"
                className={styles.buttonMargin}
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
            </>
          )}
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
