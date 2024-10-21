import { Box, Button, Container, TextField, Typography } from '@mui/material';


const Contacts = () => {
  return (
    <div>
      <Container>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Contact Us
        </Typography>

        <Typography variant="body1" align="center">
          If you have any questions or inquiries, feel free to reach out to us using the form below.
        </Typography>

        <Box component="form">
          <TextField
            label="name"
          />
          <TextField
            label="Email"
            type="email"
          />
          <TextField
            label="Message"
          />
          <Button>
            Send message
          </Button>
        </Box>
      </Container>
    </div>
  );
};

export default Contacts;