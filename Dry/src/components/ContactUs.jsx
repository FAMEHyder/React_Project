// ContactUs.jsx
import { Typography, Container, Box } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const ContactUs = () => {
  return (
    <Container sx={{ padding: '2rem' }}>
      <Typography variant="h4" gutterBottom>
        Contact Us
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <EmailIcon sx={{ marginRight: '0.5rem' }} />
          <Typography variant="body1">Email: contact@sevenstardryfruit.com</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <PhoneIcon sx={{ marginRight: '0.5rem' }} />
          <Typography variant="body1">Phone: +1 (234) 567-8901</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <LocationOnIcon sx={{ marginRight: '0.5rem' }} />
          <Typography variant="body1">
            Address: 123 Dryfruit Street, Orchard City, Country
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default ContactUs;
