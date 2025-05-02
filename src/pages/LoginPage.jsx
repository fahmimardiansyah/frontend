import React, { useState } from "react";
import { TextField, Button, Paper, Container, Typography, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";  // Untuk navigasi setelah login

function Login() {
  const [customerId, setCustomerId] = useState(""); // Menggunakan ID pelanggan
  const [error, setError] = useState("");  // Untuk menyimpan pesan error jika login gagal
  const navigate = useNavigate(); // Hook untuk navigasi setelah login berhasil

  const handleLogin = async () => {
    try {
      // Ambil data pelanggan dari db.json
      const response = await fetch("http://localhost:3001/customers");
      const data = await response.json();

      // Periksa apakah ada pelanggan dengan ID yang cocok
      const customer = data.customers.find(
        (cust) => cust.id === customerId
      );

      if (customer) {
        // Jika login berhasil, simpan customerId dan redirect ke dashboard
        console.log("Login berhasil", customer);
        navigate("/"); // Arahkan ke halaman Dashboard setelah login berhasil
      } else {
        // Jika login gagal
        setError("ID pelanggan tidak ditemukan");
      }
    } catch (error) {
      console.error("Error saat login:", error);
      setError("Terjadi kesalahan, coba lagi nanti.");
    }
  };

  return (
    <Container maxWidth="xs">
      <Paper elevation={3} style={{ padding: "2rem", marginTop: "4rem" }}>
        <Typography variant="h5" gutterBottom>
          Login
        </Typography>

        {error && (
          <Alert severity="error" style={{ marginBottom: "1rem" }}>
            {error}
          </Alert>
        )}

        <TextField
          fullWidth
          margin="normal"
          label="Customer ID"
          value={customerId}
          onChange={(e) => setCustomerId(e.target.value)}
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
      </Paper>
    </Container>
  );
}

export default Login;
