// // Navbar.jsx
// import { AppBar, Toolbar, Box, Button, Menu, MenuItem } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// import { useCart } from '../context/Cart'; // Import the CartContext hook
// import {
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   List,
//   ListItem,
//   Typography,
// } from '@mui/material';
// import { useState } from 'react';
// import Cl from '../Image/CompanyLogo.png';

// const Navbar = () => {
//   const navigate = useNavigate();
//   const { cart, deleteItem } = useCart();
//   const [open, setOpen] = useState(false); // State to manage the dialog
//   const [anchorEl, setAnchorEl] = useState(null); // State to manage dropdown

//   const handleClick = (path) => {
//     navigate(path);
//   };

//   // Deleting the item from the cart
//   const handleDeleteItem = (id) => {
//     deleteItem(id);
//   };

//   // Function to open dialog
//   const handleOpenDialog = () => {
//     setOpen(true);
//   };

//   // Function to close dialog
//   const handleCloseDialog = () => {
//     setOpen(false);
//   };

//   // Open dropdown menu
//   const handleOpenMenu = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   // Close dropdown menu
//   const handleCloseMenu = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <>
//       <AppBar sx={{ backgroundColor: 'white' }}>
//         {/* Top Bar with Sign In, Sign Up, Cart, and Check Icons */}
//         <Box
//           sx={{
//             width: '100%',
//             display: { xs: 'none', sm: 'flex' },
//             gap: 1,
//             marginLeft: 'auto',
//             backgroundColor: 'darkgreen',
//             justifyContent: 'end',
//             padding: '0 16px', // Added padding for better spacing
//           }}
//         >
//           <Button color="inherit" onClick={() => handleClick('/signin')}>
//             Sign In
//           </Button>
//           <Button color="inherit" onClick={() => handleClick('/signup')}>
//             Sign Up
//           </Button>
//           <Button color="inherit" onClick={handleOpenDialog}>
//             <ShoppingCartIcon />
//           </Button>
//           <Button color="inherit" onClick={handleOpenDialog}>
//             <CheckCircleIcon />
//           </Button>
//         </Box>

//         {/* Main Toolbar with Logo and Navigation Links */}
//         <Toolbar sx={{ justifyContent: 'space-between', flexWrap: 'wrap' }}>
//           {/* Company Logo */}
//           <Box
//             onClick={() => handleClick('/')}
//             sx={{
//               paddingX: { xs: 2, sm: 4, md: 8 },
//               cursor: 'pointer',
//               backgroundImage: `url(${Cl})`,
//               backgroundSize: 'contain',
//               backgroundRepeat: 'no-repeat',
//               backgroundPosition: 'left',
//               height: 70,
//               width: '150px',
//               marginRight: 10,
//               transformOrigin: 'left',
//             }}
//           />

//           {/* Navigation Links */}
//           <Box
//             sx={{
//               display: { xs: 'none', sm: 'flex' },
//               color: 'black',
//               gap: 2,
//               fontWeight: 8,
//               alignItems: 'center', // Vertically center the buttons
//             }}
//           >
//             {/* Dropdown Button for Dry Fruits */}
//             <Button
//               color="inherit"
//               onClick={handleOpenMenu} // Open dropdown
//               endIcon={<ArrowDropDownIcon />} // Add dropdown icon
//               sx={{
//                 color: 'black',
//                 fontSize: '1rem',
//                 fontWeight: 'bold',
//                 textTransform: 'none', // Keep text as is
//                 '&:hover': {
//                   backgroundColor: 'lightgreen',
//                   color: 'darkgreen',
//                 },
//               }}
//             >
//               Products
//             </Button>

