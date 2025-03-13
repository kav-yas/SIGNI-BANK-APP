import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Button,
  Box,
} from "@mui/material";

const EmployeeDashboard = () => {
  const [requests, setRequests] = useState([]);
  const [accounts, setAccounts] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [searchAccount, setSearchAccount] = useState("");

  useEffect(() => {
    // Load customer service requests
    const savedRequests = localStorage.getItem("customerRequests");
    if (savedRequests) {
      setRequests(JSON.parse(savedRequests));
    }

    // Load customer accounts
    const savedAccounts = localStorage.getItem("customerAccounts");
    if (savedAccounts) {
      setAccounts(JSON.parse(savedAccounts));
    }

    // Load transactions
    const savedTransactions = localStorage.getItem("customerTransactions");
    if (savedTransactions) {
      setTransactions(JSON.parse(savedTransactions));
    }
  }, []);

  // Filter accounts based on search
  const filteredAccounts = accounts.filter((account) =>
    account.username.toLowerCase().includes(searchAccount.toLowerCase())
  );

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f4f6f9",
        padding: "40px",
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h4" gutterBottom sx={{ color: "#002244", fontWeight: "bold", textAlign: "center" }}>
          Employee Dashboard
        </Typography>

        {/* Manage Customer Requests */}
        <Typography variant="h5" sx={{ mt: 4, mb: 2, color: "#002244", fontWeight: "bold" }}>
          Manage Customer Requests
        </Typography>
        {requests.length > 0 ? (
          <TableContainer component={Paper} sx={{ border: "1px solid #d1d9e6", mt: 3 }}>
            <Table>
              <TableHead sx={{ backgroundColor: "#002244" }}>
                <TableRow>
                  <TableCell sx={{ color: "white", fontWeight: "bold" }}>Username</TableCell>
                  <TableCell sx={{ color: "white", fontWeight: "bold" }}>Service Type</TableCell>
                  <TableCell sx={{ color: "white", fontWeight: "bold" }}>Description</TableCell>
                  <TableCell sx={{ color: "white", fontWeight: "bold" }}>Status</TableCell>
                  <TableCell sx={{ color: "white", fontWeight: "bold" }}>Timestamp</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {requests.map((request) => (
                  <TableRow key={request.id}>
                    <TableCell>{request.username}</TableCell>
                    <TableCell>{request.serviceType}</TableCell>
                    <TableCell>{request.description}</TableCell>
                    <TableCell>{request.status}</TableCell>
                    <TableCell>{new Date(request.timestamp).toLocaleString()}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <Typography variant="h6" sx={{ textAlign: "center", mt: 2, color: "#555" }}>
            No customer requests available.
          </Typography>
        )}

        {/* View Account Details */}
        <Typography variant="h5" sx={{ mt: 4, mb: 2, color: "#002244", fontWeight: "bold" }}>
          View Account Details
        </Typography>
        <TextField
          label="Search by Username"
          variant="outlined"
          fullWidth
          value={searchAccount}
          onChange={(e) => setSearchAccount(e.target.value)}
          sx={{ mb: 2 }}
        />
        {filteredAccounts.length > 0 ? (
          <TableContainer component={Paper} sx={{ border: "1px solid #d1d9e6", mt: 2 }}>
            <Table>
              <TableHead sx={{ backgroundColor: "#002244" }}>
                <TableRow>
                  <TableCell sx={{ color: "white", fontWeight: "bold" }}>Username</TableCell>
                  <TableCell sx={{ color: "white", fontWeight: "bold" }}>Account Number</TableCell>
                  <TableCell sx={{ color: "white", fontWeight: "bold" }}>Balance</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredAccounts.map((account) => (
                  <TableRow key={account.accountNumber}>
                    <TableCell>{account.username}</TableCell>
                    <TableCell>{account.accountNumber}</TableCell>
                    <TableCell>{account.balance}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <Typography variant="h6" sx={{ textAlign: "center", mt: 2, color: "#555" }}>
            No matching accounts found.
          </Typography>
        )}

        {/* View All Transactions */}
        <Typography variant="h5" sx={{ mt: 4, mb: 2, color: "#002244", fontWeight: "bold" }}>
          View All Transactions
        </Typography>
        {transactions.length > 0 ? (
          <TableContainer component={Paper} sx={{ border: "1px solid #d1d9e6", mt: 2 }}>
            <Table>
              <TableHead sx={{ backgroundColor: "#002244" }}>
                <TableRow>
                  <TableCell sx={{ color: "white", fontWeight: "bold" }}>Transaction ID</TableCell>
                  <TableCell sx={{ color: "white", fontWeight: "bold" }}>Username</TableCell>
                  <TableCell sx={{ color: "white", fontWeight: "bold" }}>Amount</TableCell>
                  <TableCell sx={{ color: "white", fontWeight: "bold" }}>Type</TableCell>
                  <TableCell sx={{ color: "white", fontWeight: "bold" }}>Date</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {transactions.map((transaction) => (
                  <TableRow key={transaction.id}>
                    <TableCell>{transaction.id}</TableCell>
                    <TableCell>{transaction.username}</TableCell>
                    <TableCell>{transaction.amount}</TableCell>
                    <TableCell>{transaction.type}</TableCell>
                    <TableCell>{new Date(transaction.date).toLocaleString()}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <Typography variant="h6" sx={{ textAlign: "center", mt: 2, color: "#555" }}>
            No transactions available.
          </Typography>
        )}
      </Container>
    </Box>
  );
};

export default EmployeeDashboard;
