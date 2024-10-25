import { useState ,useEffect} from 'react';
import { Box, Typography, Avatar, Grid, Paper, ToggleButton, ToggleButtonGroup } from '@mui/material';

const UserProfile = () => {
    const [userData, setUserData] = useState({});
    const [selectedSection, setSelectedSection] = useState(null);

    // Simulating fetching user data from a database or API
    useEffect(() => {
        const fetchedUserData = {
            profilePicture: 'https://via.placeholder.com/150', // Profile picture URL
            name: 'Zeeshan Haider',
            age: '24 years',
            username: 'Famehyer',
            email: 'famehyder9999@gail.com',
            dob: '21-08-2003',
            gender: 'Male',
            address: 'post office dambudas'
        };
        setUserData(fetchedUserData);
    }, []);

    const handleSectionChange = (event, newSection) => {
        setSelectedSection(newSection);
    };

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

            {/* Toggle Button Group for Orders and Favorites */}
            <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
                <ToggleButtonGroup
                    value={selectedSection}
                    exclusive
                    onChange={handleSectionChange}
                    sx={{
                        backgroundColor: 'white',
                        // borderRadius: '30px',
                        overflow: 'hidden',
                        border: '1px solid #E7F2EE',
                        '& .MuiToggleButtonGroup-grouped': {
                            // borderRadius: '30px',
                            border: 'none',
                            padding: '8px 20px',
                        },
                        '& .MUI-mouseOver':{
                       '&:hover': {
                                
                            },
                        },
                        '& .Mui-selected': {
                            backgroundColor: 'Green',
                            color: '#fff',
                        },
                        '& .MuiToggleButton-root': {
                            '&:hover': {
                                // backgroundColor: 'purple',
                                color: '#ffff',
                            },
                        },
                    }}
                >
                    <ToggleButton value="orders" variant = 'inherit' sx={{ textTransform: 'none' }}>
                        My Orders
                    </ToggleButton>
                    <ToggleButton value="favorites" variant = 'inherit' sx={{ textTransform: 'circle' }}>
                        My Favorite Products
                    </ToggleButton>
                </ToggleButtonGroup>
            </Box>

            {/* Display Content Based on the Selected Toggle */}
            <Box sx={{ mt: 3 }}>
                {selectedSection === 'orders' && (
                    <Paper sx={{ p: 2 }}>
                        <Typography variant="h6" sx={{}}>My Orders</Typography>
                    </Paper>
                )}
                {selectedSection === 'favorites' && (
                    <Paper sx={{ p: 2 }}>
                        <Typography variant="h6">My Favorite Products</Typography>
                    </Paper>
                )}
            </Box>
        </Box>
    );
};

export default UserProfile;
