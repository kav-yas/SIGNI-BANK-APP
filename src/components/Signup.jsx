import React, { useState } from "react";
import axios from "axios";
import { 
  TextField, Button, MenuItem, Grid, Typography, 
  Container, Paper, Alert
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    aadhaar: "",
    pan: "",
    dob: "",
    address: "",
    accountType: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const validate = () => {
    let tempErrors = {};
    if (formData.username.trim().length < 4) tempErrors.username = "Username must be at least 4 characters";
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) tempErrors.email = "Enter a valid email";
    if (!/^[6-9]\d{9}$/.test(formData.phone)) tempErrors.phone = "Phone number must be 10 digits starting with 6-9";
    if (!/^[2-9]\d{11}$/.test(formData.aadhaar)) tempErrors.aadhaar = "Aadhaar must be 12 digits, not start with 0 or 1";
    if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(formData.pan)) tempErrors.pan = "PAN format: 5 letters, 4 numbers, 1 letter";
    if (formData.password.length < 6) tempErrors.password = "Password must be at least 6 characters";
    if (!formData.accountType) tempErrors.accountType = "Select an account type";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    if (name === "pan") value = value.toUpperCase();
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const response = await axios.post("http://localhost:8080/auth/signup", formData);
      setSuccessMessage("Signup Successful! Redirecting...");
      setTimeout(() => navigate("/login"), 2000);
    } catch (error) {
      setErrorMessage(error.response?.data?.message || "Signup failed. Try again.");
    }
  };

  return (
    <Container component="main" maxWidth="md">
      <Paper elevation={3} sx={{ padding: "30px", marginTop: "20px" }}>
        <Typography variant="h4" align="center" gutterBottom>Create Your Bank Account</Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField fullWidth label="Username" name="username" value={formData.username} onChange={handleChange} error={!!errors.username} helperText={errors.username} required />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField fullWidth label="Email" name="email" value={formData.email} onChange={handleChange} error={!!errors.email} helperText={errors.email} required />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField fullWidth label="Phone Number" name="phone" value={formData.phone} onChange={handleChange} error={!!errors.phone} helperText={errors.phone} required />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField fullWidth label="Aadhaar Number" name="aadhaar" value={formData.aadhaar} onChange={handleChange} error={!!errors.aadhaar} helperText={errors.aadhaar} required />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField fullWidth label="PAN Card Number" name="pan" value={formData.pan} onChange={handleChange} error={!!errors.pan} helperText={errors.pan} required />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField fullWidth label="Date of Birth" name="dob" type="date" value={formData.dob} onChange={handleChange} required InputLabelProps={{ shrink: true }} />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField fullWidth label="Address" name="address" value={formData.address} onChange={handleChange} error={!!errors.address} helperText={errors.address} required />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField select fullWidth label="Account Type" name="accountType" value={formData.accountType} onChange={handleChange} error={!!errors.accountType} helperText={errors.accountType} required>
                <MenuItem value="Savings">Savings Account</MenuItem>
                <MenuItem value="Current">Current Account</MenuItem>
                <MenuItem value="Salary">Salary Account</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Password" name="password" type="password" value={formData.password} onChange={handleChange} error={!!errors.password} helperText={errors.password} required />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" fullWidth variant="contained" color="primary">Signup</Button>
            </Grid>
            {successMessage && <Grid item xs={12}><Alert severity="success">{successMessage}</Alert></Grid>}
            {errorMessage && <Grid item xs={12}><Alert severity="error">{errorMessage}</Alert></Grid>}
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Signup;
