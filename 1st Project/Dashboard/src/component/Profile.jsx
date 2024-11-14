import { useState, useEffect } from 'react';
import {
    Box,
    Typography,
    Avatar,
    Grid,
    Paper,
    Skeleton
} from '@mui/material';

const UserProfile = () => {
    const [userData, setUserData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate fetching user data
        const fetchedUserData = {
            name: "Zeshan",
            age: 23,
            username: "FAME",
            email: "abc@xyz.com",
            dob: "21-12-2003",
            gender: 'Male',
            address: "post office no. 123, street name 456, city name 789"
        };
        setLoading(true);
        setTimeout(() => {
            setUserData(fetchedUserData);  // Simulate data fetch
            setLoading(false);  // Stop loading after fetching data
        }, 2000);  // Simulate delay
    }, []);

    return (
        <Box sx={{ p: 3, mt: 12, ml: { xs: 0, sm: 0, md: '250px' } }}> {/* Added ml for sidebar offset */}
            <Grid container spacing={3} justifyContent="center">
                <Grid item xs={12} md={4}>
                    <Paper sx={{ p: 2, textAlign: 'center' }} elevation={3}>
                        {/* Profile Picture with Skeleton Loader */}
                        {loading ? (
                            <Skeleton variant="circular" width={150} height={150} sx={{ mx: 'auto' }} />
                        ) : (
                            <Avatar
                                alt="Profile Picture"
                                src={userData.profilePicture || 'https://via.placeholder.com/150'}
                                sx={{ width: 150, height: 150, mx: 'auto' }}
                            />
                        )}
                        {/* Name with Skeleton Loader */}
                        {loading ? (
                            <Skeleton variant="text" width="60%" sx={{ mx: 'auto', mt: 2 }} />
                        ) : (
                            <Typography variant="h5" sx={{ mt: 2 }}>{userData.name}</Typography>
                        )}
                        {/* Username with Skeleton Loader */}
                        {loading ? (
                            <Skeleton variant="text" width="40%" sx={{ mx: 'auto' }} />
                        ) : (
                            <Typography variant="subtitle1">@{userData.username}</Typography>
                        )}
                    </Paper>
                </Grid>

                <Grid item xs={12} md={8}>
                    <Paper sx={{ p: 2 }} elevation={3}>
                        {/* User Info Fields with Skeleton Loader */}
                        {loading ? (
                            <>
                                {[...Array(6)].map((_, index) => (
                                    <Skeleton key={index} variant="text" width="80%" sx={{ mb: 1 }} />
                                ))}
                            </>
                        ) : (
                            [
                                { label: 'Name', value: userData.name },
                                { label: 'Age', value: userData.age },
                                { label: 'Username', value: userData.username },
                                { label: 'Email', value: userData.email },
                                { label: 'DOB', value: userData.dob },
                                { label: 'Gender', value: userData.gender },
                                { label: 'Address', value: userData.address },
                            ].map((item, index) => (
                                <Typography key={index} variant="body1" gutterBottom>
                                    <strong>{item.label}:</strong> {item.value}
                                </Typography>
                            ))
                        )}
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default UserProfile;
