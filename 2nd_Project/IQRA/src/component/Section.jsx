import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import NoticBoard from '../Section/NoticBoard.png';
import Team from '../Section/Team.png';
import Exams from '../Section/Exams.png';
import Results from '../Section/Results.png';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../authContext/auth';

export default function Section() {
    const navigate = useNavigate();
    const { user } = useAuthStore();

    const handleClick = (path) => {
        navigate(path);
    };

    const handlePermissionClick = (path) => {
        if (!user) {
            alert('Sign in required! Click Ok to Sign In');
            navigate('/Signin');
            return;
        }
        navigate(path);
    };

    return (
        <Box
            display="flex"
            flexDirection="row"
            flexWrap="wrap"
            alignItems="center"
            justifyContent="center"
            gap={5}
            sx={{
                width: '100%',
            }}
        >
            {[{
                label: 'Our Team',
                image:  Team,
                path: '/members',
                onClick: handleClick
            }, {
                label: 'Notice Board',
                image: NoticBoard,
                path: '/noticeboard',
                onClick: handleClick
            }, {
                label: 'Pre-Board Exams',
                image: Exams,
                path: '/pre_board',
                onClick: handlePermissionClick
            }, {
                label: 'Results',
                image: Results,
                path: '/results',
                onClick: handlePermissionClick
            }].map((item, index) => (
                <Box key={index} textAlign="center">
                    <Paper
                        onClick={() => item.onClick(item.path)}
                        sx={{
                            bgcolor: 'background.default',
                            height: { xs: '200px', sm: '250px', md: '200px' },
                            width: { xs: '150px', sm: '200px', md: '250px' },
                            boxShadow: 5,
                            mt:{xs: '10px', sm: '10px', md: '20px'},
                            backgroundImage: `url(${item.image})`,
                            backgroundSize: 'cover 60%',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            borderRadius: 2,
                            transition: 'transform 0.3s ease',
                            '&:hover': {
                                transform: 'scale(1.05)',
                                boxShadow: 8,
                            },
                        }}
                    />
                    <Typography
                        variant="h6"
                        sx={{
                            mt: 1,
                            fontSize: { xs: '14px', sm: '16px', md: '18px' },
                            fontWeight: 'bold',
                        }}
                    >
                        {item.label}
                    </Typography>
                </Box>
            ))}
        </Box>
    );
}
