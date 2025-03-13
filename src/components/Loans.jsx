import React, { useState } from "react";
import { Container, Typography, Card, CardContent, Button, Grid, Box } from "@mui/material";

const loanOptions = [
  {
    type: "Home Loan",
    interestRate: "7.5% per annum",
    tenure: "Up to 30 years",
    eligibility: [
      "Minimum age: 21 years",
      "Maximum age: 60 years (salaried) / 65 years (self-employed)",
      "Minimum annual income: ₹3,00,000",
      "Stable employment for at least 2 years"
    ],
    documents: [
      "Identity Proof (Aadhaar, PAN, Passport, etc.)",
      "Address Proof",
      "Income Proof (Salary Slip / ITR)",
      "Property Documents"
    ]
  },
  {
    type: "Car Loan",
    interestRate: "8.0% per annum",
    tenure: "Up to 7 years",
    eligibility: [
      "Minimum age: 21 years",
      "Maximum age: 65 years",
      "Minimum annual income: ₹2,50,000",
      "Stable employment or business"
    ],
    documents: [
      "Identity Proof (Aadhaar, PAN, Passport, etc.)",
      "Address Proof",
      "Salary Slip / Bank Statements",
      "Car Quotation from Dealer"
    ]
  },
  {
    type: "Personal Loan",
    interestRate: "10.5% per annum",
    tenure: "Up to 5 years",
    eligibility: [
      "Minimum age: 21 years",
      "Maximum age: 60 years",
      "Minimum annual income: ₹3,50,000",
      "Good credit score (700+)"
    ],
    documents: [
      "Identity Proof (Aadhaar, PAN, Passport)",
      "Address Proof",
      "Salary Slip / ITR",
      "Bank Statement (last 6 months)"
    ]
  }
];

const Loans = () => {
  const [selectedLoan, setSelectedLoan] = useState(null);

  return (
    <Container maxWidth="lg" sx={{ textAlign: "center", marginTop: 5 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Loan Options
      </Typography>
      <Typography variant="h6" color="textSecondary" sx={{ marginBottom: 4 }}>
        Choose from a variety of loan options based on your needs.
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {loanOptions.map((loan, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                textAlign: "left",
                boxShadow: 3,
                borderRadius: 3,
                height: "100%", // Ensures all cards have the same height
                transition: "0.3s",
                backgroundColor: selectedLoan?.type === loan.type ? "#E3F2FD" : "white",
                "&:hover": { boxShadow: 6 }
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h5" sx={{ fontWeight: "bold", color: "#1976D2" }}>
                  {loan.type}
                </Typography>
                <Typography variant="body1" sx={{ marginTop: 1 }}>
                  <strong>Interest Rate:</strong> {loan.interestRate}
                </Typography>
                <Typography variant="body1">
                  <strong>Tenure:</strong> {loan.tenure}
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: "bold", marginTop: 2 }}>
                  Eligibility:
                </Typography>
                <ul>
                  {loan.eligibility.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                  Required Documents:
                </Typography>
                <ul>
                  {loan.documents.map((doc, i) => (
                    <li key={i}>{doc}</li>
                  ))}
                </ul>
              </CardContent>
              <Button
                variant="contained"
                fullWidth
                sx={{
                  marginTop: "auto", // Pushes the button to the bottom
                  backgroundColor: selectedLoan?.type === loan.type ? "#0D47A1" : "#1565C0",
                  "&:hover": { backgroundColor: selectedLoan?.type === loan.type ? "#0B3C85" : "#0D47A1" }
                }}
                onClick={() => setSelectedLoan(loan)}
              >
                Apply for {loan.type}
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>

      {selectedLoan && (
        <Box
          sx={{
            marginTop: 5,
            padding: 3,
            backgroundColor: "#f4f6f9",
            borderRadius: 2,
            boxShadow: 3,
            textAlign: "center"
          }}
        >
          <Typography variant="h5">
            You are applying for a <strong>{selectedLoan.type}</strong>
          </Typography>
          <Typography variant="body1" sx={{ marginTop: 2 }}>
            Our bank will review your application and contact you shortly.
          </Typography>
          <Button
            variant="contained"
            sx={{ marginTop: 2, backgroundColor: "green", "&:hover": { backgroundColor: "#1B5E20" } }}
            onClick={() => alert("Loan application submitted!")}
          >
            Confirm Application
          </Button>
        </Box>
      )}
    </Container>
  );
};

export default Loans;
