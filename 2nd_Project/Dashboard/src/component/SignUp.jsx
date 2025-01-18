import { useState } from 'react';
import { Button, Container, Box, TextField, Typography } from '@mui/material';
import logo from '../image/AboutLogo.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
  const navigate = useNavigate();

  // State to capture form data
  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  // State for error messages
  const [error, setError] = useState('');

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8000/user/register', formData);
      if (response.status === 201) {
        alert('Registration successful!');
        navigate('/signin'); // Navigate to Sign In page
      }
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        padding: { xs: 2, sm: 3, md: 4 },
        height: 'auto',
        width: { xs: '90%', sm: '70%', md: '50%', lg: '40%' },
        bgcolor: 'white',
        boxShadow: '0 5px 8px 5px rgba(255, 105, 135, 0.3)',
        mt: { xs: 2, sm: 3, md: 4 },
        mb: { xs: 2, sm: 3, md: 4 },
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          height: '35vh',
          width: '400px',
          backgroundImage: `url(${logo})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '50%',
          backgroundPosition: 'center',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      ></Box>
      <Typography
        fontSize={{ xs: '2rem', sm: '2.5rem', md: '3rem' }}
        sx={{
          mt: { xs: 2, sm: 3 },
          fontFamily: 'Cambria, Cochin, Georgia, Times, "Times New Roman", serif',
          fontWeight: 600,
          textAlign: 'center',
          color: 'blue',
        }}
      >
        Sign Up
      </Typography>

      {error && (
        <Typography
          sx={{ color: 'red', mt: 2, fontSize: '0.9rem', textAlign: 'center' }}
        >
          {error}
        </Typography>
      )}

      <form style={{ width: '100%' }} onSubmit={handleSubmit}>
        <TextField
          name="fullName"
          label="Full Name"
          placeholder="Enter Your Name"
          type="text"
          variant="outlined"
          fullWidth
          margin="normal"
          required
          value={formData.fullName}
          onChange={handleChange}
        />
       
        <TextField
          name="address"
          label="Address"
          type="text"
          variant="outlined"
          fullWidth
          margin="normal"
          required
          value={formData.address}
          onChange={handleChange}
        />
        <TextField
          name="userName"
          label="User Name"
          type="text"
          placeholder="Enter User Name"
          variant="outlined"
          fullWidth
          margin="normal"
          required
          value={formData.userName}
          onChange={handleChange}
        />
        <TextField
          name="email"
          label="Email"
          type="email"
          placeholder="Enter Your Email"
          variant="outlined"
          fullWidth
          margin="normal"
          required
          value={formData.email}
          onChange={handleChange}
        />
        <TextField
          name="password"
          label="Password"
          type="password"
          placeholder="Enter Your Password"
          variant="outlined"
          fullWidth
          margin="normal"
          required
          value={formData.password}
          onChange={handleChange}
        />
        <TextField
          name="confirmPassword"
          label="Confirm Password"
          type="password"
          placeholder="Enter Password Again"
          variant="outlined"
          fullWidth
          margin="normal"
          required
          value={formData.confirmPassword}
          onChange={handleChange}
        />

        <Button
          variant="contained"
          fullWidth
          type="submit"
          sx={{
            mt: 2,
            padding: { xs: 1, sm: 1.5 },
            fontSize: { xs: '0.9rem', sm: '1rem' },
          }}
        >
          Register Now
        </Button>
      </form>

      <Button
        onClick={() => navigate('/signin')}
        sx={{
          mt: 2,
          fontSize: { xs: '0.8rem', sm: '1rem' },
          color: 'blue',
          textTransform: 'none',
        }}
      >
        Already have an account? Click to Sign In
      </Button>
    </Container>
  );
};

export default SignUp;
