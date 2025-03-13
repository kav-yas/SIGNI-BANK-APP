import React from "react";
import { Link } from "react-router-dom";
import { Container, Typography, Button, Box } from "@mui/material";

const Home = () => {
  return (
    <Container maxWidth="md" sx={{ textAlign: "center", mt: 10 }}>
      <Typography variant="h3" gutterBottom>
        Welcome to Our Banking System
      </Typography>
      <Typography variant="h6" color="textSecondary">
        Secure, Fast & Reliable Banking for Everyone.
      </Typography>
      <Box sx={{ mt: 4 }}>
        <Button variant="contained" color="primary" component={Link} to="/signup">
          Open an Account
        </Button>
        <Button variant="outlined" color="secondary" component={Link} to="/login" sx={{ ml: 2 }}>
          Login
        </Button>
      </Box>
    </Container>
  );
};

export default Home;
