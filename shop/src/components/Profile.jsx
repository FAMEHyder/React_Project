import { useState, useEffect } from 'react';
import { Box, Typography, Avatar, Grid } from '@mui/material';

const UserProfile = () => {
  const [userData, setUserData] = useState({});

  // Simulating fetching user data from a database or API
  useEffect(() => {
    // Replace with actual API call
    const fetchedUserData = {
      profilePicture: 'https://via.placeholder.com/150', // Profile picture URL
      name: 'John Doe',
      username: 'johndoe123',
      email: 'johndoe@example.com',
      dob: '1990-01-01',
      gender: 'Male',
    };
    setUserData(fetchedUserData);
  }, []);

  return (
    <Box sx={{ p: 3 ,mt:12,}}>
      <Grid container spacing={3} alignItems="center" display={'flex'} flexDirection={'column'} >
        {/* Profile Picture */}
        <Grid item xs={12} sm={4} md={3}>
          <Avatar
            alt="Profile Picture"
            src={userData.profilePicture}
            sx={{ width: 150, height: 150 }}
          />
        </Grid>

        {/* User Information */}
        
        <Grid item xs={12} sm={8} md={9}>
          <Typography variant="h5">{userData.name}</Typography>
          <Typography variant="subtitle1">@{userData.username}</Typography>
          <Typography variant="body1">Email: {userData.email}</Typography>
          <Typography variant="body1">DOB: {userData.dob}</Typography>
          <Typography variant="body1">Gender: {userData.gender}</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default UserProfile;
