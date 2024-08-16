
import { Container, Typography, Box } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'primary.main', color: 'white', p: 3, mt: 4 }}>
      <Container>
        <Typography variant="h6">Contact Us</Typography>
        <Typography>Email: Famehyder7777@gamil.com</Typography>
        <Typography>Email: Famehyder9999@gamil.com</Typography>
        <Typography>Address: Sat_Tara Shoping Mall Skardu</Typography>
        <Typography>Phone: 03554526991</Typography>
        <Typography>Phone: 03417405991</Typography>
      </Container>
    </Box>
  );
};

export default Footer;
