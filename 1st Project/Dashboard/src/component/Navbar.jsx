import { AppBar, Toolbar, IconButton, InputBase, Badge, Avatar, Box } from '@mui/material';
import { Menu as MenuIcon, Search as SearchIcon, Notifications as NotificationsIcon } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

// Styled components
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: '#f0f3f7',
  marginRight: theme.spacing(2),
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 1),
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  marginLeft: theme.spacing(1),
  flex: 1,
}));

const Navbar = () => {
  return (
    <AppBar position="static" color="transparent" elevation={0} sx={{ padding: '8px' ,bgcolor: 'green',height: '70px'}}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between'  }}>
        {/* Left side */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {/* Logo */}
          <IconButton edge="start" color="inherit" aria-label="logo">
            <Avatar src="/path/to/logo.png" alt="logo" sx={{ bgcolor: '#625DF5' }} />
          </IconButton>

          {/* Menu Icon */}
          <IconButton color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>

          {/* Search Bar */}
          <Search>
            <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
          </Search>
        </Box>

        {/* Right side */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          {/* Language Icon */}
          <Avatar sx={{ width: 30, height: 30 }} src="/path/to/uk-flag-icon.png" alt="language" />

          {/* Notification Icon */}
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>

          {/* Profile Picture */}
          <Avatar src="/path/to/profile-picture.jpg" alt="profile" />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
