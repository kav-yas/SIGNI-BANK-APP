// customer support
import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  MenuItem,
  Box,
} from "@mui/material";

const Customersupport = () => {
  const [username, setUsername] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [description, setDescription] = useState("");
  const [requests, setRequests] = useState([]);

  const serviceOptions = [
    "Account Issue",
    "Transaction Problem",
    "Loan Inquiry",
    "Card Services",
    "Other",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !serviceType || !description) {
      alert("Please fill in all fields");
      return;
    }

    const newRequest = {
      id: Date.now(),
      username,
      serviceType,
      description,
      status: "Pending",
      timestamp: new Date().toISOString(),
    };

    const updatedRequests = [...requests, newRequest];
    setRequests(updatedRequests);
    localStorage.setItem("customerRequests", JSON.stringify(updatedRequests));

    // Clear fields after submission
    setUsername("");
    setServiceType("");
    setDescription("");

    alert("Request submitted successfully!");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f4f6f9",
        padding: "40px",
      }}
    >
      <Container maxWidth="sm">
        <Paper sx={{ padding: 4, borderRadius: 2 }}>
          <Typography variant="h4" gutterBottom sx={{ color: "#002244", fontWeight: "bold", textAlign: "center" }}>
            Customer Support Request
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Username"
              variant="outlined"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              sx={{ mb: 2 }}
              required
            />
            <TextField
              fullWidth
              select
              label="Service Type"
              variant="outlined"
              value={serviceType}
              onChange={(e) => setServiceType(e.target.value)}
              sx={{ mb: 2 }}
              required
            >
              {serviceOptions.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              fullWidth
              label="Description"
              variant="outlined"
              multiline
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              sx={{ mb: 3 }}
              required
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Submit Request
            </Button>
          </form>
        </Paper>
      </Container>
    </Box>
  );
};

// ✅ **This is the ONLY `export default` statement**
export default Customersupport;
