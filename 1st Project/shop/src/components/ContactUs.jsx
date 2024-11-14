import { Typography, Container, Box, TextField, Button, Grid } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ScheduleIcon from '@mui/icons-material/Schedule';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import backgroundImageUrl from '../Image/1.png';
import emailjs from 'emailjs-com';

const ContactUs = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      message: Yup.string().required('Message is required'),
    }),
    onSubmit: (values, { resetForm }) => {
      // EmailJS integration
      emailjs.send(
        'service_ji3pg89',           // Service ID
        'template_kuu4qem',          // Template ID
        {
          to_name: 'SaT_Tara',  // Replace with actual recipient name if needed
          from_name: values.name,     // From name (user's name)
          from_email: values.email,   // User's email
          message: values.message,    // Message content
        },
        'Gpm47Cw5Xb3Vf2MI3'          // User ID (your EmailJS user ID)
      )
      .then((result) => {
        console.log('Email successfully sent:', result.text);
        alert('Message sent successfully!');
        resetForm();  // Reset the form on successful submission
      })
      .catch((error) => {
        console.error('Error sending email:', error.text);
        alert('Failed to send the message, please try again.');
      });
    },
  });

  return (
    <Container sx={{ padding: '2rem', mt: 12 }}>
      {/* Background Image Box */}
      <Box
        sx={{
          height: '200px',
          backgroundImage: `url(${backgroundImageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: 2,
          mb: 4,
        }}
      />
      
      <Grid container spacing={4} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={3}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <EmailIcon />
            <Typography variant="body1" align="center">Email</Typography>
            <Typography variant="body2" align="center">famehyder9999@gmail.com</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <PhoneIcon />
            <Typography variant="body1" align="center">Phone</Typography>
            <Typography variant="body2" align="center">+923554526991 +923417405991</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <LocationOnIcon />
            <Typography variant="body1" align="center">Address</Typography>
            <Typography variant="body2" align="center">
              SaT_Tara Dry Fruit Shop Almadar Chowk Skardu Baltistan
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <ScheduleIcon />
            <Typography variant="body1" align="center">Opening Hours</Typography>
            <Typography variant="body2" align="center">Mon-Fri: 9 AM - 6 PM</Typography>
          </Box>
        </Grid>
      </Grid>

      {/* Contact Form */}
      <Box
        component="form"
        onSubmit={formik.handleSubmit}
        sx={{
          mt: 4,
          p: 3,
          borderRadius: 2,
          boxShadow: 3,
          backgroundColor: 'white',
        }}
      >
        <Typography variant="h5" gutterBottom>
          Send us a Message
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              id="name"
              name="name"
              label="Full Name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              id="email"
              name="email"
              label="Email"
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </Grid>
        </Grid>
        <TextField
          fullWidth
          id="message"
          name="message"
          label="Message"
          multiline
          rows={4}
          value={formik.values.message}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.message && Boolean(formik.errors.message)}
          helperText={formik.touched.message && formik.errors.message}
          sx={{ mt: 2 }}
        />
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
          Send Message
        </Button>
      </Box>
    </Container>
  );
};

export default ContactUs;
