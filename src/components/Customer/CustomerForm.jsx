// src/components/Customer/CustomerForm.jsx
import React, { useEffect, useState } from "react";

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
      <input
        placeholder="Nama"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        placeholder="Nomor HP"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      <button type="submit">{editingCustomer ? "Update" : "Tambah"}</button>
      {editingCustomer && (
        <button onClick={() => setEditingCustomer(null)}>Batal</button>
      )}
    </form>
  );
}

export default CustomerForm;
