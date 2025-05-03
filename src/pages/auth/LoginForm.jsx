import React, { useState } from "react";
import { TextField, Button, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:3001/users");
      const users = await response.json();

      const user = users.find(
        (u) => u.username === username && u.password === password
      );

      if (user) {
        
        localStorage.setItem("userId", user.id);
        console.log("Login berhasil", user);
        navigate("/"); 
      } else {
        setError("Username atau password salah");
      }
    } catch (err) {
      console.error("Error saat login:", err);
      setError("Terjadi kesalahan, coba lagi nanti.");
    }
  };

  return (
    <>
      {error && (
        <Alert severity="error" style={{ marginBottom: "1rem" }}>
          {error}
        </Alert>
      )}

      <TextField
        fullWidth
        margin="normal"
        label="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <TextField
        fullWidth
        margin="normal"
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button
        variant="contained"
        color="primary"
        fullWidth
        style={{ marginTop: "1rem", backgroundColor: "#123458" }}
        onClick={handleLogin}
      >
        Login
      </Button>
    </>
  );
}

export default LoginForm;
