import React, { useEffect, useState } from "react";
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
  Box,
} from "@mui/material";

const CustomerRequest = ({ isEmployeeView }) => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    try {
      const savedRequests = localStorage.getItem("customerRequests");
      if (savedRequests) {
        const parsedRequests = JSON.parse(savedRequests);
        setRequests(parsedRequests);
      }
    } catch (error) {
      console.error("Error parsing customer requests:", error);
      setRequests([]);
    }
  }, []);

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
          {isEmployeeView ? "Manage Customer Requests" : "Customer Service Requests"}
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
                {requests.map((request, index) => (
                  <TableRow key={index}>
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
          <Typography variant="h6" sx={{ textAlign: "center", marginTop: "20px", color: "#555" }}>
            No service requests available.
          </Typography>
        )}
      </Container>
    </Box>
  );
};

export default CustomerRequest;
