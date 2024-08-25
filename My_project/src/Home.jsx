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
import backgroundImage from './image/member.png';
import book from './image/book.png';
import notes from './image/notes.png';
import classes from './image/classes.png';
import exams from './image/exams.png';
import results from './image/results.png';

const Navbar = styled(AppBar)({
  position: 'fixed',
  left: 0,
  marginBottom: '0px',
  height: '100px',
  marginLeft: '5px',
  zIndex: 1205,
  background: 'white',
});

const NavbarButton = styled(Button)(({ theme }) => ({
  marginLeft: theme.spacing(1),
  color: 'black',
  marginTop:'50px',
}));

const SectionPaper = styled(Paper)({
  padding: '2px',
  textAlign: 'center',
  background: 'skyblue',
  marginBottom: '5px',
  marginTop: '30px',
  height: '200px',
  display: 'flex',
  alignItems: 'end',
  justifyContent: 'center',
  boxShadow: [5000],
  cursor: 'pointer',
  // '&:hover': {
  //   background: 'lightgray',
  // },
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
        <Toolbar >
          <img src={IMG} alt="pic" height={100} width={100} style={{ marginBottom: '0px' }} />
          <div style={{ marginBottom: '0px', position: 'relative', left: '75%', }}>
            <NavbarButton component={Link} to="/login">Login</NavbarButton>
            <NavbarButton component={Link} to="/register">Register</NavbarButton>
            <NavbarButton component={Link} to="/about">About</NavbarButton>
          </div>
        </Toolbar>
      </Navbar>
      <MainContainer marginTop='100px'>
        <Content>
          <Container>
            <Grid container spacing={3}>
              {/* Upper Section */}
              <Grid item xs={12} sm={6} md={4}>
                <SectionPaper
                  onClick={() => handleSectionClick('/section/members')}
                  style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    height: '120%',
                    width: '90%',
                    color: '#fff',
                    padding: '20px',
                    boxShadow: '3px 3px 3px 3px black'
                  }}
                >
                </SectionPaper>
                <Typography variant="h5" marginLeft={15}>Our Members</Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <SectionPaper
                  onClick={() => handleSectionClick('/section/courses')}
                  style={{
                    backgroundImage: `url(${book})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    height: '120%',
                    width: '90%',
                    color: '#fff',
                    padding: '20px',
                    boxShadow: '3px 3px 3px 3px black'
                  }}>
                </SectionPaper>
                <Typography marginLeft={15} variant="h5">Courses</Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <SectionPaper
                  onClick={() => handleSectionClick('/section/notes')}
                  style={{
                    backgroundImage: `url(${notes})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    height: '120%',
                    width: '90%',
                    color: '#fff',
                    padding: '20px',
                    boxShadow: '3px 3px 3px 3px black'
                  }}
                >
                </SectionPaper>
                <Typography marginLeft={15} variant="h5">Notes</Typography>
              </Grid>

              {/* Add some space between upper and lower sections */}
              <Grid item xs={12}>
                <div style={{ marginBottom: '60px' }}></div>
              </Grid>

              {/* Lower Section */}
              <Grid item xs={12} sm={6} md={4}>
                <SectionPaper
                  onClick={() => handleSectionClick('/section/online-classes')}
                  style={{
                    backgroundImage: `url(${classes})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    height: '120%',
                    width: '90%',
                    color: '#fff',
                    padding: '20px',
                    boxShadow: '3px 3px 3px 3px black'
                  }}>
                </SectionPaper>
                <Typography marginLeft={15} variant="h5">Online Classes</Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <SectionPaper
                  onClick={() => handleSectionClick('/section/registercourses')}
                  style={{
                    backgroundImage: `url(${exams})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    height: '120%',
                    width: '90%',
                    color: '#fff',
                    padding: '20px',
                    boxShadow: '3px 3px 3px 3px black'
                  }}>
                </SectionPaper>
                <Typography marginLeft={5} variant="h5">Register For Preboard Exams</Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <SectionPaper
                  onClick={() => handleSectionClick('/section/results')}
                  style={{
                    backgroundImage: `url(${results})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    height: '120%',
                    width: '90%',
                    color: '#fff',
                    padding: '20px',
                    boxShadow: '3px 3px 3px 3px black'
                  }}>
                </SectionPaper>
                <Typography variant="h5" marginLeft={15}>Results</Typography>
              </Grid>
            </Grid>
          </Container>
        </Content>
      </MainContainer>
    </>
  );
}

export default Home;
