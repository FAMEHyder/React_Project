// Results.js
import React from 'react';
import { Container, Button,Typography, TextField, Box } from '@mui/material';

function Results() {
  return (
    <Container maxWidth= "xs" >
      <Typography variant="h4" gutterBottom>
        Results
      </Typography>
      <Box>
        <TextField
          label="Roll Number"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Name"
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
