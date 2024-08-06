// OnlineCourses.js

import { Container, Typography,TextField,Button } from '@mui/material';

function OnlineCourses() {
  return (
    <Container maxWidth = "xs">
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
      
      <Button type="submit" variant="contained" color="primary" fullWidth>
          Start Class
        </Button>
       
    </Container>
  );
}

export default OnlineCourses;
