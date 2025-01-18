import { useState } from 'react';
import { Box, AppBar, Button, Menu, IconButton, MenuItem } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import NL from '../image/navbarLogo.png';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null); // State for the menu anchor (user dropdown)
  const [anchorElUser, setAnchorElUser] = useState(null); // State for the user dropdown

  const handleUserMenuOpen = (event) => {
    setAnchorElUser(event.currentTarget); // Open user menu on click
  };

  const handleUserMenuClose = () => {
    setAnchorElUser(null); // Close the user menu
  };

  const handleClick = (path) => {
    navigate(path); // Navigate to the specified path
    handleUserMenuClose(); // Close the menu after navigation
  };

  return (
    <>
      {/* Navbar */}
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
            <Button sx={{ color: 'white' }} onClick={handleUserMenuOpen}>
              User
            </Button>
            <Button sx={{ color: 'white' }} onClick={() => handleClick('/marksheet')}>
              Add Result
            </Button>
            <Button sx={{ color: 'white' }} onClick={() => handleClick('/noticboard')}>
              NoticeBoard
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
            onClick={handleUserMenuOpen} // Opens the user-specific dropdown
          >
            <MenuIcon />
          </IconButton>

          <Menu
            anchorEl={anchorElUser}
            open={Boolean(anchorElUser)}
            onClose={handleUserMenuClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            sx={{ mt: 1, mr: '10px' }} // Adjust positioning below the MenuIcon
          >
            {/* Only the class-related buttons for "User" */}
            <MenuItem onClick={() => handleClick('/user9arts')}>9th Arts</MenuItem>
            <MenuItem onClick={() => handleClick('/user10arts')}>10th Arts</MenuItem>
            <MenuItem onClick={() => handleClick('/user9science')}>9th Science</MenuItem>
            <MenuItem onClick={() => handleClick('/user10science')}>10th Science</MenuItem>
          </Menu>
        </Box>
      </AppBar>
    </>
  );
};

export default Navbar;