//             {/* Dropdown Menu */}
//             <Menu
//               anchorEl={anchorEl}
//               open={Boolean(anchorEl)}
//               onClose={handleCloseMenu}
//               PaperProps={{
//                 style: {
//                   backgroundColor: 'lightgray', // Dropdown background color
//                   borderRadius: '8px',
//                   boxShadow: '0px 3px 6px rgba(0,0,0,0.2)',
//                 },
//               }}
//               MenuListProps={{
//                 sx: {
//                   padding: 0, // Remove default padding
//                 },
//               }}
//             >
//               {[
//                 { name: 'Almonds', path: '/1' },
//                 { name: 'Cashews', path: '/2' },
//                 { name: 'Walnuts', path: '/3' },
//                 { name: 'Pistachios', path: '/4' },
//                 { name: 'Raisins', path: '/5' },
//                 { name: 'Dried Apricots', path: '/6' },
//                 { name: 'Dates', path: '/7' },
//               ].map((fruit) => (
//                 <MenuItem
//                   key={fruit.name}
//                   onClick={() => {
//                     handleClick(fruit.path);
//                     handleCloseMenu();
//                   }}
//                   sx={{
//                     fontSize: '0.9rem',
//                     fontWeight: 'medium',
//                     color: 'black',
//                     padding: '10px 20px',
//                     '&:hover': {
//                       backgroundColor: 'darkgreen',
//                       color: 'white',
//                     },
//                   }}
//                 >
//                   {fruit.name}
//                 </MenuItem>
//               ))}
//             </Menu>

//             {/* Additional Navigation Buttons */}
//             <Button
//               color="inherit"
//               onClick={() => handleClick('/about')}
//               sx={{
//                 textTransform: 'none',
//                 fontWeight: 'bold',
//                 '&:hover': {
//                   backgroundColor: 'lightgreen',
//                   color: 'darkgreen',
//                 },
//               }}
//             >
//               About Us
//             </Button>
//             <Button
//               color="inherit"
//               onClick={() => handleClick('/contact')}
//               sx={{
//                 textTransform: 'none',
//                 fontWeight: 'bold',
//                 '&:hover': {
//                   backgroundColor: 'lightgreen',
//                   color: 'darkgreen',
//                 },
//               }}
//             >
//               Contact Us
//             </Button>
//             {/* External Link to Facebook Page */}
//             <Button
//               color="inherit"
//               component="a"
//               href="https://www.facebook.com/profile.php?id=100077870918618" // Replace with your Facebook URL
//               target="_blank"
//               rel="noopener noreferrer"
//               sx={{
//                 textTransform: 'none',
//                 fontWeight: 'bold',
//                 '&:hover': {
//                   backgroundColor: 'lightgreen',
//                   color: 'darkgreen',
//                 },
//               }}
//             >
//               Page
//             </Button>
//             {/* External Link to Blogs */}
//             <Button
//               color="inherit"
//               component="a"
//               href="https://famehyderblogs.blogspot.com/2021/03/fame-hyder-blogs.html" // Replace with your Blog URL
//               target="_blank"
//               rel="noopener noreferrer"
//               sx={{
//                 textTransform: 'none',
//                 fontWeight: 'bold',
//                 '&:hover': {
//                   backgroundColor: 'lightgreen',
//                   color: 'darkgreen',
//                 },
//               }}
//             >
//               Blogs
//             </Button>
//           </Box>
//         </Toolbar>
//       </AppBar>

//       {/* MUI Dialog for Cart */}
//       <Dialog open={open} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
//         <DialogTitle>Cart Items</DialogTitle>
//         <DialogContent>
//           {/* List of Cart Items */}
//           <List>
//             {cart.map((item) => (
//               <ListItem
//                 key={item.id}
//                 sx={{ display: 'flex', alignItems: 'center' }}
//               >
//                 {/* Display item image */}
//                 <img
//                   src={item.image}
//                   alt={item.name}
//                   style={{ width: 50, height: 50, marginRight: '16px' }} // Adjust size and spacing
//                 />
//                 {/* Display item details */}
//                 <Typography variant="body1">
//                   {item.name} - ${item.price}
//                 </Typography>

//                 {/* Delete button */}
//                 <Button
//                   variant="contained"
//                   color="secondary"
//                   onClick={() => handleDeleteItem(item.id)}
//                   sx={{ marginLeft: 'auto' }}
//                 >
//                   Delete
//                 </Button>
//               </ListItem>
//             ))}
//           </List>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleCloseDialog}>Close</Button>
//         </DialogActions>
//       </Dialog>
//     </>
//   );
// };

// export default Navbar;


















// Navbar.jsx
// import { AppBar, Toolbar, Box, Button, Menu, MenuItem } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// import { useCart } from '../context/Cart'; // Import the CartContext hook
// import {
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   List,
//   ListItem,
//   Typography,
// } from '@mui/material';
// import { useState } from 'react';
// import Cl from '../Image/CompanyLogo.png';

