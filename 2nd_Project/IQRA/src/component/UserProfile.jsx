import { useState, useEffect } from 'react';
import { useAuthStore } from '../authContext/auth';
import {
    Box,
    Typography,
    Avatar,
    Grid,
    Paper,
} from '@mui/material';

const UserProfile = () => {
    const [userData, setUserData] = useState({});
    const { user } = useAuthStore();

    useEffect(() => {
        const fetchedUserData = {
            profilePicture: 'https://via.placeholder.com/150',
            name: user.firstName,
            age: user.age,
            username: user.username,
            email: user.email,
            dob: user.DOB,
            gender: user.gender,
            address: user.address,
        };
        setUserData(fetchedUserData);
    }, [user]);

    return (
        <Box sx={{ p: 3, mt: 10 }}>
            <Grid container spacing={3} justifyContent="center">
                <Grid item xs={12} md={4}>
                    <Paper sx={{ p: 3, textAlign: 'center' }} elevation={3}>
                        <Avatar
                            alt="Profile Picture"
                            src={userData.profilePicture}
                            sx={{ width: 150, height: 150, mx: 'auto' }}
                        />
                        <Typography variant="h5" sx={{ mt: 2 }}>{user.fullName}</Typography>
                        <Typography variant="subtitle1">@{user.userName}</Typography>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={8}>
                    <Paper sx={{ p: 3 }} elevation={3}>
                        {[ { label: 'Name', value: user.fullName },
                           { label: 'Class', value: user.Class },
                           { label: 'Username', value: user.userName },
                           { label: 'Email', value: user.email },
                           { label: 'DOB', value: user.dob },
                           { label: 'Address', value: user.address },
                        ].map((item, index) => (
                            <Typography key={index} variant="body1" gutterBottom>
                                <strong>{item.label}:</strong> {item.value}
                            </Typography>
                        ))}
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default UserProfile;