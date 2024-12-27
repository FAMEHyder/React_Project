import { Box, Grid, Typography } from "@mui/material"
import person from '../Member/Me.jpg'
const Members = () => {


    return (
        <Grid spacing={2} mt={2} display={'flex'} flexDirection={'row'} mb={2}>
            {/* left Box  */}
            <Grid sx={{
                height: '600px',
                width: '30%',
            }}>
                <Box
                    sx={{
                        height: '600px',
                        width: '100%',
                        border: '2px solid red',
                        background: 'linear-gradient(to bottom, rgba(4, 4, 121, 0.8), rgba(0, 255, 98, 0.93))'
                    }}
                >
                    <Box
                        sx={{
                            mt:1,
                            width: { xs: "90px", sm: "200px", md: "220px" },
                            height: { xs: "90px", sm: "200px", md: "220px" },
                            border: '2px solid white',
                            ml: { sm: '10px', lg: '70px', xl: '80px' },
                            backgroundImage: `url(${person})`,
                            backgroundSize: { xs: '130px', sm: '290px', md: '250px', lg: '330px', xl: '430px' },
                            borderRadius: '100%',
                            backgroundRepeat: 'no-repeat',
                            backgroundPositionX: 'center',

                        }}
                    ></Box>
                    <Typography fontFamily={'cambria'} fontWeight={'800'} fontSize={'25px'} color="white"
                    sx={{
                        ml:'90px'
                    }}
                    >
                        <b>Zeeshan Haider </b>
                    </Typography>
                    <Typography fontFamily={'cambria'} fontSize={'20px'} color="white"
                    sx={{
                        ml:'90px'
                    }}
                    >
                        BS Computer Science 
                    </Typography>
                    <Typography fontFamily={'cambria'}fontSize={'20px'} color="white"
                    sx={{
                        ml:'40px'
                    }}
                    >
                        Student at University of Baltistan
                    </Typography>
                   
                </Box>
            </Grid>
            {/* right Box  */}
            <Grid sx={{
                height: '600px',
                width: '70%',
            }}>
                <Box
                    sx={{
                        height: '600px',
                        border: '2px solid black',
                        bgcolor: 'blue',
                        width: '100%',
                        backgroundColor: "linear-gradient(to bottom, rgb(243, 74, 7), rgb(243, 74, 7))",

                    }}>

                </Box>
            </Grid>


        </Grid>
    )
}

export default Members