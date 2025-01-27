import { useState, useEffect } from 'react';
import { useAuthStore } from '../authContext/auth';
import {
    Box,
    Typography,
    Avatar,
    Grid,
    Paper,
    Skeleton
} from '@mui/material';

const UserProfile = () => {
    const {user} = useAuthStore()
    const [userData, setUserData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        
        const fetchedUserData = {
            name: user.fullName,
            age: 23,
            username: user.userName,
            email: "abc@xyz.com",
            dob: "21-12-2003",
            gender: 'Male',
            address: "post office no. 123, street name 456, city name 789"
        };
        setLoading(true);
        setTimeout(() => {
            setUserData(fetchedUserData);  
            setLoading(false);  
        }, 2000);  
    }, []);

    return (
        <Box sx={{ p: 3, mt: 12, ml: { xs: 0, sm: 0, md: '20px' } }}> 
            <Grid container direction={'column'} spacing={3} justifyContent="center">
                <Grid item xs={12} md={4} order={{ xs: 1, md: 1 }}>
                    <Paper sx={{ p: 2, textAlign: 'center' }} elevation={3}>
                        {loading ? (
                            <Skeleton variant="circular" width={150} height={150} sx={{ mx: 'auto' }} />
                        ) : (
                            <Avatar
                                alt="Profile Picture"
                                src={userData.profilePicture || 'https://via.placeholder.com/150'}
                                sx={{ width: 150, height: 150, mx: 'auto' }}
                            />
                        )}
                        {loading ? (
                            <Skeleton variant="text" width="60%" sx={{ mx: 'auto', mt: 2 }} />
                        ) : (
                            <Typography variant="h5" sx={{ mt: 2 }}>{userData.name}</Typography>
                        )}
                        {loading ? (
                            <Skeleton variant="text" width="40%" sx={{ mx: 'auto' }} />
                        ) : (
                            <Typography variant="subtitle1">@{userData.username}</Typography>
                        )}
                    </Paper>
                </Grid>

                <Grid item xs={12} md={8} order={{ xs: 2, md: 2 }}>
                    <Paper sx={{ p: 2 }} elevation={3}>
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
