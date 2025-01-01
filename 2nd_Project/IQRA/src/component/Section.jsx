import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Events from '../Section/Events.png';
import Team from '../Section/Team.png';
import Exams from '../Section/Exams.png';

export default function Section() {
    return (
        <Box
            display="flex" // Apply flex
            flexDirection="row" // Layout direction
            justifyContent="space-around" // Space distribution
            alignItems="center" // Alignment of items
            sx={{
                width: "99.23%",
                height: "300px",
                backgroundColor: "lightgray",
                border: "5px solid red",
            }}
        >
            <Paper 
                sx={{

                    bgcolor: 'primary.main',
                    height: '100%',
                    width: '100%',
                    backgroundImage:`url(${Team})`,
                    backgroundSize: '100% 100%',
                    backgroundRepeat:'no-repeat',
                    
                }}>


            </Paper>
            <Paper
                sx={{
                    bgcolor: 'secondary.main',
                    height: '100%',
                    width: '100%',
                    backgroundImage:`url(${Events})`,
                    backgroundSize: '100% 100%',
                    backgroundRepeat:'no-repeat'
                }}>


            </Paper>
            <Paper
                sx={{
                    bgcolor: 'error.main',
                    height: '100%',
                    width: '100%',
                    backgroundImage:`url(${Exams})`,
                    backgroundSize: '100% 100%',
                    backgroundRepeat:'no-repeat'
                }}>


            </Paper>
            <Paper
                sx={{
                    bgcolor: 'success.main',
                    height: '100%',
                    width: '100%'
                }}>

            </Paper>
        </Box>
    );
}
