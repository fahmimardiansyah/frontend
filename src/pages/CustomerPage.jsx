// src/pages/CustomerPage.jsx
import React from "react";
import CustomerList from "../components/Customer/CustomerList";

function CustomerPage() {
  return (
    <div style={{ padding: "2rem" }}>
      <h2>Daftar Customer</h2>
      <CustomerList />
    </div>
  );
}

export default CustomerPage;
