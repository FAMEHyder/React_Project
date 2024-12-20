import { useState } from 'react';
import { AppBar, Box, Button, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NL from '../image/navbarLogo.png';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null); // State for dropdown
  const navigate = useNavigate();

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget); // Set the anchor element
  };

  const handleMenuClose = () => {
    setAnchorEl(null); // Close the menu
  };

  const handleClick = (path) => {
    navigate(path); // Navigate to the specified path
    handleMenuClose(); // Close the menu
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
          {/* Logo */}
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

          {/* Desktop Navigation */}
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
            
            <Button sx={{ color: 'white' }} onClick={() => handleClick('/profile')}>
              <AccountCircle />
            </Button>
          </Box>

          {/* Mobile Dropdown Menu */}
          <IconButton
            sx={{
              display: { xs: 'block', md: 'none' },
              color: 'white',
              position: 'absolute', // Keep position fixed
              right: '10px', // Align on the right side
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
            sx={{ mt: 1, mr: '10px' }} // Adjust positioning below the MenuIcon
          >
            <MenuItem onClick={() => handleClick('/signin')}>Sign In</MenuItem>
            <MenuItem onClick={() => handleClick('/signup')}>Sign Up</MenuItem>
            <MenuItem onClick={() => handleClick('/contact')}>Contact Us</MenuItem>
            <MenuItem onClick={() => handleClick('/profile')}><AccountCircle /></MenuItem>
          </Menu>
        </Box>
      </AppBar>
    </>
  );
};

export default Navbar;
