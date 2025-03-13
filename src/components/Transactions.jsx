import React from "react";
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
} from "@mui/material";

const transactions = [
  { id: 1, type: "Credit", amount: 5000, date: "2025-03-12" },
  { id: 2, type: "Debit", amount: 2000, date: "2025-03-10" },
];

const Transactions = () => {
  return (
    <Container maxWidth="md" style={{ minHeight: "100vh", paddingTop: "20px" }}>
      <Typography variant="h4" align="center" gutterBottom>
        Transaction History
      </Typography>
      <TableContainer component={Paper} style={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)" }}>
        <Table>
          <TableHead style={{ backgroundColor: "#004d99" }}>
            <TableRow>
              <TableCell style={{ color: "white" }}>Transaction ID</TableCell>
              <TableCell style={{ color: "white" }}>Type</TableCell>
              <TableCell style={{ color: "white" }}>Amount</TableCell>
              <TableCell style={{ color: "white" }}>Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell>{transaction.id}</TableCell>
                <TableCell>{transaction.type}</TableCell>
                <TableCell>{transaction.amount}</TableCell>
                <TableCell>{transaction.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Transactions;
