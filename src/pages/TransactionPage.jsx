import React from "react";
import TransactionList from "../components/Transaction/TransactionList";

function TransactionPage() {
  return (
    <div style={{ padding: "2rem" }}>
      <h2>Daftar Transaksi</h2>
      <TransactionList />
    </div>
  );
}

export default TransactionPage;
