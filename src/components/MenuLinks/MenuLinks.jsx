import React from "react";
import Swal from "sweetalert2";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export default function BasicMenu() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

function newFundraiserForm(){
  history.push('/newFundraiser');
  handleClose()
}

function archivedOrganizations(){
  history.push('/archivedOrganizations');
  handleClose()
}
function logOut(){
  Swal.fire({
    title: "Are you sure you want to Logout?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, Logout",
  }).then((result) => {
    if (result.isConfirmed) {
      dispatch({ type: "LOGOUT" });
      Swal.fire("Logged out!");
    }
  });
  handleClose()
}

  return isSmallScreen ? (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MenuIcon />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={newFundraiserForm}>New Fundraiser</MenuItem>
        <MenuItem onClick={archivedOrganizations}>Archived Organizations</MenuItem>
        <MenuItem onClick={logOut}>Logout</MenuItem>
      </Menu>
    </div>
  ) : null;
}
