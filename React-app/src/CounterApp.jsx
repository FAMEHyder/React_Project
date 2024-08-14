import  { useState, useEffect } from 'react';
import { Button, Container, Typography, Box } from '@mui/material';

function CounterApp() {
  const [count, setCount] = useState(0);

  // Increment function
  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  // Decrement function
  const decrement = () => {
    if (count > 0) {
      setCount(prevCount => prevCount - 1);
    }
  };

  // useEffect to trigger alert and console on count change
  useEffect(() => {
    if (count >= 0) {
      console.log(`Current count is: ${count}`);
    }
  
  }, [count]);

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        bgcolor: '#f5f5f5',
        textAlign: 'center',
      }}
    >
      <Typography fontFamily={"Cambria"} variant="h4" gutterBottom>
        Counter App
      </Typography>
      <Typography variant="h6" gutterBottom>
        Count: {count}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          width: '100%',
          mt: 4,
        }}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={increment}
          sx={{ mx: 2 }}
        >
          Increment
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={decrement}
          sx={{ mx: 2 }}
          disabled={count <= 0}
        >
          Decrement
        </Button>
      </Box>
    </Container>
  );
}

export default CounterApp;
