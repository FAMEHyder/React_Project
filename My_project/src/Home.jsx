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
import member from './image/member.png';
import book from './image/book.png';
import notes from './image/notes.png';
import classes from './image/classes.png';
import exams from './image/exams.png';
import results from './image/results.png';
import bg from './image/bg.png';
import { keyframes } from '@mui/system';
// import Logo from './image/Logo.png';

const typing = keyframes`
  from { width: 0; }
  to { width: 55%; }
`;

const blink = keyframes`
  100% { border-color: transparent; }
`;

const TypingText = styled(Typography)({
  fontWeight: 'bold',
  fontSize: '1.45rem',
  color:'white',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  width: '100%',
  display: 'inline-block',
  animation: `${typing} 3.5s steps(30) infinite alternate, ${blink} 0.5s step-end infinite`,
});

const Navbar = styled(AppBar)(() => ({
  background: 'white',
  // transition: '0.3s',
  height:'50px',
  // boxShadow: trigger ? '0 4px 10px rgba(0, 0, 0, 0.3)' : 'none',
}));

const NavbarButton = styled(Button)({
  marginLeft: '10px',
  color: 'black',
  fontWeight:'600',
  // marginTop:'90px',
});

const SectionPaper = styled(Paper)({
  cursor: 'pointer',
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'scale(1.03)',
  },
  boxShadow: '3px 3px 3px 3px black',
});

const MainContainer = styled('div')({
  display: 'flex',
  // marginTop: '64px',
  flexDirection: 'column',
});

const Content = styled('main')({
  flexGrow: 1,
  padding: '20px',
});

const TopComponent = styled(Paper)({
  padding: '50px',
  position: 'relative',
  marginTop: '50px',
  marginBottom: '0px',
  backgroundImage: `url(${bg})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  height: '400px',
  color: 'black',
  // boxShadow: '5px 5px gray',
  overflow: 'hidden',
  zIndex: 1,
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    zIndex: -1,
  },
});

const Footer = styled('footer')({
  textAlign: 'center',
  padding: '10px',
  background: '#333',
  color: 'white',
  marginTop: '20px',
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
          
          <div style={{ marginLeft: 'auto' }}>
            <NavbarButton component={Link} to="/login">Login</NavbarButton>
            <NavbarButton component={Link} to="/register">Register</NavbarButton>
            <NavbarButton component={Link} to="/about">About</NavbarButton>
          </div>
        </Toolbar>
      </Navbar>
      <MainContainer>
        <TopComponent>
          <Typography style={{ fontWeight: '1000', fontFamily: 'Arial Black, Gadget, sans-serif', marginTop:'200px', color:'white', fontSize: '2rem' }}>
            IQRA YOUTH EDUCATIONAL FOUNDATION
          </Typography>
          <TypingText>WE AIM TO QUALITY EDUCATION</TypingText><br />
          <TypingText>WE AIM TO SUPPORT STUDENTS</TypingText>
        </TopComponent>
        
        <Content>
          <Container>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={4}>
                <SectionPaper
                  onClick={() => handleSectionClick('/section/members')}
                  style={{
                    backgroundImage: `url(${member})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    height: '200px',
                  }}
                />
                <Typography variant="h5" align="center">Our Members</Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <SectionPaper
                  onClick={() => handleSectionClick('/section/SelectClass')}
                  style={{
                    backgroundImage: `url(${book})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    height: '200px',
                  }}
                />
                <Typography variant="h5" align="center">Courses</Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <SectionPaper
                  onClick={() => handleSectionClick('/section/SelectClass')}
                  style={{
                    backgroundImage: `url(${notes})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    height: '200px',
                  }}
                />
                <Typography variant="h5" align="center">Notes</Typography>
              </Grid>

              <Grid item xs={12}>
                <div style={{ marginBottom: '5px' }}></div>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <SectionPaper
                  onClick={() => handleSectionClick('/section/online-classes')}
                  style={{
                    backgroundImage: `url(${classes})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    height: '200px',
                  }}
                />
                <Typography variant="h5" align="center">Online Classes</Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <SectionPaper
                  onClick={() => handleSectionClick('/section/registercourses')}
                  style={{
                    backgroundImage: `url(${exams})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    height: '200px',
                  }}
                />
                <Typography variant="h5" align="center">Register For Preboard Exams</Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <SectionPaper
                  onClick={() => handleSectionClick('/section/results')}
                  style={{
                    backgroundImage: `url(${results})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    height: '200px',
                  }}
                />
                <Typography variant="h5" align="center">Results</Typography>
              </Grid>
            </Grid>
          </Container>
        </Content>

        <Footer>
          © 2024 IQRA YOUTH EDUCATIONAL FOUNDATION. All Rights Reserved.
        </Footer>
      </MainContainer>
    </>
  );
}

export default Home;
