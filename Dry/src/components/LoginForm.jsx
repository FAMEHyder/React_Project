import { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    if (email && password) {
      alert('Logged in successfully!');
      navigate('/');
    } else {
      alert('Please enter both email and password');
    }
  };

  return (
    <Container maxWidth="xs"
    sx={{
      marginTop: '150px',
      backgroundColor: 'white', // Set the background color
      padding: '16px', // Add some padding if needed
      borderRadius: '8px', // Optional: Add rounded corners
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', // Optional: Add a shadow
    }}
    >
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>
      <form onSubmit={handleLogin}>
        <TextField
          label="Email"
          type='Email'
          placeholder='abc@gmail.com'
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          placeholder='********'
          variant="outlined"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Login
        </Button>
        <Button
          variant="text"
          fullWidth
          onClick={() => navigate('/Signup')}
        >
          Did not have an account? Register here
        </Button>
      </form>
    </Container>
  );
}

export default LoginForm;
