import React , { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DateRangeIcon from '@mui/icons-material/DateRange';
import WorkIcon from '@mui/icons-material/Work';
import { Gradient } from '@mui/icons-material';

const RegistrationForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [occupation, setOccupation] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`First Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}\nPassword: ${password}\nPhone: ${phone}\nAddress: ${address}\nBirthdate: ${birthdate}\nOccupation: ${occupation}`);
    };

    return (
        <Container maxWidth="xs">
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '100vh',
                    border: '2px solid gray', // Primary color border
                    padding: '20px',
                    borderRadius: '10px',
                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                    // backgroundColor: '#F0F0F0',
                    backgroundColor: '#f5f5f5',
                }}
            >
                <Typography variant="h4" component="h1" gutterBottom>
                    Register
                </Typography>
                <form onSubmit={handleSubmit} style={{ width: '100%' }}>
                    <Box sx={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                        {/* <AccountCircleIcon /> */}
                        <TextField
                            label="First Name"
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            InputProps={{
                                startAdornment: <AccountCircleIcon />,
                            }}
                        />
                    </Box>
                    <Box sx={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                        {/* <AccountCircleIcon /> */}
                        <TextField
                            label="Last Name"
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            InputProps={{
                                startAdornment: <AccountCircleIcon />,
                            }}
                        />
                    </Box>
                    <Box sx={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                        {/* <MailOutlineIcon /> */}
                        <TextField
                            label="Email"
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            InputProps={{
                                startAdornment: <MailOutlineIcon />,
                            }}
                        />
                    </Box>
                    <Box sx={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                        {/* <LockOutlinedIcon /> */}
                        <TextField
                            label="Password"
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            InputProps={{
                                startAdornment: <LockOutlinedIcon />,
                            }}
                        />
                    </Box>
                    <Box sx={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                        {/* <PhoneIcon /> */}
                        <TextField
                            label="Phone"
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            InputProps={{
                                startAdornment: <PhoneIcon />,
                            }}
                        />
                    </Box>
                    <Box sx={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                        {/* <LocationOnIcon /> */}
                        <TextField
                            label="Address"
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            InputProps={{
                                startAdornment: <LocationOnIcon />,
                            }}
                        />
                    </Box>
                    <Box sx={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                        {/* <DateRangeIcon /> */}
                        <TextField
                            label="Birthdate"
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            type="date"
                            value={birthdate}
                            onChange={(e) => setBirthdate(e.target.value)}
                            InputProps={{
                                startAdornment: <DateRangeIcon />,
                            }}
                        />
                    </Box>
                    <Box sx={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                        {/* <WorkIcon /> */}
                        <TextField
                            label="Occupation"
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            value={occupation}
                            onChange={(e) => setOccupation(e.target.value)}
                            InputProps={{
                                startAdornment: <WorkIcon />,
                            }}
                        />
                    </Box>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        sx={{ mt: 2 }}
                    >
                        Register
                    </Button>
                </form>
            </Box>
        </Container>
    );
};

export default RegistrationForm;
