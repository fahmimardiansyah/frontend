import React, { useEffect, useState } from "react";
import { Box, Button, TextField } from "@mui/material";

function CustomerForm({ refresh, editingCustomer, setEditingCustomer }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    if (editingCustomer) {
      setName(editingCustomer.name);
      setPhone(editingCustomer.phone);
    } else {
      setName("");
      setPhone("");
    }
  }, [editingCustomer]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const customer = { name, phone };

    if (editingCustomer) {
      // UPDATE
      await fetch(`http://localhost:3001/customers/${editingCustomer.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(customer),
      });
      setEditingCustomer(null);
    } else {
      // CREATE
      await fetch("http://localhost:3001/customers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(customer),
      });
    }

    setName("");
    setPhone("");
    refresh();
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
      <Box sx={{ display: "flex", gap: 2 }}>
        <TextField
          label="Nama"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          fullWidth
        />
        <TextField
          label="Nomor HP"
          variant="outlined"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          fullWidth
        />
      </Box>

      <Box sx={{ marginTop: 2 }}>
        <Button type="submit" variant="contained" color="primary">
          {editingCustomer ? "Update" : "Tambah"}
        </Button>
        {editingCustomer && (
          <Button
            variant="outlined"
            color="secondary"
            sx={{ marginLeft: 2 }}
            onClick={() => setEditingCustomer(null)}
          >
            Batal
          </Button>
        )}
      </Box>
    </form>
  );
}

export default CustomerForm;
