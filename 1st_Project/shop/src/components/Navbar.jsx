// Navbar.jsx
import { AppBar, Toolbar, Box, Button, Menu, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useState } from 'react';
import Cl from '../Image/CompanyLogo.png';

const Navbar = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (path) => {
    navigate(path);
  };





  // Open dropdown menu
  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Close dropdown menu
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar sx={{ backgroundColor: 'white' }}>
        {/* Top Bar with Sign In, Sign Up, Cart, and Check Icons */}
        <Box
          sx={{
            width: '100%',
            display: { xs: 'none', sm: 'flex' },
            gap: 1,
            marginLeft: 'auto',
            backgroundColor: 'darkgreen',
            justifyContent: 'end',
            padding: '0 16px',
          }}
        >
          <Button color="inherit" onClick={() => handleClick('/signin')}>
            Sign In
          </Button>
          <Button color="inherit" onClick={() => handleClick('/signup')}>
            Sign Up
          </Button>
          <Button color="inherit" onClick={() => handleClick('/cartcomp')}>
            <ShoppingCartIcon />
          </Button>
          <Button sx={{ color: 'white',mr:5 }} onClick={() => handleClick('/profile')}>
            <AccountCircle fontSize="medium" />
          </Button>
        </Box>

        {/* Main Toolbar with Logo and Navigation Links */}
        <Toolbar sx={{ justifyContent: 'space-between', flexWrap: 'wrap' }}>
          {/* Company Logo */}
          <Box
            onClick={() => handleClick('/')}
            sx={{
              paddingX: { xs: 2, sm: 4, md: 8 },
              cursor: 'pointer',
              backgroundImage: `url(${Cl})`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'left',
              height: 70,
              width: '150px',
              marginRight: 10,
              transformOrigin: 'left',
            }}
          />

          {/* Navigation Links */}
          <Box
            sx={{
              display: { xs: 'none', sm: 'flex' },
              color: 'black',
              gap: 2,
              fontWeight: 8,
              alignItems: 'center', // Vertically center the buttons
            }}
          >
            {/* Dropdown Button for Dry Fruits */}
            <Button
              color="inherit"
              onClick={handleOpenMenu} // Open dropdown
              endIcon={<ArrowDropDownIcon />} // Add dropdown icon
              sx={{
                color: 'black',
                fontSize: '1rem',
                fontWeight: 'bold',
                textTransform: 'none', // Keep text as is
                '&:hover': {
                  backgroundColor: 'lightgreen',
                  color: 'darkgreen',
                },
              }}
            >
              Products
            </Button>

            {/* Dropdown Menu */}
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleCloseMenu}
              PaperProps={{
                style: {
                  backgroundColor: 'lightgray', // Dropdown background color
                  borderRadius: '8px',
                  boxShadow: '0px 3px 6px rgba(0,0,0,0.2)',
                },
              }}
              MenuListProps={{
                sx: {
                  padding: 0, // Remove default padding
                },
              }}
            >
              {[
                { name: 'Almonds', path: '/1' },
                { name: 'Cashews', path: '/2' },
                { name: 'Walnuts', path: '/3' },
                { name: 'Pistachios', path: '/4' },
                { name: 'Raisins', path: '/5' },
                { name: 'Dried Apricots', path: '/6' },
                { name: 'Dates', path: '/7' },
              ].map((fruit) => (
                <MenuItem
                  key={fruit.name}
                  onClick={() => {
                    handleClick(fruit.path);
                    handleCloseMenu();
                  }}
                  sx={{
                    fontSize: '0.9rem',
                    fontWeight: 'medium',
                    color: 'black',
                    padding: '10px 20px',
                    '&:hover': {
                      backgroundColor: 'darkgreen',
                      color: 'white',
                    },
                  }}
                >
                  {fruit.name}
                </MenuItem>
              ))}
            </Menu>

            {/* Additional Navigation Buttons */}
            <Button
              color="inherit"
              onClick={() => handleClick('/about')}
              sx={{
                textTransform: 'none',
                fontWeight: 'bold',
                '&:hover': {
                  backgroundColor: 'lightgreen',
                  color: 'darkgreen',
                },
              }}
            >
              About Us
            </Button>
            <Button
              color="inherit"
              onClick={() => handleClick('/contact')}
              sx={{
                textTransform: 'none',
                fontWeight: 'bold',
                '&:hover': {
                  backgroundColor: 'lightgreen',
                  color: 'darkgreen',
                },
              }}
            >
              Contact Us
            </Button>
            {/* External Link to Facebook Page */}
            <Button
              color="inherit"
              component="a"
              href="https://www.facebook.com/profile.php?id=100077870918618" // Replace with your Facebook URL
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                textTransform: 'none',
                fontWeight: 'bold',
                '&:hover': {
                  backgroundColor: 'lightgreen',
                  color: 'darkgreen',
                },
              }}
            >
              Page
            </Button>
            {/* External Link to Blogs */}
            <Button
              color="inherit"
              component="a"
              href="https://famehyderblogs.blogspot.com/2021/03/fame-hyder-blogs.html" // Replace with your Blog URL
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                textTransform: 'none',
                fontWeight: 'bold',
                '&:hover': {
                  backgroundColor: 'lightgreen',
                  color: 'darkgreen',
                },
              }}
            >
              Blogs
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
