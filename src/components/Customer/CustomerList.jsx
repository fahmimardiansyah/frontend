import React, { useEffect, useState } from "react";
import CustomerForm from "./CustomerForm";
import { Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

function CustomerList() {
  const [customers, setCustomers] = useState([]);
  const [editingCustomer, setEditingCustomer] = useState(null);

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    const res = await fetch("http://localhost:3001/customers");
    const data = await res.json();
    setCustomers(data);
  };

  const handleDelete = async (id) => {
    await fetch(`http://localhost:3001/customers/${id}`, { method: "DELETE" });
    fetchCustomers();
  };

  const handleEdit = (customer) => {
    setEditingCustomer(customer);
  };

  return (
    <Box sx={{ padding: 3 }}>
      <CustomerForm refresh={fetchCustomers} editingCustomer={editingCustomer} setEditingCustomer={setEditingCustomer} />

      <TableContainer component={Paper} sx={{ marginTop: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Nama</strong></TableCell>
              <TableCell><strong>Nomor HP</strong></TableCell>
              <TableCell><strong>Actions</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.map((cust) => (
              <TableRow key={cust.id}>
                <TableCell>{cust.name}</TableCell>
                <TableCell>{cust.phone}</TableCell>
                <TableCell>
                  <Button variant="outlined" color="primary" onClick={() => handleEdit(cust)} sx={{ marginRight: 1 }}>
                    Edit
                  </Button>
                  <Button variant="outlined" color="error" onClick={() => handleDelete(cust.id)}>
                    Hapus
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default CustomerList;
