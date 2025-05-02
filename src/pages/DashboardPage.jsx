import React from "react";
import {
  Box,
  Button,
  Grid,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import CustomerList from "../components/Customer/CustomerList";
import TransactionList from "../components/Transaction/TransactionList";

function DashboardPage() {
  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundColor: "#123458",
          py: { xs: 8, md: 12 },
          px: { xs: 10, md: 6 },
        }}
      >
        <Grid container alignItems="center" spacing={4}>
          {/* Kiri - Teks */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h2"
              sx={{ fontWeight: "bold", mb: 2, color: "white" }}
            >
              <span
                style={{
                  textDecoration: "underline",
                  textDecorationColor: "#fffff",
                  textDecorationThickness: "6px",
                }}
              >
                Selamat
              </span>{" "}
              datang di DATAin
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, color: "white" }}>
              Amet nunc diam orci duis ut sit diam arcu, nec. Eleifend proin
              massa tincidunt viverra lectus pulvinar. Nunc ipsum est
              pellentesque turpis ultricies.
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
              >
                Log in
              </Button>
            </Box>
          </Grid>
          <Grid container spacing={2}>
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
                  src="/images/Teacher.png" // Ganti dengan path gambar yang diinginkan
                  alt="Second Illustration"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Box>

      {/* Customer & Transaction List Section */}
      <Box sx={{ px: { xs: 2, md: 6 }, py: 6 }}>
        <Grid
          container
          spacing={4}
          justifyContent="center"
          alignItems="stretch"
        >
          {/* Customer List Card */}
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                p: 2,
                borderRadius: "16px",
                boxShadow: 3,
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold" }}>
                  Customers
                </Typography>
                <CustomerList />
              </CardContent>
            </Card>
          </Grid>

          {/* Transaction List Card */}
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                p: 2,
                borderRadius: "16px",
                boxShadow: 3,
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold" }}>
                  Transactions
                </Typography>
                <TransactionList />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default DashboardPage;
