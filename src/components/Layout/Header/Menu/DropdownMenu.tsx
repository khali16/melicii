import { Button, Typography } from "@material-ui/core";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import styles from "./DropdownMenu.module.css";
import { useStyles } from "../../../styles/Themes";
import { Link } from "react-router-dom";

const DropdownMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const classes = useStyles();

  return (
    <>
      <Button className={styles.menuButton} onClick={handleClick}>
        <Typography variant="h6" className={styles.buttonText}>
          RECIPES
        </Typography>
        <ArrowDropDownIcon className={styles.icon} />
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        className={classes.menu}
      >
        <Link to="/type/breakfast" className={styles.link}>
          <MenuItem onClick={handleClose}>Breakfast</MenuItem>
        </Link>
        <Link to="/type/lunch" className={styles.link}>
          <MenuItem onClick={handleClose}>Lunch</MenuItem>
        </Link>
        <Link to="/type/dinner" className={styles.link}>
          <MenuItem onClick={handleClose}>Dinner</MenuItem>
        </Link>
        <Link to="/type/dessert" className={styles.link}>
          <MenuItem onClick={handleClose}>Dessert</MenuItem>
        </Link>
      </Menu>
    </>
  );
};

export default DropdownMenu;
