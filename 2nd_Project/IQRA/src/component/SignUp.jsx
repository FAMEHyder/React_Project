import { Button, Container, TextField, Typography } from '@mui/material'

const SignUp = () => {
  return (
    <Container maxWidth='lg' 
    sx={{
      padding :{xs: 1,sm:2,md:3 ,lg:'4',xl:'5'},
      height:'800px',
      width:"40%",
      bgcolor:'white',
      boxShadow:'0 5px 8px 5px rgb(255,105,135,.3)',
      mt:4,
      borderRadius:'8px'

    }}>
      <Typography sx={{xs:1 ,sm:2, md:3,lg:4,xl:5,fontFamily:'cambria' ,fontSize:30,fontWeight:8,ml:25}}>Sign Up</Typography>
    <form>
    <TextField
    label="Full Name"
    placeholder='Enter Your Name'
    type = "text"
    variant = "outlined"
    fullWidth
    margin= "normal"
    required
    
    />

    <TextField
    label="Date of Birth"
    type = "date"
    variant = 'outlined'
    fullWidth
    margin='normal'
    required
    />

    <TextField
    label = "age"
    type ="number"
    variant='outlined'
    fullWidth
    margin='normal'
    required

    />
    <TextField
    label = "Address"
    type ="Address"
    variant='outlined'
    fullWidth
    margin='normal'
    required

    />
    <TextField
    label = "UserName"
    type ="Text"
    placeholder='Enter User Name '
    variant='outlined'
    fullWidth
    margin='normal'
    required

    />
    <TextField
    label = "Email"
    type ="Email"
    placeholder='Enter Your Email '
    variant='outlined'
    fullWidth
    margin='normal'
    required

    />
    <TextField
    label = "Password"
    type ="password"
    placeholder='Enter Your password '
    variant='outlined'
    fullWidth
    margin='normal'
    required

    />
    <TextField
    label = "password"
    type ="password"
    placeholder='Enter password again '
    variant='outlined'
    fullWidth
    margin='normal'
    required

    />

    <Button variant ='contained' sx ={{ml:43}}>Register Now</Button>
    </form>

    <Button>Already have an account click to Sign In</Button>   
    </Container>
  )
}

export default SignUp
