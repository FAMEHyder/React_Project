// OnlineCourses.js

import { Container, Typography,TextField,Button } from '@mui/material';

function OnlineCourses() {
  return (
    <Container maxWidth = "xs"
    sx={{
      marginTop: '200px',
      backgroundColor: 'white', // Set the background color
      padding: '16px', // Add some padding if needed
      borderRadius: '8px', // Optional: Add rounded corners
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', // Optional: Add a shadow
    }}
    >
      <Typography variant="h4" gutterBottom>
        Enter Subject Name
        
      </Typography>
      <TextField
      label = "Enter Subject Name"
      variant="outlined"
      fullWidth
      margin='normel'
      placeholder='Subject Name'

      />
      
      <Button type="submit" variant="contained" color="primary" fullWidth
      sx={{
        marginTop: '4px',

      }}
      >
          Start Class
        </Button>
       
    </Container>
  );
}

export default OnlineCourses;
