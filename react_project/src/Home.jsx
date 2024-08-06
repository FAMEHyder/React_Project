
import { styled } from '@mui/system';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Navbar = styled(AppBar)({
  marginBottom: '20px',
  marginTop: '20px'
});

const NavbarButton = styled(Button)(({ theme }) => ({
  marginLeft: theme.spacing(1),
  color: 'white', // Set button text color to white
}));

const SectionPaper = styled(Paper)({
  padding: '2px', // Increase padding
  textAlign: 'center',
  backgroundColor: 'lightblue', // Light background color
  marginBottom: '4px',
  height: '200px', // Set a fixed height for the sections
  display: 'flex',
  alignItems: 'end',
  justifyContent: 'center',
  cursor: 'pointer', // Change cursor to pointer to indicate clickable area
  '&:hover': {
    backgroundColor: 'skyblue', // Slightly darker color on hover
    
  },
});

const Footer = styled('footer')({
  marginTop: '20px',
  padding: '16px',
  textAlign: 'center',
  backgroundColor: '#e0e0e0',
});

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Logo
          </Typography>
          <div>
            <NavbarButton component={Link} to="/login">Login</NavbarButton>
            <NavbarButton component={Link} to="/register">Register</NavbarButton>
            <NavbarButton component={Link} to="/about">About</NavbarButton>
          </div>
        </Toolbar>
      </Navbar>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Link to="/section/members" style={{ textDecoration: 'none' }}>
              <SectionPaper onClick={() => navigate('/section/members')}>
                <Typography variant="h5">Our Members</Typography>
              </SectionPaper>
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Link to="/section/courses" style={{ textDecoration: 'none' }}>
              <SectionPaper onClick={() => navigate('/section/courses')}>
                <Typography variant="h5">Courses</Typography>
              </SectionPaper>
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Link to="/section/notes" style={{ textDecoration: 'none' }}>
              <SectionPaper onClick={() => navigate('/section/notes')}>
                <Typography variant="h5">Notes</Typography>
              </SectionPaper>
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Link to="/section/online-classes" style={{ textDecoration: 'none' }}>
              <SectionPaper onClick={() => navigate('/section/online-classes')}>
                <Typography variant="h5">Online Classes</Typography>
              </SectionPaper>
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Link to="/section/registercourses" style={{ textDecoration: 'none' }}>
              <SectionPaper onClick={() => navigate('/section/registercourses')}>
                <Typography variant="h5">Register to Course</Typography>
              </SectionPaper>
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Link to="/section/results" style={{ textDecoration: 'none' }}>
              
              <SectionPaper onClick={() => navigate('/section/results')}>
              
                <Typography variant="h5">Results</Typography>
              </SectionPaper>
            </Link>
          </Grid>
        </Grid>
      </Container>
      <Footer>
        <Typography variant="body2" color="textSecondary">
          © 2024 My Website. All rights reserved.
        </Typography>
      </Footer>
    </>
  );
}

export default Home;
