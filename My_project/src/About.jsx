import { Container, Typography, Box ,useEffect} from '@mui/material';


function About() {

  const handleClick = ()=>{
    useEffect(() => {  
    
      fetch('https://fakestoreapi.com/products/category/men\'s%20clothing')
      response => response.json()
      data => setShoes(data)
      

    }, []);

  }
  return (
    <Container>
      <Box 
        display="flex" 
        flexDirection="column" 
        justifyContent="center" 
        alignItems="center" 
        minHeight="100vh" 
        textAlign="center"
        bgcolor="#f0f4f8"
        p={4}
        borderRadius={2}
      >
        <Box 
          width="100%" 
          bgcolor="#3f51b5" 
          color="white" 
          p={2} 
          borderRadius={2} 
          mb={2}
        >
          <Typography variant="h4" gutterBottom>
            About Iqra Youth Educational Foundation
          </Typography>
        </Box>
        <Box 
          width="100%" 
          bgcolor="#e3f2fd" 
          color="black" 
          p={2} 
          borderRadius={2}
        >
          <Typography variant="body1">
            The Iqra Youth Educational Foundation, established in 2020, is dedicated to enhancing the quality 
            of education within the Roundu district, with aspirations to extend its impact across the entire country. 
            The foundation is committed to supporting students in their academic pursuits by offering scholarships for both 
            O-level and A-level education. Recognizing the importance of exam preparation, the foundation conducts 
            pre-board exams annually to better equip students for the official board examinations. Through these initiatives, 
            the Iqra Youth Educational Foundation strives to foster educational excellence and provide valuable opportunities 
            for students to succeed.
          </Typography>
        </Box>
        <button onClick={() => handleClick()}>Shop Now</button>
      </Box>
    </Container>
  );
}

export default About;
