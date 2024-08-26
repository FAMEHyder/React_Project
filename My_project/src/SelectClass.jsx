
import { Container, Typography, Box, Grid, ButtonBase } from '@mui/material';
import { useNavigate } from 'react-router-dom';
function SelectClass() {
  const navigate = useNavigate();
  const courses = [
    '9th', '10th', 'First Year', 'Second Year'
  ];

  const handleClassClick = (path) => {
    
    navigate(path);

  };

  return (
    <Container
    sx={{
      marginTop: '100px',
      backgroundColor: 'white', // Set the background color
      padding: '16px', // Add some padding if needed
      borderRadius: '8px', // Optional: Add rounded corners
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)', // Optional: Add a shadow
    }}
    >
      <Typography variant="h4" gutterBottom>
      These Classes are available
      </Typography>
      <Grid container spacing={2}>
        {courses.map((course, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ButtonBase onClick={() => handleClassClick('/Notes')} sx={{ width: '100%' }}>
              <Box 
                mb={2} 
                p={2} 
                border={1} 
                borderRadius={4} 
                borderColor="grey.300" 
                bgcolor="navy"
                color="white"
                width="100%"
                textAlign="center"
              >
                <Typography variant="h6">{course}</Typography>
              </Box>
            </ButtonBase>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default SelectClass;
