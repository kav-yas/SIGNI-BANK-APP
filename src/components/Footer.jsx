import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        textAlign: "center",
        py: 2,
        backgroundColor: "#f1f1f1",
      }}
    >
      <Typography variant="body2">© 2025 Banking App. All rights reserved.</Typography>
    </Box>
  );
};

export default Footer;
