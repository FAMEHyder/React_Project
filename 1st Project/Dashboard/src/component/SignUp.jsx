import { useState } from 'react';
import { TextField, Button, Container, Typography, InputAdornment, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import Axios
import { Person, Mail, Lock, Home, AccountCircle } from '@mui/icons-material'; // Import icons

function RegisterForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    age: '',
    address: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    const { firstName, lastName, dob, age, address, username, email, password, confirmPassword } = formData;
    console.log('Form Data:', formData);
    if (firstName && lastName && dob && age && address && username && email && password && password === confirmPassword) {
      try {
        const response = await axios.post('http://localhost:8000/user/register', formData);
        console.log(response.data);
        alert('Registered successfully!'); // Display success message
        navigate('/'); // Redirect to the home page
      } catch (error) {
        console.error('Registration error:', error);
        alert('Registration failed. Please try again.'); // Display error message
      }
    } else {
      alert('Please ensure all fields are filled and passwords match');
    }
  };

  const fields = [
    { label: 'First Name', name: 'firstName', type: 'text', icon: <Person /> },
    { label: 'Last Name', name: 'lastName', type: 'text', icon: <Person /> },
    { label: 'Date of Birth', name: 'dob', type: 'date',  },
    { label: 'Age', name: 'age', type: 'number', icon: <AccountCircle /> },
    { label: 'Address', name: 'address', type: 'text', icon: <Home /> },
    { label: 'Username', name: 'username', type: 'text', icon: <AccountCircle /> },
    { label: 'Email', name: 'email', type: 'email', icon: <Mail /> },
    { label: 'Password', name: 'password', type: 'password', icon: <Lock /> },
    { label: 'Confirm Password', name: 'confirmPassword', type: 'password', icon: <Lock /> },
  ];

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#f4f6f8',  // Optional: Background color to make the form pop out
      }}
    >
      <Container
        maxWidth="xs"
        sx={{
          backgroundColor: 'white',
          padding: '16px',
          borderRadius: '8px',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
          position: 'relative',
        }}
      >
        <Typography variant="h4" gutterBottom>
          Register
        </Typography>
        <form onSubmit={handleRegister}>
          {fields.map((field) => (
            <TextField
              key={field.name}
              label={field.label}
              name={field.name}
              type={field.type}
              variant="outlined"
              fullWidth
              margin="normal"
              value={formData[field.name]}
              onChange={handleChange}
              InputLabelProps={field.type === 'date' ? { shrink: true } : {}}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    {field.icon}
                  </InputAdornment>
                ),
              }}
            />
          ))}
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Register
          </Button>

          <Button
            variant="text"
            fullWidth
            onClick={() => navigate('/Signin')}
            sx={{ marginTop: '8px' }}
          >
            Already have an account? Login here
          </Button>
        </form>
      </Container>
    </Box>
  );
}

export default RegisterForm;
