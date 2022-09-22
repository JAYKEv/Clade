import React from "react";
import { Box, Grid, Container, Typography } from "@mui/material";
const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#1c1e29",
        padding: "13px",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Typography
          component="h3"
          sx={{
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "1.1rem",
            color: "#ffce6d",
          }}
        >
          Code4Share
        </Typography>
        <Typography>
          Copyright © 2022 Code4Share.
          {/* Developed by{" "} */}
          {/* <Typography
            component="a"
            color="primary_text"
            href="https://github.com/ashishkk22"
            target="_blank"
            sx={{
              fontWeight: "bold",
              textDecoration: "none",
              color: "#ffce6d",
            }}
          >
            @AshishKachhadiya
          </Typography> */}
          {/* <Typography
            component="a"
            color="primary_text"
            href="https://github.com/ghadiyavishal"
            target="_blank"
            sx={{
              fontWeight: "bold",
              textDecoration: "none",
              color: "#ffce6d",
            }}
          >
            @Vishal Ghadiya
          </Typography> */}
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
