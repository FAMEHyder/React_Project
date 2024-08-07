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

import IMG from "./image/Logo.png";


const Navbar = styled(AppBar)({
  position: 'fixed',
  left: 0,
  marginBottom: '20px',
  height: '60px',
  marginTop:'5px',
  marginLeft:'5px',
  zIndex: 1205,
  background: 'linear-gradient(to right, rgb(51, 51, 196),rgb(6, 110, 180))', // blueGrey gradient
});

const NavbarButton = styled(Button)(({ theme }) => ({
  marginLeft: theme.spacing(1),
  color: 'white',
}));

const SectionPaper = styled(Paper)({
  padding: '2px',
  textAlign: 'center',
  background: 'skyblue',
  marginBottom: '4px',
  marginTop:'30px',
  height: '200px',
  display: 'flex',
  alignItems: 'end',
  justifyContent: 'center',
  boxShadow: [5000],
  cursor: 'pointer',
  '&:hover': {
    background: '#1E90FF',
  },
});

const MainContainer = styled('div')({
  display: 'flex',
  marginTop: '64px',
  
});

const Content = styled('main')({
  flexGrow: 1,
  padding: '20px',
});

function Home() {
  const navigate = useNavigate();


  const handleSectionClick = (path) => {
    navigate(path);
    
  };

  return (
    <>
      <Navbar>
        <Toolbar>
            <img src={IMG} alt="pic" height={50} width={60} style={{marginBottom : '0px' }} />
          <div style={{ marginBottom: '0px' , position : 'relative' ,left: '75%'}}>
            <NavbarButton component={Link} to="/login">Login</NavbarButton>
            <NavbarButton component={Link} to="/register">Register</NavbarButton>
            <NavbarButton component={Link} to="/about">About</NavbarButton>
          </div>
        </Toolbar>
      </Navbar>
      <MainContainer>
        <Content>
          <Container>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={4}>
                <SectionPaper onClick={() => handleSectionClick('/sectioembers')}>
                  <Typography variant="h5">Our Members</Typography>
                </SectionPaper>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <SectionPaper onClick={() => handleSectionClick('/section/courses')}>
                  <Typography variant="h5">Courses</Typography>
                </SectionPaper>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <SectionPaper onClick={() => handleSectionClick('/section/notes')}>
                  <Typography variant="h5">Notes</Typography>
                </SectionPaper>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <SectionPaper onClick={() => handleSectionClick('/section/online-classes')}>
                  <Typography variant="h5">Online Classes</Typography>
                </SectionPaper>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <SectionPaper onClick={() => handleSectionClick('/section/registercourses')}>
                  <Typography variant="h5">Register to Course</Typography>
                </SectionPaper>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <SectionPaper onClick={() => handleSectionClick('/section/results')}>
                  <Typography variant="h5">Results</Typography>
                </SectionPaper>
              </Grid>
            </Grid>
          </Container>
        </Content>
      </MainContainer>
    </>
  );
}

export default Home;