// const Navbar = () => {
//   const navigate = useNavigate();
//   const { cart, deleteItem } = useCart();
//   const [open, setOpen] = useState(false); // State to manage the dialog
//   const [anchorEl, setAnchorEl] = useState(null); // State to manage dropdown

//   const handleClick = (path) => {
//     navigate(path);
//   };

//   const handleDeleteItem = (id) => {
//     deleteItem(id);
//   };

//   const handleOpenDialog = () => {
//     setOpen(true);
//   };

//   const handleCloseDialog = () => {
//     setOpen(false);
//   };

//   const handleOpenMenu = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleCloseMenu = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <>
//       <AppBar sx={{ backgroundColor: 'white' }}>
//         {/* Top Bar with Sign In, Sign Up, Cart, and Check Icons */}
//         <Box
//           sx={{
//             width: '100%',
//             display: { xs: 'none', sm: 'flex' },
//             gap: 1,
//             marginLeft: 'auto',
//             backgroundColor: 'darkgreen',
//             justifyContent: 'end',
//             padding: '0 16px',
//           }}
//         >
//           <Button color="inherit" onClick={() => handleClick('/signin')}>
//             Sign In
//           </Button>
//           <Button color="inherit" onClick={() => handleClick('/signup')}>
//             Sign Up
//           </Button>
//           <Button color="inherit" onClick={handleOpenDialog}>
//             <ShoppingCartIcon />
//           </Button>
//           <Button color="inherit" onClick={handleOpenDialog}>
//             <CheckCircleIcon />
//           </Button>
//         </Box>

//         {/* Main Toolbar with Logo and Navigation Links */}
//         <Toolbar sx={{ justifyContent: 'space-between', flexWrap: 'wrap' }}>
//           {/* Company Logo */}
//           <Box
//             onClick={() => handleClick('/')}
//             sx={{
//               paddingX: { xs: 2, sm: 4, md: 8 },
//               cursor: 'pointer',
//               backgroundImage: `url(${Cl})`,
//               backgroundSize: 'contain',
//               backgroundRepeat: 'no-repeat',
//               backgroundPosition: 'left',
//               height: 70,
//               width: '150px',
//               marginRight: 10,
//               transformOrigin: 'left',
//             }}
//           />

//           {/* Navigation Links */}
//           <Box
//             sx={{
//               display: { xs: 'none', sm: 'flex' },
//               color: 'black',
//               gap: 2,
//               fontWeight: 8,
//               alignItems: 'center',
//             }}
//           >
//             {/* Dropdown Button for Dry Fruits */}
//             <Button
//               color="inherit"
//               onClick={handleOpenMenu}
//               endIcon={<ArrowDropDownIcon />}
//               sx={{
//                 color: 'black',
//                 fontSize: '1rem',
//                 fontWeight: 'bold',
//                 textTransform: 'none',
//                 '&:hover': {
//                   backgroundColor: 'lightgreen',
//                   color: 'darkgreen',
//                 },
//               }}
//             >
//               Products
//             </Button>

//             {/* Dropdown Menu */}
//             <Menu
//               anchorEl={anchorEl}
//               open={Boolean(anchorEl)}
//               onClose={handleCloseMenu}
//               PaperProps={{
//                 style: {
//                   backgroundColor: 'lightgray',
//                   borderRadius: '8px',
//                   boxShadow: '0px 3px 6px rgba(0,0,0,0.2)',
//                 },
//               }}
//               MenuListProps={{
//                 sx: {
//                   padding: 0,
//                 },
//               }}
//             >
//               {[
//                 { name: 'Almonds', path: '/almonds' },
//                 { name: 'Cashews', path: '/cashews' },
//                 { name: 'Walnuts', path: '/walnuts' },
//                 { name: 'Pistachios', path: '/pistachios' },
//                 { name: 'Raisins', path: '/raisins' },
//                 { name: 'Dried Apricots', path: '/dried-apricots' },
//                 { name: 'Dates', path: '/dates' },
//               ].map((fruit) => (
//                 <MenuItem
//                   key={fruit.name}
//                   onClick={() => {
//                     handleClick(fruit.path);
//                     handleCloseMenu();
//                   }}
//                   sx={{
//                     fontSize: '0.9rem',
//                     fontWeight: 'medium',
//                     color: 'black',
//                     padding: '10px 20px',
//                     '&:hover': {
//                       backgroundColor: 'darkgreen',
//                       color: 'white',
//                     },
//                   }}
//                 >
//                   {fruit.name}
//                 </MenuItem>
//               ))}
//             </Menu>

