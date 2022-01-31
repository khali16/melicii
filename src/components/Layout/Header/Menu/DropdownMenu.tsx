import { Button, Typography } from "@material-ui/core";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import styles from "./DropdownMenu.module.css";
import { useStyles } from "../../../styles/Themes";
import { useHistory } from "react-router-dom";

const DropdownMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const history = useHistory();
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
        onClick={handleClose}
        className={classes.menu}
      >
        <MenuItem onClick={() => history.push("/type/breakfast")}>
          Breakfast
        </MenuItem>
        <MenuItem onClick={() => history.push("/type/lunch")}>Lunch</MenuItem>
        <MenuItem onClick={() => history.push("/type/dinner")}>Dinner</MenuItem>
        <MenuItem onClick={() => history.push("/type/dessert")}>
          Dessert
        </MenuItem>
      </Menu>
    </>
  );
};

export default DropdownMenu;
