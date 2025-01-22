import { useEffect, useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  CircularProgress,
  Box,
  Typography,
  IconButton,
  Button,
} from '@mui/material';
import { Delete } from '@mui/icons-material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserTable10Arts = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:8000/user/getAllUsers');
        const allUsers = response.data.data || [];
        const filteredUsers = allUsers.filter((user) => user.Class === '10th arts'); // Filter users where Class is '9th arts'
        setUsers(filteredUsers);
      } catch (err) {
        setError('Failed to fetch user data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
  
    fetchUsers();
  }, []);
  

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/user/${id}`);
      setUsers((prevUsers) => prevUsers.filter((user) => user._id !== id));
    } catch (err) {
      setError('Failed to delete user. Please try again later.');
    }
  };

  const handleAddResult = (id) => {
    // Add result handling logic here, such as showing a form or updating the user result
    console.log(`Add result for user with ID: ${id}`);
    navigate('/artsresult', { state: { userId: id } });
    // Example: Sending a request to add a result for the user (you can expand this logic)
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="50vh">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box textAlign="center" mt={3} color="error.main">
        <Typography variant="h6">{error}</Typography>
      </Box>
    );
  }

  if (users.length === 0) {
    return (
      <Box textAlign="center" mt={3}>
        <Typography variant="h6">No Users Found</Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        padding: { xs: 2, sm: 3, md: 4 },
        width: '100%',
        boxSizing: 'border-box',
        overflowX: 'auto', // Enable horizontal scrolling
      }}
    >
      <Typography
        variant="h5"
        textAlign="center"
        sx={{ mb: 2, fontSize: { xs: '1.2rem', sm: '1.5rem', md: '2rem' } }}
      >
        User Table
      </Typography>
      <TableContainer
        component={Paper}
        sx={{
          margin: '0 auto',
          maxWidth: '100%',
          overflowX: 'auto', // Enable scrolling for smaller screens
          boxShadow: 3,
        }}
      >
        <Table
          sx={{
            minWidth: 650,
            '& td, & th': {
              fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' },
              padding: { xs: 1, sm: 2 },
            },
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell align="center"><strong>Full Name</strong></TableCell>
              <TableCell align="center"><strong>Username</strong></TableCell>
              <TableCell align="center"><strong>Email</strong></TableCell>
              <TableCell align="center"><strong>Class</strong></TableCell>
              <TableCell align="center"><strong>Address</strong></TableCell>
              <TableCell align="center"><strong>Add Result</strong></TableCell>
              <TableCell align="center"><strong>Actions</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user._id}>
                <TableCell align="center">{user.fullName}</TableCell>
                <TableCell align="center">{user.userName}</TableCell>
                <TableCell align="center">{user.email}</TableCell>
                <TableCell align="center">{user.Class}</TableCell>
                <TableCell align="center">{user.address}</TableCell>
                <TableCell align="center">
                  {/* Add Result Button */}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleAddResult(user._id)}
                    sx={{ marginRight: 1 }}
                  >
                    Add Result
                  </Button>
                  
                </TableCell>
                <TableCell align="center">
                  
                  {/* Delete Button */}
                  <IconButton
                    color="error"
                    onClick={() => handleDelete(user._id)}
                  >
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default UserTable10Arts;