//             {/* Additional Navigation Buttons */}
//             <Button
//               color="inherit"
//               onClick={() => handleClick('/about')}
//               sx={{
//                 textTransform: 'none',
//                 fontWeight: 'bold',
//                 '&:hover': {
//                   backgroundColor: 'lightgreen',
//                   color: 'darkgreen',
//                 },
//               }}
//             >
//               About Us
//             </Button>
//             <Button
//               color="inherit"
//               onClick={() => handleClick('/contact')}
//               sx={{
//                 textTransform: 'none',
//                 fontWeight: 'bold',
//                 '&:hover': {
//                   backgroundColor: 'lightgreen',
//                   color: 'darkgreen',
//                 },
//               }}
//             >
//               Contact Us
//             </Button>
//             <Button
//               color="inherit"
//               component="a"
//               href="https://www.facebook.com/profile.php?id=100077870918618"
//               target="_blank"
//               rel="noopener noreferrer"
//               sx={{
//                 textTransform: 'none',
//                 fontWeight: 'bold',
//                 '&:hover': {
//                   backgroundColor: 'lightgreen',
//                   color: 'darkgreen',
//                 },
//               }}
//             >
//               Page
//             </Button>
//             <Button
//               color="inherit"
//               component="a"
//               href="https://famehyderblogs.blogspot.com/2021/03/fame-hyder-blogs.html"
//               target="_blank"
//               rel="noopener noreferrer"
//               sx={{
//                 textTransform: 'none',
//                 fontWeight: 'bold',
//                 '&:hover': {
//                   backgroundColor: 'lightgreen',
//                   color: 'darkgreen',
//                 },
//               }}
//             >
//               Blogs
//             </Button>
//           </Box>
//         </Toolbar>
//       </AppBar>

//       {/* MUI Dialog for Cart */}
//       <Dialog open={open} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
//         <DialogTitle>Cart Items</DialogTitle>
//         <DialogContent>
//           <List>
//             {cart.map((item) => (
//               <ListItem
//                 key={item.id}
//                 sx={{ display: 'flex', alignItems: 'center' }}
//               >
//                 <img
//                   src={item.image}
//                   alt={item.name}
//                   style={{ width: 50, height: 50, marginRight: '16px' }}
//                 />
//                 <Typography variant="body1">
//                   {item.name} - ${item.price}
//                 </Typography>
//                 <Button
//                   variant="contained"
//                   color="secondary"
//                   onClick={() => handleDeleteItem(item.id)}
//                   sx={{ marginLeft: 'auto' }}
//                 >
//                   Delete
//                 </Button>
//               </ListItem>
//             ))}
//           </List>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleCloseDialog}>Close</Button>
//         </DialogActions>
//       </Dialog>
//     </>
//   );
// };

// export default Navbar;








// src/components/Navbar.js
// import { useState } from 'react';
// import { AppBar, Toolbar, Box, Button, Menu, MenuItem, Dialog, DialogTitle, DialogContent, DialogActions, List, ListItem, Typography } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// import { useCart } from '../context/Cart'; // Ensure this path is correct
// import Cl from '../Image/CompanyLogo.png';

// const Navbar = () => {
//   const navigate = useNavigate();
//   const { cart, deleteItem } = useCart();
//   const [open, setOpen] = useState(false); // State to manage the dialog
//   const [anchorEl, setAnchorEl] = useState(null); // State to manage dropdown

//   const handleNavigate = (path) => {
//     navigate(path);
//   };

//   const handleDeleteItem = (id) => {
//     deleteItem(id);
//   };

//   const handleOpenDialog = () => {
//     setOpen(true);
//   };

//   const handleCloseDialog = () => {
//     setOpen(false);
//   };

//   const handleOpenMenu = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleCloseMenu = () => {
//     setAnchorEl(null);
//   };

