import { Container ,Typography,TextField, Button} from '@mui/material'

const SignIn = () => {
  return (
   <Container maxWidth="lg"
   sx={{
    padding : {xs:1,sm:2,md:3,lg:4,xl:5},
    bgcolor:'white',
    mt: 4,
    height: '60vh',
    width: '40%',
    boxShadow: '0 5px 8px 5px rgba(255, 105, 135,.3)',
    borderRadius:'9px'

   }}
   >
      <Typography variant="h4" fontSize="3rem" fontFamily={'Cambria, Cochin, Georgia, Times, "Times New Roman", serif'} ml={22} color='blue'> Sign In </Typography>

  <form>
  <TextField
          label="Email"
          type="email"
          placeholder="abc@gmail.com"
          variant="outlined"
          fullWidth
          margin="normal"
          // value={email}
          // onChange={(e) => setEmail(e.target.value)}
        /> 
  <TextField
          label="Password"
          type="password"
          placeholder="********"
          variant="outlined"
          fullWidth
          margin="normal"
          // value={email}
          // onChange={(e) => setEmail(e.target.value)}
        /> 
    <Button variant='contained' sx={{ml:50}}> Login </Button>
   

  </form>
  <Button >Dont have an account. Click to Sign up Now </Button>



   </Container>
  )
}

export default SignIn
