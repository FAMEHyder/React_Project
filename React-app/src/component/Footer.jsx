
import { Container, Typography, Box } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'primary.main', color: 'white', p: 3, mt: 4 }}>
      <Container>
        <Typography variant="h6">Contact Us</Typography>
        <Typography>Email: info@example.com</Typography>
        <Typography>Address: Skardu, Alamdar Chowk, Shop No. 19</Typography>
        <Typography>Phone: 123-456-7890</Typography>
      </Container>
    </Box>
  );
};

export default Footer;