//   // Update the category paths to match the routing
//   const categories = [
//     { name: 'Almonds', path: '/category/Almonds' },
//     { name: 'Cashews', path: '/category/Cashew' },
//     { name: 'Walnuts', path: '/category/Walnut' },
//     { name: 'Pistachios', path: '/category/Pistachio' },
//     { name: 'Raisins', path: '/category/Raisins' },
//     { name: 'Dried Apricots', path: '/category/Apricot' },
//     { name: 'Dates', path: '/category/Dates' },
//   ];

//   return (
//     <>
//       <AppBar position="static" sx={{ backgroundColor: 'white' }}>
//         {/* Top Bar with Sign In, Sign Up, Cart, and Check Icons */}
//         <Box
//           sx={{
//             width: '100%',
//             display: { xs: 'none', sm: 'flex' },
//             gap: 1,
//             marginLeft: 'auto',
//             backgroundColor: 'darkgreen',
//             justifyContent: 'end',
//             padding: '0 16px',
//           }}
//         >
//           <Button color="inherit" onClick={() => handleNavigate('/signin')}>
//             Sign In
//           </Button>
//           <Button color="inherit" onClick={() => handleNavigate('/signup')}>
//             Sign Up
//           </Button>
//           <Button color="inherit" onClick={handleOpenDialog}>
//             <ShoppingCartIcon />
//           </Button>
//           <Button color="inherit" onClick={handleOpenDialog}>
//             <CheckCircleIcon />
//           </Button>
//         </Box>

//         {/* Main Toolbar with Logo and Navigation Links */}
//         <Toolbar sx={{ justifyContent: 'space-between', flexWrap: 'wrap' }}>
//           {/* Company Logo */}
//           <Box
//             onClick={() => handleNavigate('/')}
//             sx={{
//               paddingX: { xs: 2, sm: 4, md: 8 },
//               cursor: 'pointer',
//               backgroundImage: `url(${Cl})`,
//               backgroundSize: 'contain',
//               backgroundRepeat: 'no-repeat',
//               backgroundPosition: 'left',
//               height: 70,
//               width: '150px',
//               marginRight: 10,
//               transformOrigin: 'left',
//             }}
//           />

//           {/* Navigation Links */}
//           <Box
//             sx={{
//               display: { xs: 'none', sm: 'flex' },
//               color: 'black',
//               gap: 2,
//               fontWeight: 8,
//               alignItems: 'center',
//             }}
//           >
//             {/* Dropdown Button for Products */}
//             <Button
//               color="inherit"
//               onClick={handleOpenMenu}
//               endIcon={<ArrowDropDownIcon />}
//               sx={{
//                 color: 'black',
//                 fontSize: '1rem',
//                 fontWeight: 'bold',
//                 textTransform: 'none',
//                 '&:hover': {
//                   backgroundColor: 'lightgreen',
//                   color: 'darkgreen',
//                 },
//               }}
//             >
//               Products
//             </Button>

//             {/* Dropdown Menu */}
//             <Menu
//               anchorEl={anchorEl}
//               open={Boolean(anchorEl)}
//               onClose={handleCloseMenu}
//               PaperProps={{
//                 style: {
//                   backgroundColor: 'lightgray',
//                   borderRadius: '8px',
//                   boxShadow: '0px 3px 6px rgba(0,0,0,0.2)',
//                 },
//               }}
//               MenuListProps={{
//                 sx: {
//                   padding: 0,
//                 },
//               }}
//             >
//               {categories.map((fruit) => (
//                 <MenuItem
//                   key={fruit.name}
//                   onClick={() => {
//                     handleNavigate(fruit.path);
//                     handleCloseMenu();
//                   }}
//                   sx={{
//                     fontSize: '0.9rem',
//                     fontWeight: 'medium',
//                     color: 'black',
//                     padding: '10px 20px',
//                     '&:hover': {
//                       backgroundColor: 'darkgreen',
//                       color: 'white',
//                     },
//                   }}
//                 >
//                   {fruit.name}
//                 </MenuItem>
//               ))}
//             </Menu>

