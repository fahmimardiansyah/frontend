import React from "react";
import {
  Box,
  Button,
  Grid,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import CustomerList from "../components/Customer/CustomerList";
import TransactionList from "../components/Transaction/TransactionList";

function DashboardPage() {
  const navigate = useNavigate();

  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundColor: "#123458",
          py: { xs: 8, md: 12 },
          px: { xs: 12, md: 12 },
        }}
      >
        <Grid container alignItems="center" spacing={30}>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h2"
              sx={{ fontWeight: "bold", mb: 2, color: "white" }}
            >
              <span
                style={{
                  textDecoration: "underline",
                  textDecorationColor: "#ffffff",
                  textDecorationThickness: "6px",
                }}
              >
                Selamat
              </span>{" "}
              datang di DATAin
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, color: "white" }}>
              Amet nunc diam orci duis ut sit diam arcu, nec. Eleifend proin
              massa tincidunt viverra lectus pulvinar.
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#f97316",
                  color: "#fff",
                  px: 4,
                  py: 1.5,
                  borderRadius: "12px",
                }}
                onClick={() => navigate("/login")}
              >
                Log in
              </Button>
            </Box>
          </Grid>

          <Grid container spacing={10}>
            <Grid item xs={12} md={6}>
              <Box sx={{ textAlign: "center" }}>
                <img
                  src="/images/Student.png"
                  alt="Hero Illustration"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box sx={{ textAlign: "center" }}>
                <img
                  src="/images/Teacher.png"
                  alt="Second Illustration"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Box>

      {/* Transaction List Banner Style */}
      <Box
        sx={{
          backgroundColor: "#fc8428",
          py: { xs: 4, md: 8 },
          px: { xs: 4, md: 6 },
          textAlign: "center",
          boxShadow: "inset 0 -4px 10px rgba(0,0,0,0.1)",
        }}
      >
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", mb: 4, color: "white" }}
        >
          Recent Transactions
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={8}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                p: 2,
                borderRadius: "16px",
                boxShadow: 3,
                backgroundColor: "white",
              }}
            >
              <CardContent>
                <TransactionList />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Customer List Banner Style */}
      <Box
        sx={{
          backgroundColor: "#123458",
          py: { xs: 4, md: 8 },
          px: { xs: 4, md: 6 },
          textAlign: "center",
          boxShadow: "inset 0 -4px 10px rgba(0,0,0,0.1)",
        }}
      >
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", mb: 4, color: "white" }}
        >
          Our Customers
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={8}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                p: 2,
                borderRadius: "16px",
                boxShadow: 3,
                backgroundColor: "white",
              }}
            >
              <CardContent>
                <CustomerList />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default DashboardPage;
