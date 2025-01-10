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
  Skeleton,
  IconButton,
} from '@mui/material';
import { Delete } from '@mui/icons-material';
import axios from 'axios';

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:8000/user/getAllUsers');
        console.log('Your ids are:', response.data.data[0]); // Debugging the API response structure
        setUsers(response.data.data || []);
      } catch (err) {
        console.error('Error fetching users:', err);
        setError('Failed to fetch user data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Handle deleting a user
  const handleDelete = async (id) => {
    try {
      // Send DELETE request to the API
      await axios.delete(`http://localhost:8000/user/${id}`);
      
      // Remove the deleted user from the state
      setUsers((prevUsers) => prevUsers.filter((user) => user._id !== id));
    } catch (err) {
      console.error('Error deleting user:', err);
      setError('Failed to delete user. Please try again later.');
    }
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
      <Box textAlign="center" marginTop="20px" color="red">
        <Typography variant="h6">{error}</Typography>
      </Box>
    );
  }

  if (users.length === 0) {
    return (
      <Box textAlign="center" marginTop="20px">
        <Typography variant="h6">No Users Found</Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        marginLeft: '250px', // Adjust according to your sidebar width
        padding: '20px',
        width: 'calc(100% - 250px)', // Ensure responsive layout
        boxSizing: 'border-box',
      }}
    >
      <TableContainer
        component={Paper}
        sx={{
          margin: '20px auto',
          maxWidth: '100%',
          boxShadow: 3,
        }}
      >
        <Table
          sx={{
            tableLayout: 'auto', // Dynamic column sizing
            '& td, & th': {
              whiteSpace: 'normal', // Prevent text from being cut off
              wordWrap: 'break-word', // Allow wrapping within cells
            },
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell align="center"><strong>First Name</strong></TableCell>
              <TableCell align="center"><strong>Last Name</strong></TableCell>
              <TableCell align="center"><strong>Username</strong></TableCell>
              <TableCell align="center"><strong>Email</strong></TableCell>
              <TableCell align="center"><strong>Age</strong></TableCell>
              <TableCell align="center"><strong>Address</strong></TableCell>
              <TableCell align="center"><strong>Actions</strong></TableCell> {/* For delete icon */}
            </TableRow>
          </TableHead>
          <TableBody>
            {loading
              ? [1, 2, 3, 4, 5].map((_, index) => (
                  <TableRow key={index}>
                    <TableCell align="center">
                      <Skeleton variant="text" width="100px" />
                    </TableCell>
                    <TableCell align="center">
                      <Skeleton variant="text" width="100px" />
                    </TableCell>
                    <TableCell align="center">
                      <Skeleton variant="text" width="100px" />
                    </TableCell>
                    <TableCell align="center">
                      <Skeleton variant="text" width="150px" />
                    </TableCell>
                    <TableCell align="center">
                      <Skeleton variant="text" width="50px" />
                    </TableCell>
                    <TableCell align="center">
                      <Skeleton variant="text" width="150px" />
                    </TableCell>
                    <TableCell align="center">
                      <Skeleton variant="circle" width={24} height={24} />
                    </TableCell>
                  </TableRow>
                ))
              : users.map((user) => (
                  <TableRow key={user._id}>
                    <TableCell align="center">{user.firstName}</TableCell>
                    <TableCell align="center">{user.lastName}</TableCell>
                    <TableCell align="center">{user.username}</TableCell>
                    <TableCell align="center">{user.email}</TableCell>
                    <TableCell align="center">{user.age}</TableCell>
                    <TableCell align="center">{user.address}</TableCell>
                    <TableCell align="center">
                      <IconButton
                        color="error"
                        onClick={() => handleDelete(user._id)} // Call handleDelete on icon click
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

export default UserTable;
