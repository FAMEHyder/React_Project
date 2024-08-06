
import { Container, Button, TextField, Typography } from '@mui/material';

function RegisterCourses() {
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
      <Typography variant="h4"  gutterBottom>
        Register to Course
        
      </Typography>
      <TextField
      label = "Register A Course"
      variant="outlined"
      fullWidth
      margin='normel'
      placeholder='Subject Name'
        sx={{
          '& label.Mui-focused': {
            color: 'black',
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'darkgray',
            },
            '&:hover fieldset': {
              borderColor: 'black',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'black',
            },
          },
          '& .MuiInputBase-input': {
            color: 'black',
          },
        }}
      />
    
      
      <Button type="submit" variant="contained" color="primary" fullWidth
       sx={{
        marginTop: '4px',
        
      }}

      >
          Register
        </Button>
       
    </Container>
  );
}

export default RegisterCourses;