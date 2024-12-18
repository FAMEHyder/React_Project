import { Button, Container, TextField, Typography } from '@mui/material';

const SignUp = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        padding: { xs: 2, sm: 3, md: 4 },
        height: 'auto', // Adjust height to fit content dynamically
        width: { xs: '90%', sm: '70%', md: '50%', lg: '40%' },
        bgcolor: 'white',
        boxShadow: '0 5px 8px 5px rgba(255, 105, 135, 0.3)',
        mt: { xs: 2, sm: 3, md: 4 },
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography
        sx={{
          mt: { xs: 2, sm: 3 },
          fontFamily: 'Cambria, Cochin, Georgia, Times, "Times New Roman", serif',
          fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' },
          fontWeight: 600,
          textAlign: 'center',
          color: 'blue',
        }}
      >
        Sign Up
      </Typography>

      <form style={{ width: '100%' }}>
        <TextField
          label="Full Name"
          placeholder="Enter Your Name"
          type="text"
          variant="outlined"
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Date of Birth"
          type="date"
          variant="outlined"
          fullWidth
          margin="normal"
          required
          InputLabelProps={{ shrink: true }} // Ensures the label doesn't overlap the value
        />
        <TextField
          label="Age"
          type="number"
          variant="outlined"
          fullWidth
          margin="normal"
          required
          onInput={(e) => {
            // Prevent negative values
            e.target.value = e.target.value < 0 ? 0 : e.target.value;
          }}
        />
        <TextField
          label="Address"
          type="text"
          variant="outlined"
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="User Name"
          type="text"
          placeholder="Enter User Name"
          variant="outlined"
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Email"
          type="email"
          placeholder="Enter Your Email"
          variant="outlined"
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Password"
          type="password"
          placeholder="Enter Your Password"
          variant="outlined"
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Confirm Password"
          type="password"
          placeholder="Enter Password Again"
          variant="outlined"
          fullWidth
          margin="normal"
          required
        />

        <Button
          variant="contained"
          fullWidth
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
