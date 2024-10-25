import { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const BuyForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    contact: '',
    email: '',
    quantity: 1,
    address: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Your order has been placed successfully!");
    navigate("/");
  };

  const handlecancel = ()=>{
    
    navigate("/")

  }

  return (
    <Container>
      <Box sx={{ maxWidth: 600, margin: '0 auto', mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Customer Information
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Full Name"
            name="fullName"
            fullWidth
            margin="normal"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
          <TextField
            label="Contact"
            name="contact"
            fullWidth
            margin="normal"
            value={formData.contact}
            onChange={handleChange}
            required
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            fullWidth
            margin="normal"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <TextField
            label="Quantity"
            name="quantity"
            type="number"
            fullWidth
            margin="normal"
            value={formData.quantity}
            onChange={handleChange}
            required
          />
          <TextField
            label="Postal Address"
            name="address"
            fullWidth
            margin="normal"
            multiline
            rows={4}
            value={formData.address}
            onChange={handleChange}
            required
          />
          <Button variant="contained" color="primary" type="submit" sx={{ mt: 2 }}>
            Submit
          </Button>

          <Button variant='contained' color='secondary' onClick={handlecancel} sx={{ mt: 2 , marginLeft:2 }}>Cancel</Button>
        </form>
      </Box>
    </Container>
  );
};

export default BuyForm;
