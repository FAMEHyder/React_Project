import { useState } from 'react';
import { Box, AppBar, Button, Menu, IconButton, MenuItem } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import NL from '../image/navbarLogo.png';
import MenuIcon from '@mui/icons-material/Menu';
import { useAuthStore } from '../../../IQRA/src/authContext/auth';

const Navbar = () => {
  const navigate = useNavigate();
  const {user}= useAuthStore();
  const [anchorEl, setAnchorEl] = useState(null); 
  const [anchorElUser, setAnchorElUser] = useState(null); 

  const handleUserMenuOpen = (event) => {
    if (!user) {
      alert('Sign in required! Click Ok to Sign In');
      navigate('/Signin');
      return;
  }
    setAnchorElUser(event.currentTarget); 
  };

  const handleUserMenuClose = () => {
    setAnchorElUser(null); 
  };

  


  const handleClick = (path) => {
    if (!user) {
        alert('Sign in required! Click Ok to Sign In');
        navigate('/Signin');
        return;
    }
    navigate(path);
    handleUserMenuClose(); 
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
            onClick={() => handlelogoClick('/')}
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
            <Button sx={{ color: 'white' }} onClick={handleUserMenuOpen}>
              User
            </Button>
            <Button sx={{ color: 'white' }} onClick={() => handleClick('/noticboard')}>
              NoticeBoard
            </Button>
            <Button sx={{ color: 'white' }} onClick={() => handleClick('/profile')}>
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
            onClick={handleUserMenuOpen} 
          >
            <MenuIcon />
          </IconButton>

          <Menu
            anchorEl={anchorElUser}
            open={Boolean(anchorElUser)}
            onClose={handleUserMenuClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            sx={{ mt: 1, mr: '10px' }} 
          >
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
