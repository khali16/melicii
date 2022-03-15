import { Button, Grid, Toolbar } from "@material-ui/core";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../store/auth-context";
import LogInModal from "../../LogIn/LogInModal";
import SignupModal from "../../Signup/SignupModal";
import HeaderLogo from "../../UI/Logo/HeaderLogo/HeaderLogo";
import Menu from "./Menu/DropdownMenu";
import styles from "./MainNavigation.module.css";
import ErrorAlert from "./ErrorAlert/ErrorAlert";
import UserMenu from "./UserMenu/UserMenu";

const MainNavigation = () => {
  const { user, rejectedLogin, isUserLoggedIn } = useAuth();
  useEffect(() => {}, [user, rejectedLogin, isUserLoggedIn]);
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openSignupModal, setOpenSignupModal] = useState(false);

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
          {isUserLoggedIn ? (
            <>
              <UserMenu />
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
