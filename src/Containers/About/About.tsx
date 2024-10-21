import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";

const About = () => {
  return (
    <div>
      <Container sx={{ mt: 5 }}>
        <Box>
          <Typography variant="h4" component="h1" gutterBottom align="center">
            About Our Company
          </Typography>
          <Typography variant="body1" align="center">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
          </Typography>
        </Box>

        <Box sx={{ mt: 5 }}>
          <Typography variant="h4" component="h2" gutterBottom align="center">
            Meet Our Team
          </Typography>

          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  height="300"
                  image="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                  alt="CEO"
                />
                <CardContent>
                  <Typography variant="h5" component="div">
                    John Doe
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    CEO & Founder
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lorem impsum dolor sit amet, consetetur sadipscing elitr.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  height="300"
                  width="100"
                  image="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                  alt="CEO"
                />
                <CardContent>
                  <Typography variant="h5" component="div">
                    John Doe
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Chief Technology Officer
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lorem impsum dolor sit amet, consetetur sadipscing elitr.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  height="300"
                  width="100"
                  image="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                  alt="CEO"
                />
                <CardContent>
                  <Typography variant="h5" component="div">
                    John Doe
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Chief Operations Officer
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lorem impsum dolor sit amet, consetetur sadipscing elitr.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default About;
