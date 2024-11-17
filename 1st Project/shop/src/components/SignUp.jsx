import { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import Axios

function RegisterForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    age: '',
    address: '',
    username:'',
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
    const { firstName, lastName, dob, age, address,username, email, password, confirmPassword } = formData;
    console.log('Form Data:', formData);
    if (firstName && lastName && dob && age && address&& username && email && password && password === confirmPassword) {
      try {
        const response = await axios.post('http://localhost:8000/user/register', formData);
        console.log(response.data)
        alert('Registered successfully!'); // Display success message
        navigate('/'); // Redirect to the home page
      } catch (error) {
        console.error('Registration error:', error);
        alert('Registration failed. Please try again.'); // Dierror message
      }
    } else {
      alert('Please ensure all fields are filled and passwords match');
    }
  };

  const fields = [
    { label: 'First Name', name: 'firstName', type: 'text' },
    { label: 'Last Name', name: 'lastName', type: 'text' },
    { label: 'Date of Birth', name: 'dob', type: 'date' },
    { label: 'Age', name: 'age', type: 'number' },
    { label: 'Address', name: 'address', type: 'text' },
    { label: 'UserName', name: 'username', type: 'text' },
    { label: 'Email', name: 'email', type: 'email' },
    { label: 'Password', name: 'password', type: 'password' },
    { label: 'Confirm Password', name: 'confirmPassword', type: 'password' },
  ];

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
          />
        ))}
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Register
        </Button>

        <Button
          variant="text"
          fullWidth
          onClick={() => navigate('/Signin')}
        >
          Already have an account? Login here
        </Button>
      </form>
    </Container>
  );
}

export default RegisterForm;
