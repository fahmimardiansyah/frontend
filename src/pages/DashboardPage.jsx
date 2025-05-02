import React from "react";
import { Container, Typography, Paper } from "@mui/material";

function DashboardPage() {
  return (
    <Container>
      <Paper elevation={3} style={{ padding: "2rem", marginTop: "2rem" }}>
        <Typography variant="h4" gutterBottom>
          Selamat Datang di Dashboard
        </Typography>
        <Typography>
          Ini adalah sistem pembelian paket data. Gunakan menu di atas untuk navigasi.
        </Typography>
      </Paper>
    </Container>
  );
}

export default DashboardPage;
