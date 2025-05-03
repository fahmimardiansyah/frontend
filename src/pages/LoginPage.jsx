import React from "react";
import { Container, Paper, Typography } from "@mui/material";
import LoginForm from "./auth/LoginForm";

function LoginPage() {
  return (
    <Container maxWidth="xs">
      <Paper elevation={3} style={{ padding: "2rem", marginTop: "4rem" }}>
        <Typography variant="h5" gutterBottom>
          Login
        </Typography>
        <LoginForm />
      </Paper>
    </Container>
  );
}

export default LoginPage;
