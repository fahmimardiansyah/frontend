import React from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  Box,
  Badge,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import NotificationsIcon from "@mui/icons-material/Notifications";

function Header() {
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");

  const handleLogout = () => {
    localStorage.removeItem("userId");
    navigate("/login"); 
  };

  return (
    <AppBar
      position="sticky"
      sx={{ backgroundColor: "#fc8428", color: "#fff", padding: "16px 0" }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          DATAin
        </Typography>


        <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
          <Button color="inherit" component={Link} to="/" sx={{ fontSize: 16, textTransform: "none" }}>
            Dashboard
          </Button>
          <Button color="inherit" component={Link} to="/customers" sx={{ fontSize: 16, textTransform: "none" }}>
            Customers
          </Button>
          <Button color="inherit" component={Link} to="/transactions" sx={{ fontSize: 16, textTransform: "none" }}>
            Transactions
          </Button>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Badge badgeContent={4} color="error">
            <NotificationsIcon sx={{ color: "#fff", marginRight: 2 }} />
          </Badge>
          {userId ? (
            <Button onClick={handleLogout} sx={{ fontSize: 16, color: "#fff", fontWeight: "bold", textTransform: "none" }}>
              Logout
            </Button>
          ) : (
            <Button component={Link} to="/login" sx={{ fontSize: 16, color: "#fff", fontWeight: "bold", textTransform: "none" }}>
              Login
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
