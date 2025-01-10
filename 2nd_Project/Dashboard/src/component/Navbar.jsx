import { useState} from 'react';
import { Box, AppBar, Button,Menu, IconButton,MenuItem,  } from '@mui/material';
import { AccountCircle} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import NL from '../image/navbarLogo.png';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const navigate = useNavigate();
  

  


  const [anchorEl, setAnchorEl] = useState(null); // State for dropdown

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
            <Button sx={{ color: 'white' }} onClick={() => handleClick('/users')}>
              User
            </Button>
            <Button sx={{ color: 'white' }} onClick={() => handleClick('/marksheet')}>
              Add Result
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
            <MenuItem onClick={() => handleClick('/userTable')}>User</MenuItem>
            <MenuItem onClick={() => handleClick('/marksheet')}>Add Result</MenuItem>
            <MenuItem onClick={() => handleClick('/profile')}><AccountCircle /></MenuItem>
          </Menu>
        </Box>
      </AppBar>
    </>
  );
};

export default Navbar;
