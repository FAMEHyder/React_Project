// AboutUs.jsx
import { Typography, Container } from '@mui/material';

const AboutUs = () => {
  return (
    <Container sx={{ padding: '2rem' }}>
      <Typography variant="h4" gutterBottom>
        About Us
      </Typography>
      <Typography variant="body1" paragraph sx={{mt:15}}>
        {}
  
        {}
      </Typography>
    </Container>
  );
};

export default AboutUs;
