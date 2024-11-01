import { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {useAuthStore} from '../authContext/auth';
function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const {login } = useAuthStore();
  const handleLogin = async (event) => {
    event.preventDefault();

    if (email && password) {
      try {
        const response = await axios.post('http://localhost:8000/user/login', {
          email,
          password,
        });

        if (response.status === 200) {
          alert('Logged in successfully!');
          console.log("User Data from backend",response.data,response.data.userData)
          login(response.data)
          navigate('/');
        } else {
          alert('Login failed. Please check your credentials.');
        }
      } catch (error) {
        console.error('Error logging in:', error);
        alert('An error occurred while logging in. Please try again later.');
      }
    } else {
      alert('Please enter both email and password');
    }
  };

  return (
    <Container
      maxWidth="xs"
      sx={{
        marginTop: '150px',
        backgroundColor: 'white',
        padding: '16px',
        borderRadius: '8px',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>
      <form onSubmit={handleLogin}>
        <TextField
          label="Email"
          type="email"
          placeholder="abc@gmail.com"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          placeholder="********"
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
          Dont have an account? Register here
        </Button>
      </form>
    </Container>
  );
}

export default LoginForm;
