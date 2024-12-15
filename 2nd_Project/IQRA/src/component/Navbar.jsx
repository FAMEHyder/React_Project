import { AppBar,Box,  Button } from '@mui/material'
import NL from '../image/navbarLogo.png';
import {useNavigate} from 'react-router-dom';
import AccountCircle from '@mui/icons-material/AccountCircle';

const Navbar = () => {
const navigate = useNavigate();

const handleClick = (path)=>{
    navigate (path);
}
    return (
        <AppBar >

            <Box 
                sx={{
                    height: 60,
                    width: '100%',
                    bgcolor: 'green',
                    display : 'flex',
                    justifyContent: 'space-between',
                    alignItems:'center'}}>
                    
                <Box 
                    onclick = {()=> handleClick ('/')}
                sx={{
                    marginTop:'45px',
                    marginLeft:'20px',
                    backgroundImage :`url(${NL})`,
                    cursor:'pointer',
                    backgroundSize:'cover',
                    backgroundPosition:'center 70%',
                    backgroundRepeat:'no-repeat',
                    borderRadius: '50%',
                    height:100,
                    width:100,
                    overflow:'Hidden',
                    boxShadow:'0px 0px 10px 0px rgba(0,0,0,0.5)'
                    
                }}>

                </Box>

                <Box sx ={{
                    display:'flex',
                    gap : 2
                }} >

                <Button color='white' onClick={()=> handleClick ('/signin')}>
                    Sign In
                </Button>
                <Button color='white' onClick={()=> handleClick ('/signup')}>
                    Sign Up
                </Button>
                <Button color='white' onClick={()=>handleClick('/contact')}>
                    Contact Us
                </Button>
                <Button color='white' onClick={()=>handleClick('/profile')}>
                    <AccountCircle />
                </Button>

                </Box>
            </Box>

        </AppBar>


    )
}

export default Navbar
