import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";

// importing navigate to navigate on logout
import { useNavigate } from "react-router-dom";
import useAuth from "../context/authContext";

export default function ButtonAppBar() {
  //useNavigate to logout
  const Navigate = useNavigate();
  const { logout } = useAuth();

  // logout functionality
  const handleSubmit = async (e) => {
    e.preventDefault();
    logout();
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <Button onClick={handleSubmit} color="inherit">
            LOGOUT
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
