import { Container, Box,Typography, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import logo from '../image/AboutLogo.png'
const SignIn = () => {
  const navigate = useNavigate();
  const handleClick = (path) => {
    navigate(path);
  }
  return (
    <Container
      maxWidth="lg"
      sx={{
        padding: { xs: 2, sm: 3, md: 4, lg: 5 },
        bgcolor: 'white',
        mt: { xs: 2, sm: 3, md: 4 },
        mb: { xs: 2, sm: 3, md: 4 },
        height: 'auto', // Adjust height to fit content
        width: { xs: '90%', sm: '70%', md: '50%', lg: '40%' },
        boxShadow: '0 5px 8px 5px rgba(255, 105, 135,.3)',
        borderRadius: '9px',
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
          alignItems: "center",
          justifyContent: "center",


        }}>
        </Box>
      <Typography
        variant="h4"
        fontSize={{ xs: '2rem', sm: '2.5rem', md: '3rem' }}
        fontFamily={'Cambria, Cochin, Georgia, Times, "Times New Roman", serif'}
        color="blue"
        fontWeight={600}
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
      onClick={()=>{handleClick('/signup')}}
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
