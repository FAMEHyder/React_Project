import  { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Menu,
  MenuItem,
 
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Cl from '../Image/CompanyLogo.png';

const Navbar = (onCategoryChange) => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null); 

  const handleClick = (path) => {
    navigate(path);
  };

  
  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const categories = [
    { name: 'Almonds', path: 'Almonds' },
    { name: 'Cashews', path: 'Cashews' },
    { name: 'Walnuts', path: 'Walnuts' },
    { name: 'Pistachios', path: 'Pistachio' },
    { name: 'Raisins', path: 'Raisins' },
    { name: 'Dried Apricots', path: 'Apricot' },
    { name: 'Dates', path: 'Dates' },
  ];

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
              alignItems: 'center',
            }}
          >
            {/* Dropdown Button for Dry Fruits */}
            <Button
              color="inherit"
              onClick={handleOpenMenu}
              endIcon={<ArrowDropDownIcon />}
              sx={{
                color: 'black',
                fontSize: '1rem',
                fontWeight: 'bold',
                textTransform: 'none',
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
                  backgroundColor: 'lightgray',
                  borderRadius: '8px',
                  boxShadow: '0px 3px 6px rgba(0,0,0,0.2)',
                },
              }}
              MenuListProps={{
                sx: {
                  padding: 0,
                },
              }}
            >
              {categories.map((fruit) => (
                <MenuItem
                  key={fruit.name}
                  onClick={() => {
                    handleClick(`/category/${fruit.path}`);
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
            <Button
              color="inherit"
              component="a"
              href="https://www.facebook.com/profile.php?id=100077870918618"
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
            <Button
              color="inherit"
              component="a"
              href="https://famehyderblogs.blogspot.com/2021/03/fame-hyder-blogs.html"
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