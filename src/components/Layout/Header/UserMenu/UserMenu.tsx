import { Tooltip } from "@material-ui/core";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import Logout from "@mui/icons-material/Logout";
import React, { useState } from "react";
import { paperProps } from "./paperProps";
import DinnerDiningIcon from "@mui/icons-material/DinnerDining";
import AddIcon from "@mui/icons-material/Add";
import styles from "./UserMenu.module.css";
import { useHistory } from "react-router";
import { useAuth } from "../../../../store/auth-context";

const UserMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const history = useHistory();
  const { logoutHandler } = useAuth();
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    logoutHandler();
    history.push("/");
  };
  return (
    <>
      <Tooltip title="Account settings">
        <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
          <Avatar sx={{ width: 32, height: 32 }} />
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={paperProps}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem
          onClick={() => history.push("/userRecipes")}
          data-testid="test"
        >
          <DinnerDiningIcon className={styles.dinnerIcon} /> My recipes
        </MenuItem>
        <MenuItem onClick={() => history.push("/new-recipe")}>
          <AddIcon className={styles.addIcon} /> Add recipe
        </MenuItem>
        <Divider />
        <MenuItem onClick={logout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
};

export default UserMenu;
