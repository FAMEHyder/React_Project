import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import NoticBoard from '../Section/NoticBoard.png';
import Team from '../Section/Team.png';
import Exams from '../Section/Exams.png';
import Results from '../Section/Results.png';
import {useNavigate} from 'react-router-dom';
import { useAuthStore } from '../authContext/auth';

export default function Section() {
    const navigate = useNavigate()
    const {user} = useAuthStore()
    const handleClick = (path)=>{

        navigate(path)
    }

    const handlepermissionClick = (path) => {
        if (!user) {
          alert('Sign in required! Click Ok to Sign In');
          navigate('/Signin');
          return;
        }
        navigate(path); // Navigate to the specified path
      };
    return (
        <Box
            display="flex" // Apply flex
            flexDirection="row" // Layout direction
             
            alignItems="center"
            justifyContent={'center'} // Alignment of items
            gap = {5}
            sx={{
                width: "99.23%",
                height: "300px",


                // border: "5px solid red",
            }}
        >
            <Paper onClick = {() => handleClick('/members')}
                sx={{

                    bgcolor: 'primary.main',
                    height: '60%',
                    boxShadow: '5px 5px 5px 5px',
                    width: '250px',
                    backgroundImage: `url(${Team})`,
                    backgroundSize: '100% 100%',
                    backgroundRepeat: 'no-repeat',

                }}>


            </Paper>
            <Paper onClick = {() => handleClick('/noticeboard')}
                sx={{
                    bgcolor: 'secondary.main',
                    height: '60%',
                    boxShadow: '5px 5px 5px 5px',
                    width: '250px',
                    backgroundImage: `url(${NoticBoard})`,
                    backgroundSize: '100% 100%',
                    backgroundRepeat: 'no-repeat'
                }}>


            </Paper>
            <Paper onClick = {() => handlepermissionClick('/pre_board')}
                sx={{
                    bgcolor: 'error.main',
                    height: '60%',
                    boxShadow: '5px 5px 5px 5px',
                    width: '250px',
                    backgroundImage: `url(${Exams})`,
                    backgroundSize: '100% 100%',
                    backgroundRepeat: 'no-repeat'
                }}>


            </Paper>
            <Paper onClick = {() => handlepermissionClick('/results')}
                sx={{
                    bgcolor: 'success.main',
                    height: '60%',
                    boxShadow: '5px 5px 5px 5px',
                    backgroundImage: `url(${Results})`,
                    backgroundSize: '100% 100%',
                    backgroundRepeat: 'no-repeat',
                    width: '250px'
                }}>

            </Paper>
        </Box>
    );
}
