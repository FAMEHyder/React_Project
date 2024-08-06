import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  InputBase,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Container,
  TextField,
  Box,
  Paper
} from '@mui/material';
import {
  Home as HomeIcon,
  Build as BuildIcon,
  School as SchoolIcon,
  Notes as NotesIcon,
  ContactMail as ContactMailIcon,
  Menu as MenuIcon,
  Search as SearchIcon
} from '@mui/icons-material';

function Application() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedPage, setSelectedPage] = useState('Home');
  const [searchQuery, setSearchQuery] = useState('');
  const [inputData, setInputData] = useState('');

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleListItemClick = (page) => {
    setSelectedPage(page);
    setDrawerOpen(false);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleInputChange = (event) => {
    setInputData(event.target.value);
  };

  const renderContent = () => {
    switch (selectedPage) {
      case 'Home':
        return <Typography variant="h4">WELCOME  TO  IYEF</Typography>;
      case 'Team':
        return <Typography variant="h4">Our Team</Typography>;
      case 'Our Courses':
        return <Typography variant="h4">Courses Offered</Typography>;
      case ' Our Notes':
        return <Typography variant="h4">Our Notes</Typography>;
      case 'Contact us':
        return (
          <div>
            <Typography variant="h4">Contact Us</Typography>
            <TextField label="Your Name" variant="outlined" fullWidth margin="normal" />
            <TextField label="Your Email" variant="outlined" fullWidth margin="normal" />
            <TextField label="Your Message" variant="outlined" fullWidth margin="normal" multiline rows={4} />
            <Button variant="contained" color="primary">Submit</Button>
          </div>
        );
      default:
        return <Typography variant="h4">WELCOME TO IYEF</Typography>;
    }
  };

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerToggle}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1,textAlign:'center' }}>
            IQRA YOUTH EDUCATIONAL FOUNDATION
          </Typography>
          <div style={{ position: 'relative', borderRadius: '4px', backgroundColor: 'navyblue', marginLeft: '8px', width: 'auto' }}>
            <div style={{ padding: '0 16px', height: '100%', position: 'absolute', pointerEvents: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <SearchIcon/>
            </div>
            <InputBase
              placeholder="Search Here"
              inputProps={{ 'aria-label': 'search' }}
              sx={{ color: 'black', paddingLeft: 'calc(1em + 32px)', transition: 'width 300ms', width: { xs: '100%', sm: '20ch' } }}
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
        </Toolbar>
      </AppBar>
      <Drawer open={drawerOpen} onClose={handleDrawerToggle}>
        <div role="presentation" onClick={handleDrawerToggle} onKeyDown={handleDrawerToggle}>
          <List>
            {['Home', 'Services', 'Courses', 'Notes', 'Contact'].map((text) => (
              <ListItem button key={text} onClick={() => handleListItemClick(text)}>
                <ListItemIcon>
                  {text === 'Home' && <HomeIcon />}
                  {text === 'Services' && <BuildIcon />}
                  {text === 'Courses' && <SchoolIcon />}
                  {text === 'Notes' && <NotesIcon />}
                  {text === 'Contact' && <ContactMailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
      <Container sx={{ marginTop: 8 }}>
        {renderContent()}
        <Box mt={4}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Typography variant="h6">Search Here</Typography>
            <TextField
              label="Input Data"
              variant="outlined"
              fullWidth
              margin="normal"
              value={inputData}
              onChange={handleInputChange}
            />
            <Button variant="contained" color="primary" onClick={() => alert(inputData)}>
              Show Input Data
            </Button>
          </Paper>
        </Box>
      </Container>
      <footer style={{ marginTop: '16px', padding: '16px', textAlign: 'center', backgroundColor: '#f8f8f8' }}>
        <Typography variant="body2" color="textSecondary">
          © {new Date().getFullYear()} IYEF. All rights reserved.
        </Typography>
      </footer>
    </div>
  );
}

export default Application;