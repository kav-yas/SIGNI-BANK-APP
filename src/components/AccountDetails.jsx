import React from "react";

const AccountDetails = () => {
  const user = {
    name: "Amit Sharma",
    email: "amit.sharma@example.com",
    phone: "+91 98765 43210",
    aadhaar: "1234-5678-9012",
    pan: "ABCDE1234F",
    balance: "₹1,25,000",
    accountType: "Savings Account", // Fetch this dynamically from the backend
  };

  return (
    <div style={styles.container}>
      <h2>Account Details</h2>
      <div style={styles.card}>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Aadhaar:</strong> {user.aadhaar}</p>
        <p><strong>PAN:</strong> {user.pan}</p>
        <p><strong>Account Type:</strong> {user.accountType}</p>
        <p><strong>Balance:</strong> {user.balance}</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    textAlign: "center",
  },
  card: {
    padding: "20px",
    backgroundColor: "#f3f3f3",
    borderRadius: "10px",
    display: "inline-block",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  },
};

export default AccountDetails;
