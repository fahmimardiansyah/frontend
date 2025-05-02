import React from "react";
import { Box, Typography } from "@mui/material";

function ProfilePage() {
  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: 2 }}>
        Profil Pengguna
      </Typography>
      <Typography variant="body1">Nama: John Doe</Typography>
      <Typography variant="body1">Email: johndoe@example.com</Typography>
      {/* Tambahkan informasi lainnya di sini */}
    </Box>
  );
}

export default ProfilePage;
