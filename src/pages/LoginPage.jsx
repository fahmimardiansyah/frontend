import React from "react";
import { TextField, Button, Paper, Container, Typography } from "@mui/material";

function Login() {
  return (
    <Container maxWidth="xs">
      <Paper elevation={3} style={{ padding: "2rem", marginTop: "4rem" }}>
        <Typography variant="h5" gutterBottom>Login</Typography>
        <TextField fullWidth margin="normal" label="Username" />
        <TextField fullWidth margin="normal" label="Password" type="password" />
        <Button variant="contained" color="primary" fullWidth style={{ marginTop: "1rem", backgroundColor: "#123458"}}>
          Login
        </Button>
      </Paper>
    </Container>
  );
}

export default Login;
