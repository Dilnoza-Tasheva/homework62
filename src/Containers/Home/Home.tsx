import { Box, Button, Card, CardActions, CardContent, Container, Grid, Typography } from '@mui/material';


const Home = () => {
  return (
    <div>
      <Box>
        <Container sx={{ mt: 5 }}>
          <Typography variant="h3" component="h1" gutterBottom>
            Fast, Reliable Delivery Services
          </Typography>
          <Typography variant="h5">
            Delivering your packages with speed and care.
          </Typography>
          <Button variant="contained" color="primary" size="large">
            Get Started
          </Button>
        </Container>
      </Box>

      <Container sx={{ mt: 5 }}>
        <Typography variant="h4" component="h2" gutterBottom align="center">
          Our Services
        </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                Express Delivery
              </Typography>
              <Typography variant="body2" color="text.secondary">
                We ensure fast and reliable delivery for your urgent packages with same-day delivery options.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                Package tracking
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Track your package in real time with our App and online tracking function.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                Customer support
              </Typography>
              <Typography variant="body2" color="text.secondary">
                We are here for you 24/7 with our dedicated support team.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>

      </Container>
    </div>
  );
};

export default Home;