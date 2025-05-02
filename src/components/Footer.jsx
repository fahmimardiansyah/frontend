import React from "react";
import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        color: "#123458",
        textAlign: "center",
        padding: "1rem",
        marginTop: "auto", // Agar footer berada di bawah
      }}
    >
      <Typography variant="body2">
        &copy; {new Date().getFullYear()} Fahmi Mardiansyah. All rights reserved.
      </Typography>
    </Box>
  );
}

export default Footer;
