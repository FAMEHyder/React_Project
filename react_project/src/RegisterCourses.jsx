
import { Container, Button, TextField, Typography } from '@mui/material';

function RegisterCourses() {
  return (
    <Container maxWidth = "xs">
      <Typography variant="h4" gutterBottom>
        Register to Course
        
      </Typography>
      <TextField
      label = "Register A Course"
      variant="outlined"
      fullWidth
      margin='normel'
      placeholder='Subject Name'

      />
      
      <Button type="submit" variant="contained" color="primary" fullWidth>
          Register
        </Button>
       
    </Container>
  );
}

export default RegisterCourses;