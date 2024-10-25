
import { Container, Button,Typography, TextField, Box } from '@mui/material';

function Results() {
  return (
    <Container maxWidth= "xs" 
    sx={{
      marginTop: '200px',
      backgroundColor: 'white', // Set the background color
      padding: '16px', // Add some padding if needed
      borderRadius: '8px', // Optional: Add rounded corners
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)', // Optional: Add a shadow
    }}
    >
      <Typography variant="h4" gutterBottom>
        Enter Your Roll NO
      </Typography>
      <Box>
        <TextField
          label="Roll Number"
          variant="outlined"
          fullWidth
          margin="normal"
        />
       

        <Button
          variant="contained"
          fullWidth
        >
          Check Result
        </Button>
      </Box>
    </Container>
  );
}

export default Results;
