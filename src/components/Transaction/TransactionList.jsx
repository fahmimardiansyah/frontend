import React, { useState } from "react";
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Typography, Container } from "@mui/material";

function TransactionList() {
  const [transactions, setTransactions] = useState([
    { 
      id: 1, 
      customerName: "John Doe", 
      packageName: "Paket 10GB", 
      quota: "10GB", 
      price: 100000, 
      status: "Sukses", 
      createdBy: "Admin A", 
      customerId: 1,
      customerPhone: "081234567890",
      transactionTime: "2025-05-01 10:00:00"
    },
    { 
      id: 2, 
      customerName: "Jane Smith", 
      packageName: "Paket 20GB", 
      quota: "20GB", 
      price: 200000, 
      status: "Pending", 
      createdBy: "Admin B", 
      customerId: 2,
      customerPhone: "082345678901",
      transactionTime: "2025-05-01 11:00:00"
    },
    { 
        id: 1, 
        customerName: "John Doe", 
        packageName: "Paket 10GB", 
        quota: "10GB", 
        price: 100000, 
        status: "Sukses", 
        createdBy: "Admin A", 
        customerId: 1,
        customerPhone: "081234567890",
        transactionTime: "2025-05-01 10:00:00"
      },
      { 
        id: 2, 
        customerName: "Jane Smith", 
        packageName: "Paket 20GB", 
        quota: "20GB", 
        price: 200000, 
        status: "Pending", 
        createdBy: "Admin B", 
        customerId: 2,
        customerPhone: "082345678901",
        transactionTime: "2025-05-01 11:00:00"
      },
      { 
        id: 1, 
        customerName: "John Doe", 
        packageName: "Paket 10GB", 
        quota: "10GB", 
        price: 100000, 
        status: "Sukses", 
        createdBy: "Admin A", 
        customerId: 1,
        customerPhone: "081234567890",
        transactionTime: "2025-05-01 10:00:00"
      },
      { 
        id: 2, 
        customerName: "Jane Smith", 
        packageName: "Paket 20GB", 
        quota: "20GB", 
        price: 200000, 
        status: "Pending", 
        createdBy: "Admin B", 
        customerId: 2,
        customerPhone: "082345678901",
        transactionTime: "2025-05-01 11:00:00"
      }, 
      { 
        id: 1, 
        customerName: "John Doe", 
        packageName: "Paket 10GB", 
        quota: "10GB", 
        price: 100000, 
        status: "Sukses", 
        createdBy: "Admin A", 
        customerId: 1,
        customerPhone: "081234567890",
        transactionTime: "2025-05-01 10:00:00"
      },
      { 
        id: 2, 
        customerName: "Jane Smith", 
        packageName: "Paket 20GB", 
        quota: "20GB", 
        price: 200000, 
        status: "Pending", 
        createdBy: "Admin B", 
        customerId: 2,
        customerPhone: "082345678901",
        transactionTime: "2025-05-01 11:00:00"
      }
  ]);

  const [customers, setCustomers] = useState([
    { id: 1, name: "John Doe", phone: "081234567890" },
    { id: 2, name: "Jane Smith", phone: "082345678901" }
  ]);

  const [open, setOpen] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);

  const handleDetailClick = (trx) => {
    setSelectedTransaction(trx);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = async (id) => {

    const filteredTransactions = transactions.filter((trx) => trx.id !== id);
    setTransactions(filteredTransactions);
  };

  return (
    <Box sx={{ py: 4 }}>

      <Container>
        <Grid container spacing={2}>
          {transactions.map((trx) => {
            const customer = customers.find((customer) => customer.id === trx.customerId);

            return (
              <Grid item xs={12} sm={6} md={4} key={trx.id}>
                <Box sx={{ borderRadius: "12px", boxShadow: 3, p: 2, display: "flex", flexDirection: "column" }}>
                  <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                    {customer ? customer.name : "Customer Tidak Ditemukan"}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 1 }}>
                    Telepon: {customer ? customer.phone : "-"}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 1 }}>
                    Paket: {trx.packageName} ({trx.quota})
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 2 }}>
                    Harga: Rp{trx.price} - Status: {trx.status}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 2 }}>
                    <strong>Admin:</strong> {trx.createdBy || "Tidak Diketahui"}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ borderRadius: "8px", textTransform: "none", mb: 1 }}
                    onClick={() => handleDetailClick(trx)}
                  >
                    Lihat Detail
                  </Button>
                  <Button
                    variant="outlined"
                    color="error"
                    sx={{ borderRadius: "8px", textTransform: "none" }}
                    onClick={() => handleDelete(trx.id)}
                  >
                    Hapus
                  </Button>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Container>


      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>Detail Transaksi</DialogTitle>
        <DialogContent>
          {selectedTransaction && (
            <Box>
              <Typography variant="body1"><strong>Nama Customer:</strong> {selectedTransaction.customerName}</Typography>
              <Typography variant="body1"><strong>Telepon Customer:</strong> {selectedTransaction.customerPhone}</Typography>
              <Typography variant="body1"><strong>Paket:</strong> {selectedTransaction.packageName} ({selectedTransaction.quota})</Typography>
              <Typography variant="body1"><strong>Harga:</strong> Rp{selectedTransaction.price}</Typography>
              <Typography variant="body1"><strong>Status:</strong> {selectedTransaction.status}</Typography>
              <Typography variant="body1"><strong>Waktu Transaksi:</strong> {selectedTransaction.transactionTime}</Typography>
              <Typography variant="body1"><strong>Admin:</strong> {selectedTransaction.createdBy || "Tidak Diketahui"}</Typography>
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Tutup
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default TransactionList;
