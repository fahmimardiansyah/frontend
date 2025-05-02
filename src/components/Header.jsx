import React from "react";
import { AppBar, Toolbar, Button, Typography, Box, Badge } from "@mui/material";
import { Link } from "react-router-dom";
import NotificationsIcon from "@mui/icons-material/Notifications"; // Import ikon notifikasi

function Header() {
  return (
    <AppBar
      position="sticky"
      sx={{ backgroundColor: "#fc8428", color: "#fff",  padding: "16px 0",  }} // Ubah sesuai warna yang diinginkan
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        {/* Bagian Judul Website */}
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          DATAin
        </Typography>

        {/* Bagian Tombol-Tombol Menu */}
        <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
          <Button color="inherit" component={Link} to="/" sx={{ fontSize: "16px", fontWeight: "light", textTransform: "none" }}>
            Dashboard
          </Button>
          <Button color="inherit" component={Link} to="/customers" sx={{ fontSize: "16px", fontWeight: "light", textTransform: "none" }}>
            Customers
          </Button>
          <Button color="inherit" component={Link} to="/transactions" sx={{ fontSize: "16px", fontWeight: "light", textTransform: "none" }}>
            Transactions
          </Button>
        </Box>

        {/* Tombol Notifikasi dan Login */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {/* Ikon Notifikasi */}
          <Badge badgeContent={4} color="error"> {/* Menampilkan jumlah notifikasi */}
            <NotificationsIcon sx={{ color: "#fff", marginRight: 2 }} />
          </Badge>
          {/* Tombol Login */}
          <Button color="inherit" component={Link} to="/login" sx={{ fontSize: "16px", fontWeight: "bold", textTransform: "none" }}>
            Login
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
