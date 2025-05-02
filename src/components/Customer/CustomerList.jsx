// src/components/Customer/CustomerList.jsx
import React, { useEffect, useState } from "react";
import CustomerForm from "./CustomerForm";

function CustomerList() {
  const [customers, setCustomers] = useState([]);
  const [editingCustomer, setEditingCustomer] = useState(null);

  // Ambil data dari API
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
    <div>
      <CustomerForm refresh={fetchCustomers} editingCustomer={editingCustomer} setEditingCustomer={setEditingCustomer} />

      <ul>
        {customers.map((cust) => (
          <li key={cust.id}>
            {cust.name} - {cust.phone}
            <button onClick={() => handleEdit(cust)}>Edit</button>
            <button onClick={() => handleDelete(cust.id)}>Hapus</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CustomerList;
