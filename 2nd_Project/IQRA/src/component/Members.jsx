import { useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import Zeeshan from '../Member/Me.jpg';
import Nawaz from '../Member/nawaz.jpg';
import Mubashir from '../Member/Mub.jpg';
import Mazahir from '../Member/Mazahir.jpg';
import Sharafat from '../Member/Sharafat.jpg';
import Fida from '../Member/Fida.jpg';
import Liaqat from '../Member/liaqat.jpg';
import Shakeel from '../Member/Shakeel.jpg';
import Carousel from 'react-slick'; // Importing the Carousel component

// Add the slick-carousel CSS for styling
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Members = () => {
    const [selectedMember, setSelectedMember] = useState({
        name: "Zeeshan Haider",
        title: "BS Computer Science",
        description: "Student at University of Baltistan",
        image: Zeeshan
    });

    const members = [
        { id: 1, name: "Zeeshan Haider", title: "BS Computer Science", description: "Student at University of Baltistan", image: Zeeshan },
        { id: 2, name: "Nawaz Ali", title: "BS Public Administration & Governance", description: "Numl University Islamabad", image: Nawaz },
        { id: 3, name: "Mubashir Hussain", title: "MS Zology", description: "Quaid-I-Azam University Islamabad", image: Mubashir },
        { id: 4, name: "Mazahir Hussain", title: "BS computer science+ B.Ed", description: "Quaid-I-Azam University Islamabad", image: Mazahir },
        { id: 5, name: "Fida Hussain", title: "MSc Zology", description: "Hazara University Islamabad", image: Fida },
        { id: 6, name: "Liaqat Ali", title: "BS computer science+ B.Ed", description: "Quaid-I-Azam University Islamabad", image: Liaqat },
        { id: 7, name: "sharafat Hussain", title: "BS computer science+ B.Ed", description: "Quaid-I-Azam University Islamabad", image: Sharafat },
        { id: 8, name: "Shakeel Ahmad", title: "BS computer science+ B.Ed", description: "Quaid-I-Azam University Islamabad", image: Shakeel },
    ];

    const handleMemberClick = (member) => {
        setSelectedMember(member);
    };

    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2, // Show two images at a time
        slidesToScroll: 1,
        arrows:false,
        autoplay: true,
        pauseOnHover: false,
    };

    return (
        <Grid container spacing={2} mt={2} mb={2}>
            {/* Left Box */}
            <Grid item xs={12} md={4}>
                <Box
                    sx={{
                        height: '600px',
                        width: '90%',
                        borderRadius: '10px',
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
                        {selectedMember.title}
                    </Typography>
                    <Typography fontFamily={'cambria'} fontSize={'20px'} color="white" textAlign="center">
                        {selectedMember.description}
                    </Typography>
                </Box>
            </Grid>
            {/* Right Box with Sliders */}
            <Grid item xs={12} md={8}>
                <Grid container spacing={4}>
                    {/* Upper Slider */}
                    <Typography variant="h6" color="primary" align="center" fontWeight={800} fontSize={30} sx={{ml:{xs:10,sm:10,md:100,lg:45},}}>Meet Our Team</Typography>
                    <Grid item xs={12} >
                        <Carousel {...sliderSettings}>
                            {members.slice(0, 4).map((member) => (
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
                                        ml:{lg:10,xl:35}
                                    }}
                                    >
                                        {member.name}
                                    </Typography>
                                    <Typography  fontFamily={'cambria'}  color="white" ml={10}  bgcolor={'rgba(0, 0, 0, 0.5)'}  width={'300px'}
                                    sx={{
                                        fontSize:{xs:5,sm:5,md:100,lg:17},
                                        ml:{lg:10,xl:35}
                                    }}
                                    >
                                        {member.title}
                                    </Typography>
                                </Box>
                            ))}
                        </Carousel>
                    </Grid>

                    {/* Lower Slider */}
                    <Grid item xs={12} >
                        <Carousel {...sliderSettings}>
                            {members.slice(5, 9).map((member) => (
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
                                        ml:{lg:10,xl:35}
                                    }}
                                    >
                                        {member.name}
                                    </Typography>
                                    <Typography fontFamily={'cambria'} fontSize={'16px'} color="white" ml={10} bgcolor={'rgba(0, 0, 0, 0.5)'}  width={'300px'} 
                                     sx={{
                                        fontSize:{xs:5,sm:2,md:100,lg:17},
                                        ml:{lg:10,xl:35}
                                    }}
                                    >
                                        {member.title}
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
