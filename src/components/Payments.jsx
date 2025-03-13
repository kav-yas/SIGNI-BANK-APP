//payments
import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Paper,
  Grid,
  Alert,
} from "@mui/material";
import PaymentIcon from "@mui/icons-material/Payment";
import { styled } from "@mui/system";

const FullscreenContainer = styled(Container)({
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#f8f9fa",
});

const FormPaper = styled(Paper)({
  padding: "30px",
  width: "100%",
  maxWidth: "500px",
  textAlign: "center",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
});

const Payments = () => {
  const [paymentData, setPaymentData] = useState({
    recipientName: "",
    accountNumber: "",
    ifscCode: "",
    amount: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "accountNumber") {
      // Ensure only numeric values
      if (/^\d*$/.test(value)) {
        setPaymentData({ ...paymentData, [name]: value });
      }
    } else if (name === "ifscCode") {
      // Convert IFSC to uppercase
      setPaymentData({ ...paymentData, [name]: value.toUpperCase() });
    } else {
      setPaymentData({ ...paymentData, [name]: value });
    }
  };

  const validate = () => {
    let tempErrors = {};

    if (!/^[a-zA-Z\s]{3,}$/.test(paymentData.recipientName)) {
      tempErrors.recipientName = "Enter a valid name (min 3 letters)";
    }

    if (!/^\d{10,18}$/.test(paymentData.accountNumber)) {
      tempErrors.accountNumber = "Account number must be 10-18 digits";
    }

    if (!/^[A-Z]{4}0\d{6}$/.test(paymentData.ifscCode)) {
      tempErrors.ifscCode = "Invalid IFSC format (e.g., HDFC0123456)";
    }

    if (!/^\d+(\.\d{1,2})?$/.test(paymentData.amount) || Number(paymentData.amount) <= 0) {
      tempErrors.amount = "Enter a valid amount greater than 0";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSuccessMessage("Payment Successful!");
      setPaymentData({ recipientName: "", accountNumber: "", ifscCode: "", amount: "" });

      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
    }
  };

  return (
    <FullscreenContainer maxWidth={false}>
      <FormPaper elevation={3}>
        <PaymentIcon style={{ fontSize: 50, color: "#004d99" }} />
        <Typography variant="h5" gutterBottom>
          Transfer Money
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Recipient Name"
                name="recipientName"
                value={paymentData.recipientName}
                onChange={handleChange}
                error={!!errors.recipientName}
                helperText={errors.recipientName}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Account Number"
                name="accountNumber"
                value={paymentData.accountNumber}
                onChange={handleChange}
                error={!!errors.accountNumber}
                helperText={errors.accountNumber}
                required
                type="text"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="IFSC Code"
                name="ifscCode"
                value={paymentData.ifscCode}
                onChange={handleChange}
                error={!!errors.ifscCode}
                helperText={errors.ifscCode}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Amount"
                name="amount"
                value={paymentData.amount}
                onChange={handleChange}
                error={!!errors.amount}
                helperText={errors.amount}
                required
                type="text"
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Transfer Money
              </Button>
            </Grid>

            {successMessage && (
              <Grid item xs={12}>
                <Alert severity="success">{successMessage}</Alert>
              </Grid>
            )}
          </Grid>
        </form>
      </FormPaper>
    </FullscreenContainer>
  );
};

export default Payments;
