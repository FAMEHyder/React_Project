import { useState, useEffect } from 'react';
import { Box, Typography, Avatar, Grid, Paper, } from '@mui/material';

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
        <Box sx={{ p: 3, mt: 12 }}>
            <Grid container spacing={3} justifyContent="center">
                {/* Left Box: Profile Picture and Basic Info */}
                <Grid item xs={12} md={4}>
                    <Paper sx={{ p: 2, textAlign: 'center' }} elevation={3}>
                        <Avatar
                            alt="Profile Picture"
                            src={userData.profilePicture}
                            sx={{ width: 150, height: 150, mx: 'auto' }}
                        />
                        <Typography variant="h5" sx={{ mt: 2 }}>{userData.name}</Typography>
                        <Typography variant="subtitle1">@{userData.username}</Typography>
                    </Paper>
                </Grid>

                {/* Right Box: Additional User Details */}
                <Grid item xs={12} md={8}>
                    <Paper sx={{ p: 2 }} elevation={3}>
                        <Typography variant="body1" gutterBottom><strong>Name:</strong> {userData.name}</Typography>
                        <Typography variant="body1" gutterBottom><strong>Age:</strong> {userData.age}</Typography>
                        <Typography variant="body1" gutterBottom><strong>Username:</strong> {userData.username}</Typography>
                        <Typography variant="body1" gutterBottom><strong>Email:</strong> {userData.email}</Typography>
                        <Typography variant="body1" gutterBottom><strong>DOB:</strong> {userData.dob}</Typography>
                        <Typography variant="body1" gutterBottom><strong>Gender:</strong> {userData.gender}</Typography>
                        <Typography variant="body1" gutterBottom><strong>Address:</strong> {userData.address}</Typography>
                    </Paper>
                </Grid>
            </Grid>

            {/* Toggle window */}
            <Box container spacing={3}  mt={5} display={'flex'} flexDirection={'row'} justifyContent={'center'}>
                <Grid xs={12} md={8} sm={4}>
                        <Paper sx={{ height:'100px ' ,width: '600px',p: 2 }} elevation={3}>
                        <Typography sx={{textAlign:'center' ,fontWeight:'200px' }}>
                            My Orders
                        </Typography>
                        </Paper>
                </Grid>

                <Grid xs={12} md={8} sm={4} sx={{  ml: 5 }}>
                        <Paper sx={{ height:'100px ' ,width: '600px',p: 2}} elevation={3}>
                        <Typography sx={{textAlign:'center', fontWeight:'200px' }}>
                            Favorite products
                        </Typography>
                        </Paper>
                </Grid>
            </Box>
        </Box>
    );
};

export default UserProfile;
