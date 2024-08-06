
import { Container, Typography, Box, Grid, ButtonBase } from '@mui/material';

function Courses() {
  const courses = [
    'Mathematics', 'Physics', 'Chemistry', 'Biology', 'Computer',
    'Urdu', 'English', 'State Affairs','Cuurent Affairs'
  ];

  const handleCourseClick = (course) => {
    console.log(`Clicked on ${course}`);
    // You can add further actions here, such as navigation or displaying more details
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Courses
      </Typography>
      <Grid container spacing={2}>
        {courses.map((course, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ButtonBase onClick={() => handleCourseClick(course)} sx={{ width: '100%' }}>
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

export default Courses;
