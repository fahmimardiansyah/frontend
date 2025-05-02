// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { AuthProvider } from "./context/AuthContext"; // Import AuthProvider

import theme from "./theme"; // pastikan file ini ada

import Header from "./components/Header";
import Footer from "./components/Footer";  // Import Footer
import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";
import CustomerPage from "./pages/CustomerPage";
import TransactionPage from "./pages/TransactionPage";
import ProfilePage from "./pages/ProfilePage"; // Halaman Profil

function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/customers" element={<CustomerPage />} />
            <Route path="/transactions" element={<TransactionPage />} />
            <Route path="/profile" element={<ProfilePage />} /> {/* Route untuk Profil */}
          </Routes>
          <Footer />
        </Router>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
