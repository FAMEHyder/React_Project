
import { Container, Button,Typography, TextField, Box } from '@mui/material';

function RegisterCourses() {
  return (
    <Container maxWidth= "xs" 
    sx={{
      marginTop: '50px',
      height:'520px',
      backgroundColor: 'white', // Set the background color
      padding: '1px', // Add some padding if needed
      borderRadius: '8px', // Optional: Add rounded corners
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)', // Optional: Add a shadow
    }}
    >
      <Typography variant="h4" gutterBottom>
        Register Now
      </Typography>
      <Box>
        <TextField
          label="Enter Your Name"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Enter Your Father Name"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Enter Your Institute Name"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Enter Your Class"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Enter Your Group"
          variant="outlined"
          fullWidth
          margin="normal"
        />

        <Button
          variant="contained"
          fullWidth
        >
          Submit Form
        </Button>
      </Box>
    </Container>
  );
}

export default RegisterCourses;
