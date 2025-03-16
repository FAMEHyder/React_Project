import { useState } from 'react';
import { AppBar, Box, Button, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NL from '../image/navbarLogo.png';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../authContext/auth';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null); 
  const navigate = useNavigate();
  const { user } = useAuthStore();

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget); 
  };

  const handleMenuClose = () => {
    setAnchorEl(null); 
  };

  const handleClick = (path) => {
    navigate(path); 
    handleMenuClose(); 
  };
  const handleprofileClick = (path) => {
    if (!user) {
      alert('Sign in required! Click Ok to Sign In');
      navigate('/Signin');
      return;
    }
    navigate(path); 
    handleMenuClose(); 
  };

  return (
    <>
      <AppBar position="static">
        <Box
          sx={{
            height: { xs: 60, md: 80 },
            width: 'auto%',
            bgcolor: 'green',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            px: 2,
          }}
        >
          <Box
            onClick={() => handleClick('/')}
            sx={{
              cursor: 'pointer',
              backgroundImage: `url(${NL})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              borderRadius: '50%',
              height: { xs: 50, md: 80 },
              width: { xs: 50, md: 80 },
              overflow: 'hidden',
              boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.5)',
            }}
          />

          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              gap: 2,
            }}
          >
            <Button sx={{ color: 'white' }} onClick={() => handleClick('/signin')}>
              Sign In
            </Button>
            <Button sx={{ color: 'white' }} onClick={() => handleClick('/signup')}>
              Sign Up
            </Button>
            <Button sx={{ color: 'white' }} onClick={() => handleClick('/contact')}>
              Contact Us
            </Button>
            
            <Button sx={{ color: 'white' }} onClick={() => handleprofileClick('/profile')}>
              <AccountCircle />
            </Button>
          </Box>

          <IconButton
            sx={{
              display: { xs: 'block', md: 'none' },
              color: 'white',
              position: 'absolute', 
              right: '10px', 
            }}
            onClick={handleMenuOpen}
          >
            <MenuIcon />
          </IconButton>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            sx={{ mt: 1, mr: '10px' }} 
          >
            <MenuItem onClick={() => handleClick('/signin')}>Sign In</MenuItem>
            <MenuItem onClick={() => handleClick('/signup')}>Sign Up</MenuItem>
            <MenuItem onClick={() => handleClick('/contact')}>Contact Us</MenuItem>
            <MenuItem onClick={() => handleprofileClick('/profile')}><AccountCircle /></MenuItem>
          </Menu>
        </Box>
      </AppBar>
    </>
  );
};

export default Navbar;