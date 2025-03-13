import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { TextField, Button, MenuItem, Typography, Container, Paper, Grid, Alert } from "@mui/material";

const Login = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    identifier: "",
    password: "",
    role: "Customer",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(""); // Reset error before new request

    try {
      const response = await axios.post("http://localhost:8080/auth/login", {
        identifier: credentials.identifier,
        password: credentials.password,
      });

      if (response.data.message === "Login Successful!") {
        localStorage.setItem("token", response.data.token || ""); // If token exists
        localStorage.setItem("userRole", response.data.role); // Store role from backend

        // Navigate based on role received from backend
        if (response.data.role === "Admin") navigate("/admin");
        else if (response.data.role === "Employee") navigate("/employee");
        else navigate("/dashboard");
      } else {
        throw new Error("Invalid response from server.");
      }
    } catch (error) {
      setErrorMessage(error.response?.data?.message || "Login failed. Please check your credentials.");
    }
  };

  return (
    <Container component="main" maxWidth="sm">
      <Paper elevation={3} sx={{ padding: "20px", marginTop: "30px" }}>
        <Typography variant="h5" align="center">Login</Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Username or Email"
                name="identifier"
                value={credentials.identifier}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Password"
                name="password"
                type="password"
                value={credentials.password}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                select
                fullWidth
                label="Select Role"
                name="role"
                value={credentials.role}
                onChange={handleChange}
                required
              >
                <MenuItem value="Customer">Customer</MenuItem>
                <MenuItem value="Employee">Employee</MenuItem>
                <MenuItem value="Admin">Admin</MenuItem>
              </TextField>
            </Grid>
            {errorMessage && (
              <Grid item xs={12}>
                <Alert severity="error">{errorMessage}</Alert>
              </Grid>
            )}
            <Grid item xs={12}>
              <Button type="submit" fullWidth variant="contained" color="primary">
                Login
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Login;