//             {/* Additional Navigation Buttons */}
//             <Button
//               color="inherit"
//               onClick={() => handleNavigate('/about')}
//               sx={{
//                 textTransform: 'none',
//                 fontWeight: 'bold',
//                 '&:hover': {
//                   backgroundColor: 'lightgreen',
//                   color: 'darkgreen',
//                 },
//               }}
//             >
//               About Us
//             </Button>
//             <Button
//               color="inherit"
//               onClick={() => handleNavigate('/contact')}
//               sx={{
//                 textTransform: 'none',
//                 fontWeight: 'bold',
//                 '&:hover': {
//                   backgroundColor: 'lightgreen',
//                   color: 'darkgreen',
//                 },
//               }}
//             >
//               Contact Us
//             </Button>
//             <Button
//               color="inherit"
//               component="a"
//               href="https://www.facebook.com/profile.php?id=100077870918618"
//               target="_blank"
//               rel="noopener noreferrer"
//               sx={{
//                 textTransform: 'none',
//                 fontWeight: 'bold',
//                 '&:hover': {
//                   backgroundColor: 'lightgreen',
//                   color: 'darkgreen',
//                 },
//               }}
//             >
//               Page
//             </Button>
//             <Button
//               color="inherit"
//               component="a"
//               href="https://famehyderblogs.blogspot.com/2021/03/fame-hyder-blogs.html"
//               target="_blank"
//               rel="noopener noreferrer"
//               sx={{
//                 textTransform: 'none',
//                 fontWeight: 'bold',
//                 '&:hover': {
//                   backgroundColor: 'lightgreen',
//                   color: 'darkgreen',
//                 },
//               }}
//             >
//               Blogs
//             </Button>
//           </Box>
//         </Toolbar>
//       </AppBar>

//       {/* MUI Dialog for Cart */}
//       <Dialog open={open} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
//         <DialogTitle>Cart Items</DialogTitle>
//         <DialogContent>
//           <List>
//             {cart.length > 0 ? (
//               cart.map((item) => (
//                 <ListItem
//                   key={item.id}
//                   sx={{ display: 'flex', alignItems: 'center' }}
//                 >
//                   <img
//                     src={item.image}
//                     alt={item.name}
//                     style={{ width: 50, height: 50, marginRight: '16px' }}
//                   />
//                   <Typography variant="body1">
//                     {item.name} - ${item.price}
//                   </Typography>
//                   <Button
//                     variant="contained"
//                     color="secondary"
//                     onClick={() => handleDeleteItem(item.id)}
//                     sx={{ marginLeft: 'auto' }}
//                   >
//                     Delete
//                   </Button>
//                 </ListItem>
//               ))
//             ) : (
//               <Typography variant="body1" sx={{ padding: '10px' }}>
//                 Your cart is empty.
//               </Typography>
//             )}
//           </List>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleCloseDialog}>Close</Button>
//         </DialogActions>
//       </Dialog>
//     </>
//   );
// };

// export default Navbar;


// src/components/Navbar.js
import  { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Menu,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  List,
  ListItem,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useCart } from '../context/Cart'; // Import the CartContext hook
import Cl from '../Image/CompanyLogo.png';

const Navbar = () => {
  const navigate = useNavigate();
  const { cart, deleteItem } = useCart();
  const [open, setOpen] = useState(false); // State to manage the dialog
  const [anchorEl, setAnchorEl] = useState(null); // State to manage dropdown

  const handleClick = (path) => {
    navigate(path);
  };

  const handleDeleteItem = (id) => {
    deleteItem(id);
  };

  const handleOpenDialog = () => {
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
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
          <Button color="inherit" onClick={handleOpenDialog}>
            <ShoppingCartIcon />
          </Button>
          <Button color="inherit" onClick={handleOpenDialog}>
            <CheckCircleIcon />
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

      {/* MUI Dialog for Cart */}
      <Dialog open={open} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
        <DialogTitle>Cart Items</DialogTitle>
        <DialogContent>
          <List>
            {cart.length > 0 ? (
              cart.map((item) => (
                <ListItem
                  key={item.id}
                  sx={{ display: 'flex', alignItems: 'center' }}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{ width: 50, height: 50, marginRight: '16px' }}
                  />
                  <Typography variant="body1">
                    {item.name} - ${item.price.toFixed(2)}
                  </Typography>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleDeleteItem(item.id)}
                    sx={{ marginLeft: 'auto' }}
                  >
                    Delete
                  </Button>
                </ListItem>
              ))
            ) : (
              <Typography variant="body1" sx={{ padding: 2 }}>
                Your cart is empty.
              </Typography>
            )}
          </List>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Close</Button>
          {/* You can add a checkout button here if needed */}
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Navbar;
