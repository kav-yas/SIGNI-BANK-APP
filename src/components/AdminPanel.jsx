import React, { useEffect, useState } from "react";
import { Container, Typography, Button, Grid, Card, CardContent } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AdminPanel = () => {
  const navigate = useNavigate();
  const [adminName, setAdminName] = useState("");

  useEffect(() => {
    // Fetch admin details (dummy data for now)
    const storedName = localStorage.getItem("adminName") || "Admin";
    setAdminName(storedName);
  }, []);

  return (
    <Container maxWidth="lg" style={{ marginTop: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Welcome, {adminName} 👋
      </Typography>
      <Typography variant="h6" color="textSecondary" gutterBottom>
        Manage all users, transactions, employees, and system settings.
      </Typography>

      {/* Admin Functionalities */}
      <Grid container spacing={3} style={{ marginTop: "20px" }}>
        {/* Manage Customers */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6">Manage Customers</Typography>
              <Typography variant="body2" color="textSecondary">
                View, activate/deactivate customer accounts, and reset passwords.
              </Typography>
              <Button variant="contained" color="primary" style={{ marginTop: "10px" }} onClick={() => navigate("/manage-customers")}>
                Manage Customers
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Manage Employees */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6">Manage Employees</Typography>
              <Typography variant="body2" color="textSecondary">
                Add, edit, or remove employees.
              </Typography>
              <Button variant="contained" color="primary" style={{ marginTop: "10px" }} onClick={() => navigate("/manage-employees")}>
                Manage Employees
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* View Transactions */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6">View Transactions</Typography>
              <Typography variant="body2" color="textSecondary">
                Monitor all transactions made by users.
              </Typography>
              <Button variant="contained" color="primary" style={{ marginTop: "10px" }} onClick={() => navigate("/transactions")}>
                View Transactions
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* System Settings */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6">System Settings</Typography>
              <Typography variant="body2" color="textSecondary">
                Manage banking policies, loan interest rates, and services.
              </Typography>
              <Button variant="contained" color="primary" style={{ marginTop: "10px" }} onClick={() => navigate("/settings")}>
                System Settings
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AdminPanel;
