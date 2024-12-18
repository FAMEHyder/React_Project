import { Container, Typography, TextField, Button } from '@mui/material';

const SignIn = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        padding: { xs: 2, sm: 3, md: 4, lg: 5 },
        bgcolor: 'white',
        mt: { xs: 2, sm: 3, md: 4 },
        height: 'auto', // Adjust height to fit content
        width: { xs: '90%', sm: '70%', md: '50%', lg: '40%' },
        boxShadow: '0 5px 8px 5px rgba(255, 105, 135,.3)',
        borderRadius: '9px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography
        variant="h4"
        fontSize={{ xs: '2rem', sm: '2.5rem', md: '3rem' }}
        fontFamily={'Cambria, Cochin, Georgia, Times, "Times New Roman", serif'}
        color="blue"
        sx={{ mt: { xs: 1, sm: 2 }, textAlign: 'center' }}
      >
        Sign In
      </Typography>

      <form style={{ width: '100%' }}>
        <TextField
          label="Email"
          type="email"
          placeholder="abc@gmail.com"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Password"
          type="password"
          placeholder="********"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <Button
          variant="contained"
          fullWidth
          sx={{
            mt: 2,
            padding: { xs: 1, sm: 1.5 },
            fontSize: { xs: '0.8rem', sm: '1rem' },
          }}
        >
          Login
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
        Don't have an account? Sign up now
      </Button>
    </Container>
  );
};

export default SignIn;
