// import { Container, Typography, Box, Grid } from '@mui/material';

// function OurMembers() {
//   const members = [
//     { name: 'M Nawaz Sakhi', qualification: 'BS in BBA' },
//     { name: 'Zahid Hussain', qualification: 'BS in IR' },
//     { name: 'Mubarak Ali', qualification: 'BS in Mechanical Engineering' },
//     { name: 'Shakeel Ahmad', qualification: 'BS in English' },
//     { name: 'Sharafat Hussain', qualification: 'BS in Software Engineering' },
//     { name: 'Fida Hussain', qualification: 'BS in Zology' },
//     { name: 'Agha Razi', qualification: 'BS in Business Administration' },
//     { name: 'Shair Ali', qualification: 'BS in Mathematics' },
//     { name: 'Qadir Ali Kamali', qualification: 'BS in Bussiness Administration' },
//     { name: 'M Ibrahim', qualification: 'BS in Botany' },
//     { name: 'M Mubashir', qualification: 'BS in Botany' },
//   ];

//   return (
//     <Container>
//       <Typography variant="h4" gutterBottom>
//         Our Members
//       </Typography>
//       <Grid container spacing={2}>
//         {members.map((member, index) => (
//           <Grid item xs={12} sm={6} md={4} key={index}>
//             <Box 
//               mb={2} 
//               p={2} 
//               // border={1} 
//               borderRadius={4}
//               // borderColor="grey.300" 
//               bgcolor="#1E90FF"
//               color="white"
              
//             >
//               <Box
//                 component="img"
//                 src={`https://via.placeholder.com/100?text=${member.name.split(' ')[0]}`}
//                 alt={member.name}
//                 width={100}
//                 height={100}
//                 borderRadius="50%"
//                 mb={2}
//               />
//               <Typography variant="h6">{member.name}</Typography>
//               <Typography variant="body1">{member.qualification}</Typography>
//             </Box>
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//   );
// }

// export default OurMembers;


import { Container, Typography, Box, Grid } from '@mui/material';

// Import your local images
import aa from '../src/image/aa.jpg';
// import aa from '../src/image/aa.jpg';
// import aa from '../src/image/aa.jpg';
// import aa from '../src/image/aa.jpg';
// import aa from '../src/image/aa.jpg';
// import aa from '../src/image/aa.jpg';
// import aa from '../src/image/aa.jpg';
// import aa from '../src/image/aa.jpg';
// import aa from '../src/image/aa.jpg';
// import aa from '../src/image/aa.jpg';
// import aa from '../src/image/aa.jpg';
// import aa from '../src/image/aa.jpg';
// Add more imports as needed

function OurMembers() {
  const members = [
    { name: 'M Nawaz Sakhi', qualification: 'BS in BBA', image: aa },
    { name: 'Zahid Hussain', qualification: 'BS in IR', image: aa },
    { name: 'Mubarak Ali', qualification: 'BS in Mechanical Engineering', image: aa },
    { name: 'Shakeel Ahmad', qualification: 'BS in English', image: aa }, // Use appropriate image
    { name: 'Sharafat Hussain', qualification: 'BS in Software Engineering', image: aa }, // Use appropriate image
    { name: 'Fida Hussain', qualification: 'BS in Zology', image: aa }, // Use appropriate image
    { name: 'Agha Razi', qualification: 'BS in Business Administration', image: aa }, // Use appropriate image
    { name: 'Shair Ali', qualification: 'BS in Mathematics', image: aa }, // Use appropriate image
    { name: 'Qadir Ali Kamali', qualification: 'BS in Business Administration', image: aa }, // Use appropriate image
    { name: 'M Ibrahim', qualification: 'BS in Botany', image: aa }, // Use appropriate image
    { name: 'M Mubashir', qualification: 'BS in Botany', image: aa }, // Use appropriate image
  ];

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Our Members
      </Typography>
      <Grid container spacing={2}>
        {members.map((member, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box 
              mb={2} 
              p={2} 
              borderRadius={4}
              bgcolor="#1E90FF"
              color="white"
            >
              <Box
                component="img"
                src={member.image}
                alt={member.name}
                width={100}
                height={100}
                borderRadius="50%"
                mb={2}
              />
              <Typography variant="h6">{member.name}</Typography>
              <Typography variant="body1">{member.qualification}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default OurMembers;
