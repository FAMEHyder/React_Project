import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Container, Grid, TextField, Button, CssBaseline } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

const CompanyPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = () => {
    // Handle search functionality
    console.log('Search:', searchQuery);
  };

  return (
    <div>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Company Name
          </Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="md" style={{ marginTop: '20px' }}>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} sm={8} md={6}>
            <TextField
              fullWidth
              label="Search"
              variant="outlined"
              value={searchQuery}
              onChange={handleSearchChange}
              InputProps={{
                endAdornment: (
                  <IconButton onClick={handleSearchSubmit} color="primary">
                    <SearchIcon />
                  </IconButton>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} sm={4} md={2}>
            <Button variant="contained" color="primary" fullWidth>
              Search
            </Button>
          </Grid>
        </Grid>

        <Grid container spacing={3} style={{ marginTop: '20px' }}>
          <Grid item xs={12}>
            <Typography variant="h4" gutterBottom>
              Welcome to Our Company Page
            </Typography>
            <Typography variant="body1" gutterBottom>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus
              ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
              mauris. Fusce nec tellus sed augue semper porta.
            </Typography>
          </Grid>
        </Grid>
      </Container>

      <footer style={{ backgroundColor: '#f5f5f5', padding: '20px', textAlign: 'center', marginTop: '20px' }}>
        <Typography variant="body2" color="textSecondary">
          © {new Date().getFullYear()} Company Name. All rights reserved.
        </Typography>
      </footer>
    </div>
  );
};

export default CompanyPage;
