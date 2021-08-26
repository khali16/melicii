import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import LogIn from "../components/LogIn/LogIn";
import Modal from "@material-ui/core/Modal";
import LogInModal from "../components/LogIn/LogInModal";

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
  const [openModal, setOpenModal] = useState(false);
  const classes = useStyles();

  const openModalHandler = () => {
    setOpenModal(true);
  };
  const closeModalHandler = () => {
    setOpenModal(false);
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
          onClick={openModalHandler}
        >
          Log in
        </Button>
        <Button variant="outlined" size="small">
          Sign up
        </Button>
      </Toolbar>
      <LogInModal openModal={openModal} closeModal={closeModalHandler} />
    </>
  );
};

export default Welcome;
