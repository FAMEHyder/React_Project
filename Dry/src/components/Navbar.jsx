import { AppBar, Toolbar, Box, Button, Menu, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useCart } from '../context/Cart'; // Import the CartContext hook
import { Dialog, DialogTitle, DialogContent, DialogActions, List, ListItem, Typography } from '@mui/material';
import { useState } from 'react';
import Cl from '../Image/CompanyLogo.png';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'; // Dropdown icon

const Navbar = () => {
  const navigate = useNavigate();
  const { cart, deleteItem } = useCart();
  const [open, setOpen] = useState(false); // State to manage the dialog
  const [anchorEl, setAnchorEl] = useState(null); // State to manage dropdown

  const handleClick = (path) => {
    navigate(path);
  };

  // Deleting the item from the cart
  const handleDeleteItem = (id) => {
    deleteItem(id);
  };

  // Function to open dialog
  const handleOpenDialog = () => {
    setOpen(true);
  };

  // Function to close dialog
  const handleCloseDialog = () => {
    setOpen(false);
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
        <Box sx={{ width: '100%', display: { xs: 'none', sm: 'flex' }, gap: 1, marginLeft: 'auto', backgroundColor: 'darkgreen', justifyContent: 'end' }}>
          <Button color="inherit" onClick={() => handleClick('/Signin')}>Sign In</Button>
          <Button color="inherit" onClick={() => handleClick('/Signup')}>Sign Up</Button>
          <Button color="inherit" onClick={() => handleOpenDialog()}><ShoppingCartIcon /></Button>
          <Button color="inherit" onClick={() => handleOpenDialog()}><CheckCircleIcon /></Button>
        </Box>

        <Toolbar sx={{ justifyContent: 'space-between', flexWrap: 'wrap' }}>
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

          <Box sx={{ display: { xs: 'none', sm: 'flex' }, color: 'black', gap: 2, fontWeight: 8 }}>
            {/* Dropdown Button for Dry Fruits */}
            <Button
              color="inherit"
              onClick={handleOpenMenu} // Open dropdown
              endIcon={<ArrowDropDownIcon />} // Add dropdown icon
            >
              Dry Fruits
            </Button>

            {/* Dropdown Menu */}
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleCloseMenu}
            >
              <MenuItem onClick={() => { handleClick('/1'); handleCloseMenu(); }}>Almonds</MenuItem>
              <MenuItem onClick={() => { handleClick('/2'); handleCloseMenu(); }}>Cashews</MenuItem>
              <MenuItem onClick={() => { handleClick('/3'); handleCloseMenu(); }}>Walnuts</MenuItem>
              <MenuItem onClick={() => { handleClick('/4'); handleCloseMenu(); }}>Pistachios</MenuItem>
              <MenuItem onClick={() => { handleClick('/5'); handleCloseMenu(); }}>Raisins</MenuItem>
              <MenuItem onClick={() => { handleClick('/6'); handleCloseMenu(); }}>Dried Apricots</MenuItem>
              <MenuItem onClick={() => { handleClick('/7'); handleCloseMenu(); }}>Dates</MenuItem>
            </Menu>

            {/* Additional Buttons */}
            <Button color="inherit" onClick={() => handleClick('/about')}>About Us</Button>
            <Button color="inherit" onClick={() => handleClick('/contact')}>Contact Us</Button>
            <Button color="inherit" onClick={() => handleClick('/page')}>Page</Button>
            <Button color="inherit" onClick={() => handleClick('/blogs')}>Blogs</Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* MUI Dialog */}
      <Dialog open={open} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
        <DialogTitle>Cart Items</DialogTitle>
        <DialogContent>
          {/* List of Cart Items */}
          <List>
            {cart.map((item) => (
              <ListItem key={item.id} style={{ display: 'flex', alignItems: 'center' }}>
                {/* Display item image */}
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ width: 50, height: 50, marginRight: '16px' }} // Adjust size and spacing
                />
                {/* Display item details */}
                <Typography variant="body1">
                  {item.name} - ${item.price}
                </Typography>

                {/* Delete button */}
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => handleDeleteItem(item.id)}
                  style={{ marginLeft: 'auto' }}
                >
                  Delete
                </Button>
              </ListItem>
            ))}
          </List>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Navbar;
