import { Box, Button, Container, TextField, Typography } from "@mui/material";
import * as React from "react";

const Contacts = () => {
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent! We will get back to you as soon as possible");
  };

  return (
    <div>
      <Container sx={{ mt: 5 }}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Contact Us
        </Typography>

        <Typography variant="body1" align="center">
          If you have any questions or inquiries, feel free to reach out to us
          using the form below.
        </Typography>

        <Box
          component="form"
          onSubmit={onSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mt: 3,
            maxWidth: "500px",
            mx: "auto",
          }}
        >
          <TextField
            required
            label="name"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            required
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            required
            label="Message"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
          >
            Send message
          </Button>
        </Box>
      </Container>
    </div>
  );
};

export default Contacts;
