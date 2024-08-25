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
import bg from './image/bg.png';

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
  marginTop: '50px',
}));

const SectionPaper = styled(Paper)({
  // padding: '2px',
  // background: 'none',
  marginTop: '30px',
  // display: 'flex',
  // justifyContent: 'center',
  cursor: 'pointer',
  // textAlign: 'center',
  // marginBottom: '5px',
  // height: '200px',
  // alignItems: 'end',
  // boxShadow: [5000],
});

const MainContainer = styled('div')({
  display: 'flex',
  marginTop: '64px',
  flexDirection: 'column', // Make it a column layout to add top component and footer
});

const Content = styled('main')({
  flexGrow: 1,
  padding: '20px',
});

const TopComponent = styled(Paper)({
  textAlign: 'center',
  padding: '20px',
  position: 'relative', // Make sure the component is positioned relative
  marginTop: '50px',
  marginBottom: '0px',
  backgroundImage: `url(${bg})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  height: '400px',
  color: 'black',
  boxShadow: '5px 5px gray',
  overflow: 'hidden', // Ensures the overlay fits within the component boundaries
  zIndex: 1, // Set z-index for content
  
  // Add the overlay using a pseudo-element
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Black color with 50% transparency
    zIndex: -1, // Ensure the overlay is behind the content
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
        {/* Top Component */}
        <TopComponent
          style={{
            marginTop: '50px',
            marginBottom: '0px',
            backgroundImage: `url(${bg})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            height: '500px',
            color: 'black',
            boxShadow: '5px 5px gray',
           
          }}
        >
          <Typography
            variant='contained'
            marginRight='50px'

          >IQRA YOUTH EDUCATIONAL FOUNDATION </Typography>

        </TopComponent>

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

        {/* Footer */}
        <Footer style={{ marginTop: '150px', marginBottom: '0px' }}>

          © 2024 IQRA YOUTH EDUCATIONAL FOUNDATION. All Rights Reserved.
        </Footer>
      </MainContainer>
    </>
  );
}

export default Home;
