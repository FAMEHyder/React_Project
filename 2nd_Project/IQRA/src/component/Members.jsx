// import { useState } from "react";
// import { Box, Grid, Typography } from "@mui/material";
// import Zeeshan from '../Member/Me.jpg';
// import Nawaz from '../Member/nawaz.jpg';
// // import Zahid from '../Member/zahid.jpg';
// import Mub from '../Member/Mub.jpg';
// import Mazahir from '../Member/Mazahir.jpg';

// const Members = () => {
//     const [selectedMember, setSelectedMember] = useState({
//         name: "Zeeshan Haider",
//         title: "BS Computer Science",
//         description: "Student at University of Baltistan",
//         image: Zeeshan
//     });

//     const members = [
//         { id: 1, name: "Zeeshan Haider", title: "BS Computer Science", description: "Student at University of Baltistan", image: Zeeshan },
//         { id: 2, name: "Nawaz Ali", title: "BS Public Administration and Governance", description: "Numl University Islamabad ", image: Nawaz },
//         { id: 3, name: "Mubashir Hussain", title: "MS Zology", description: "Quaid-I-Azam University Islamabad", image: Mub},
//         { id: 4, name: "Mazahir Hussain", title: "BS computer science+ B.Ed", description: "Quaid-I-Azam University Islamabad", image: Mazahir }
//     ];

//     const handleMemberClick = (member) => {
//         setSelectedMember(member);
//     };

//     return (
//         <Grid container spacing={2} mt={2} mb={2}>
//             {/* Left Box */}
//             <Grid item xs={12} md={4}>
//                 <Box
//                     sx={{
//                         height: '500px',
//                         width: '100%',
//                         borderRadius: '10px',
//                         background: "linear-gradient(to bottom, #0066cc, #33cc99)",
//                         display: "flex",
//                         flexDirection: "column",
//                         alignItems: "center",
//                         justifyContent: "center",
//                         p: 2
//                     }}
//                 >
//                     <Box
//                         sx={{
//                             width: { xs: "180px", sm: "200px", md: "220px" },
//                             height: { xs: "180px", sm: "200px", md: "220px" },
//                             backgroundSize: "300px ",
//                             backgroundRepeat:'no-repeat',
//                             border: '5px solid white',
//                             backgroundImage: `url(${selectedMember.image})`,
//                             borderRadius: '100%',
//                             backgroundPosition: 'center 1%',
//                             mb: 2
//                         }}
//                     />
//                     <Typography fontFamily={'cambria'} fontWeight={800} fontSize={'25px'} color="white">
//                         <b>{selectedMember.name}</b>
//                     </Typography>
//                     <Typography fontFamily={'cambria'} fontSize={'20px'} color="white">
//                         {selectedMember.title}
//                     </Typography>
//                     <Typography fontFamily={'cambria'} fontSize={'20px'} color="white" textAlign="center">
//                         {selectedMember.description}
//                     </Typography>
//                 </Box>
//             </Grid>
//             {/* Right Box */}
//             <Grid item xs={12} md={8}>
//                 <Grid container spacing={4}>
//                     {members.map((member) => (
//                         <Grid item xs={6} md={3} key={member.id}>
//                             <Box
//                                 onClick={() => handleMemberClick(member)}
//                                 sx={{
//                                     cursor: "pointer",
//                                     width: { xs: "90px", sm: "200px", md: "220px" },
//                                     height: { xs: "90px", sm: "200px", md: "220px" },
//                                     backgroundSize: "cover",
//                                     border: '5px solid green',
//                                     backgroundImage: `url(${member.image})`,
//                                     borderRadius: '100%',
//                                     backgroundPosition: 'center',
//                                     transition: "transform 0.3s",
//                                     "&:hover": {
//                                         transform: "scale(1.1)"
//                                     }
//                                 }}
//                             />
//                         </Grid>
//                     ))}
//                 </Grid>
//             </Grid>
//         </Grid>
//     );
// };

// export default Members;



import  { useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import Zeeshan from '../Member/Me.jpg';
import Nawaz from '../Member/nawaz.jpg';
import Mub from '../Member/Mub.jpg';
import Mazahir from '../Member/Mazahir.jpg';
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
        { id: 2, name: "Nawaz Ali", title: "BS Public Administration and Governance", description: "Numl University Islamabad", image: Nawaz },
        { id: 3, name: "Mubashir Hussain", title: "MS Zology", description: "Quaid-I-Azam University Islamabad", image: Mub },
        { id: 4, name: "Mazahir Hussain", title: "BS computer science+ B.Ed", description: "Quaid-I-Azam University Islamabad", image: Mazahir }
    ];

    const handleMemberClick = (member) => {
        setSelectedMember(member);
    };

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2, // Show two images at a time
        slidesToScroll: 1,
    };

    return (
        <Grid container spacing={2} mt={2} mb={2}>
            {/* Left Box */}
            <Grid item xs={12} md={4}>
                <Box
                    sx={{
                        height: '500px',
                        width: '100%',
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
                            backgroundRepeat: 'no-repeat',
                            border: '5px solid white',
                            backgroundImage: `url(${selectedMember.image})`,
                            borderRadius: '100%',
                            backgroundPosition: 'center 1%',
                            mb: 2
                        }}
                    />
                    <Typography fontFamily={'cambria'} fontWeight={800} fontSize={'25px'} color="white">
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
                    <Grid item xs={12}>
                        <Typography variant="h6" color="primary" align="center">Upper Slider</Typography>
                        <Carousel {...sliderSettings}>
                            {members.slice(0, 2).map((member) => (
                                <Box
                                    key={member.id}
                                    onClick={() => handleMemberClick(member)}
                                    sx={{
                                        cursor: "pointer",
                                        width: "100%",
                                        height: "auto",
                                        backgroundSize: "cover",
                                        backgroundImage: `url(${member.image})`,
                                        borderRadius: '10px',
                                        backgroundPosition: 'center',
                                        padding: 2,
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                    }}
                                >
                                    <Typography fontFamily={'cambria'} fontWeight={800} fontSize={'20px'} color="white">
                                        {member.name}
                                    </Typography>
                                    <Typography fontFamily={'cambria'} fontSize={'16px'} color="white">
                                        {member.title}
                                    </Typography>
                                </Box>
                            ))}
                        </Carousel>
                    </Grid>

                    {/* Lower Slider */}
                    <Grid item xs={12}>
                        <Typography variant="h6" color="primary" align="center">Lower Slider</Typography>
                        <Carousel {...sliderSettings}>
                            {members.slice(2, 4).map((member) => (
                                <Box
                                    key={member.id}
                                    onClick={() => handleMemberClick(member)}
                                    sx={{
                                        cursor: "pointer",
                                        width: "100%",
                                        height: "auto",
                                        backgroundSize: "cover",
                                        backgroundImage: `url(${member.image})`,
                                        borderRadius: '10px',
                                        backgroundPosition: 'center',
                                        padding: 2,
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                    }}
                                >
                                    <Typography fontFamily={'cambria'} fontWeight={800} fontSize={'20px'} color="white">
                                        {member.name}
                                    </Typography>
                                    <Typography fontFamily={'cambria'} fontSize={'16px'} color="white">
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
