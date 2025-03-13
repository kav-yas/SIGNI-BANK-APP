import React, { useEffect, useState } from "react";
import { Container, Typography, Button, Grid, Card, CardContent } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [customerName, setCustomerName] = useState("");

  useEffect(() => {
    // Fetch customer details (dummy data for now)
    const storedName = localStorage.getItem("customerName") || "User";
    setCustomerName(storedName);
  }, []);

  return (
    <Container maxWidth="lg" style={{ marginTop: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Welcome, {customerName} 👋
      </Typography>
      <Typography variant="h6" color="textSecondary" gutterBottom>
        Manage your account, transactions, payments, and more.
      </Typography>

      {/* Customer Functionalities */}
      <Grid container spacing={3} style={{ marginTop: "20px" }}>
        
        {/* View Account Details */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6">View Account Details</Typography>
              <Typography variant="body2" color="textSecondary">
                Check your account balance, number, and type.
              </Typography>
              <Button variant="contained" color="primary" style={{ marginTop: "10px" }} onClick={() => navigate("/account-details")}>
                View Details
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* View Transaction History */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6">Transaction History</Typography>
              <Typography variant="body2" color="textSecondary">
                View all past transactions.
              </Typography>
              <Button variant="contained" color="primary" style={{ marginTop: "10px" }} onClick={() => navigate("/transactions")}>
                View Transactions
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Make Payments & Transfers */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6">Make a Payment</Typography>
              <Typography variant="body2" color="textSecondary">
                Transfer funds to other accounts.
              </Typography>
              <Button variant="contained" color="primary" style={{ marginTop: "10px" }} onClick={() => navigate("/payments")}>
                Transfer Money
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Apply for Loans */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6">Apply for a Loan</Typography>
              <Typography variant="body2" color="textSecondary">
                Request personal, home, or car loans.
              </Typography>
              <Button variant="contained" color="primary" style={{ marginTop: "10px" }} onClick={() => navigate("/loans")}>
                Apply Now
              </Button>
            </CardContent>
          </Card>
        </Grid>



        {/* Request Customer Support */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6">Customer Support</Typography>
              <Typography variant="body2" color="textSecondary">
                Raise complaints or queries.
              </Typography>
              <Button variant="contained" color="primary" style={{ marginTop: "10px" }} onClick={() => navigate("/customer-support")}>
                Get Support
              </Button>
            </CardContent>
          </Card>
        </Grid>

      </Grid>
    </Container>
  );
};

export default Dashboard;
