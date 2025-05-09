import { useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import Zeeshan from '../Member/Me.jpg';
import Nawaz from '../Member/nawaz.jpg';
import Mubashir from '../Member/Mub.jpg';
import Mazahir from '../Member/Mazahir.jpg';
import Sharafat from '../Member/Sharafat.jpg';
import Fida from '../Member/Fida.jpg';
import Liaqat from '../Member/liaqat.png';
import Shakeel from '../Member/Shakeel.jpg';
import Mubarak from '../Member/Mubarak.jpg';
import Zahid from '../Member/Zahid.jpg';
import ather from '../Member/ather.jpg';
import Carousel from 'react-slick'; 

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Members = () => {
    const [selectedMember, setSelectedMember] = useState({
        name: "Zeeshan Haider", 
        Qaulification: "BS Computer Science", 
        Institution: "Student at University of Baltistan", 
        image: Zeeshan ,Role :'Auther of web Application',
        Proffission:'Student at University of Baltistan',
        Address:"Post office of Dambudas skardu ,Baltistan",
        Phone :'03554526991'
    });

    const members = [
        { id: 1, name: "Zeeshan Haider", Qaulification: "BS Computer Science", Institution: "Student at University of Baltistan", image: Zeeshan ,Role :'Auther of web Application',Proffission:'Student at University of Baltistan ',Address:"Post office of Dambudas skardu ,Baltistan",Phone :'03554526991',},
        { id: 2, name: "Nawaz Ali", Qaulification: "BS Public Administration & Governance", Institution: "NUMl University Islamabad", image: Nawaz ,Role :'President of the IYEF',Proffission:'Student at NMUL university Islamabad',Address:"Post office of Dambudas skardu ,Baltistan",Phone :'03445254658',},
        { id: 3, name: "Mubashir Hussain", Qaulification: "MS Zology", Institution: "Quaid-I-Azam University Islamabad", image: Mubashir ,Role :'Educational Secretary of IYEF',Proffission:'Student at Quide-I-Azam University',Address:"Post office of Dambudas skardu ,Baltistan",Phone :'03464640837',},
        { id: 4, name: "Mazahir Hussain", Qaulification: "BS computer science+ B.Ed", Institution: "Quaid-I-Azam University Islamabad", image: Mazahir ,Role :'Member of Core Commitee',Proffission:'Student at Quide-I-Azam University',Address:"Post office of Dambudas skardu ,Baltistan",Phone :' Phone Number Not Provided',},
        { id: 5, name: "Fida Hussain", Qaulification: "MSc+Bed AIOU Zology", Institution: "Hazara University Islamabad", image: Fida ,Role :'Member of Core Commitee',Proffission:'Teaching Biology at Green Hills public school ',Address:"Post office of Dambudas skardu ,Baltistan",Phone :'03425450063',},
        { id: 6, name: "Liaqat Ali", Qaulification: "MA Islamic Management", Institution: "Al Mustafa International University", image: Liaqat ,Role :'Member of Core Commitee',Proffission:'Student at Al Mustafa International University',Address:"Post office of Dambudas skardu ,Baltistan",Phone :'+989373898372',},
        { id: 7, name: "Sharafat Hussain", Qaulification: "BS BBA", Institution: "Iqra University Islamabad", image: Sharafat ,Role :'Information secreter of IYEF',Proffission:'Proffission Not Provided',Address:"Post office of Dambudas skardu ,Baltistan",Phone :'03450881428',},
        { id: 8, name: "Shakeel Ahmad", Qaulification: "BS English Linguistics", Institution: "University of Education Lahore", image: Shakeel ,Role :'Member of Core Commitee',Proffission:'Teaching English at future generation school and college islamabad ',Address:"Post office of Dambudas skardu ,Baltistan",Phone :'03475180423',},
        { id: 9, name: "Mubarak Ali", Qaulification: "BS Urdu ", Institution: "Leads University lahore", image: Mubarak ,Role :'Member of Core Commitee',Proffission:'Proffission Not Provided',Address:"Post office of Dambudas skardu ,Baltistan",Phone :'03470414547',},
        { id: 10, name: "Zahid Ali", Qaulification: "BS International Relations ", Institution: "NUML University Islamabad", image: Zahid ,Role :'Finance Secretary of IYEF',Proffission:'Student at NMUL university Islamabad',Address:"Post office of Dambudas skardu ,Baltistan",Phone :'03196031700',},
        { id: 11, name: "Ather Ali", Qaulification: "Under Graduate Student", Institution: "Public School and College Skardu", image: ather ,Role :'Examination Controller of IYEF',Proffission:'Teacher At Green Hills School System',Address:"Post office of Dambudas skardu ,Baltistan",Phone :'03554435333',},
    ];

    const handleMemberClick = (member) => {
        setSelectedMember(member);
    };

    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2, 
        slidesToScroll: 1,
        arrows:false,
        autoplay: true,
        pauseOnHover: false,
    };

    return (
        <Grid container spacing={2} >
            <Grid item xs={12} md={4}>
                <Box
                    sx={{
                        height: '600px',
                        width: '90%',
                        background: "linear-gradient(to bottom, #0066cc, #33cc99)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        p: 2
                    }}
                >
                    <Box
                        sx={{
                            width: { xs: "180px", sm: "200px", md: "220px" },
                            height: { xs: "180px", sm: "200px", md: "220px" },
                            backgroundSize: "300px ",
                            borderRadius: '100%',
                            backgroundRepeat: 'no-repeat',
                            border: '5px solid white',
                            backgroundImage: `url(${selectedMember.image})`,
                            backgroundPosition: 'center 1%',
                            mb: 2
                        }}
                    />
                    <Typography fontFamily={'cambria'} fontWeight={800} fontSize={'25px'} color="white" >
                        <b>{selectedMember.name}</b>
                    </Typography>
                    <Typography fontFamily={'cambria'} fontSize={'20px'} color="white">
                        {selectedMember.Qaulification}
                    </Typography>
                    <Typography fontFamily={'cambria'} fontSize={'20px'} color="white" textAlign="center">
                        {selectedMember.Institution}
                    </Typography>
                    <Typography fontFamily={'cambria'} fontSize={'20px'} color="white" textAlign="center">
                        _______________________________________________________
                    </Typography>
                    <Typography fontFamily={'cambria'} fontSize={'20px'} color="white" textAlign={"center"}>               
                        {selectedMember.Role}
                    </Typography>
                    <Typography fontFamily={'cambria'} fontSize={'20px'} color="white" textAlign={"center"}>
                        {selectedMember.Proffission}
                    </Typography>
                    <Typography fontFamily={'cambria'} fontSize={'20px'} color="white" textAlign={"center"}>
                        {selectedMember.Phone}
                    </Typography>
                    <Typography fontFamily={'cambria'} fontSize={'20px'} color="white" textAlign={"center"}>
                        {selectedMember.Address}
                    </Typography>
                </Box>
            </Grid>
            <Grid item xs={12} md={8}>
                <Grid container spacing={4}>
                    <Typography variant="h6" color="primary" align="center" fontWeight={800} fontSize={30} sx={{ml:{xs:10,sm:10,md:50,lg:45},mt:{xs:4}}}>Meet Our Team</Typography>
                    <Grid item xs={12} >
                        <Carousel {...sliderSettings}>
                            {members.slice(0, 5).map((member) => (
                                <Box
                                    key={member.id}
                                    onClick={() => handleMemberClick(member)}
                                    sx={{
                                        cursor: "pointer",
                                        width: { xs: "180px", sm: "200px", md: "220px" },
                                        height: { xs: "180px", sm: "200px", md: "220px" },
                                        backgroundSize: "300px ",
                                        backgroundRepeat: 'no-repeat',
                                        backgroundImage: `url(${member.image})`,
                                        backgroundPosition: 'center 1%',
                                        padding: 2,
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                    }}
                                >
                                    <Typography  fontFamily={'cambria'} fontWeight={800} color="white" ml={10} mt={22}  bgcolor={'rgba(0, 0, 0, 0.5)'}  width={'300px'}
                                    sx={{
                                        fontSize:{xs:5,sm:2,md:100,lg:17},
                                        ml:{sm:5.5,lg:10,xl:35}
                                    }}
                                    >
                                        {member.name}
                                    </Typography>
                                    <Typography  fontFamily={'cambria'}  color="white" ml={10}  bgcolor={'rgba(0, 0, 0, 0.5)'}  width={'300px'}
                                    sx={{
                                        fontSize:{xs:5,sm:5,md:100,lg:17},
                                        ml:{sm:5.5,lg:10,xl:35},
                                        bottom:0
                                    }}
                                    >
                                        {member.Qaulification}
                                    </Typography>
                                </Box>
                            ))}
                        </Carousel>
                    </Grid>

                    <Grid item xs={12} >
                        <Carousel {...sliderSettings}>
                            {members.slice(5, 11).map((member) => (
                                <Box
                                    key={member.id}
                                    onClick={() => handleMemberClick(member)}
                                    sx={{
                                        cursor: "pointer",
                                        width: { xs: "180px", sm: "200px", md: "220px" },
                                        height: { xs: "180px", sm: "200px", md: "220px" },
                                        backgroundSize: "300px ",
                                        backgroundRepeat: 'no-repeat',
                                        backgroundImage: `url(${member.image})`,
                                        backgroundPosition: 'center 1%',
                                        padding: 2,
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        
                                    }}
                                >
                                    <Typography fontFamily={'cambria'} fontWeight={800} fontSize={'20px'} color="white" ml={10} mt={22}  bgcolor={'rgba(0, 0, 0, 0.5)'}  width={'300px'}
                                     sx={{
                                        fontSize:{xs:5,sm:2,md:100,lg:17},
                                        ml:{sm:5.5,lg:10,xl:35},
                                        bottom:0
                                    }}
                                    >
                                        {member.name}
                                    </Typography>
                                    <Typography fontFamily={'cambria'} fontSize={'16px'} color="white" ml={10} bgcolor={'rgba(0, 0, 0, 0.5)'}  width={'300px'} 
                                     sx={{
                                        fontSize:{xs:5,sm:2,md:100,lg:17},
                                        ml:{sm:5.5,lg:10,xl:35}
                                    }}
                                    >
                                        {member.Qaulification}
                                    </Typography>
                                </Box>
                            ))}
                        </Carousel>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Members;