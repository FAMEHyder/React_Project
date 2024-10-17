import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { Box, Typography, Paper, Button } from '@mui/material';
import almonds from '../Image/almonds.png';
import cashew from '../Image/cashew.png';
import walnut from '../Image/walnut.png';
import pistacio from '../Image/pistacio.png';
import raisin from '../Image/raisin.png';
import dry from '../Image/dry.png';
import dates from '../Image/dates.png';
import { useNavigate } from 'react-router-dom';

const images = [
  { src: almonds, alt: 'Almonds',  Id :'1' },
  { src: cashew, alt: 'Cashews',  Id :'2' },
  { src: walnut, alt: 'Walnuts',  Id :'3' },
  { src: pistacio, alt: 'Pistachios', Id :'4' },
  { src: raisin, alt: 'Raisins',  Id :'5' },
  { src: dry, alt: 'Dried Apricots',  Id :'6'},
  { src: dates, alt: 'Dates', Id :'7'},
];

const sliderSettings = {
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: '0',
  arrows: true,
  autoplay: true, 
  autoplaySpeed: 1000, 
};


const SliderComponent = () => {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <Box sx={{ width: '95%', padding: '20px', margin: 'auto', position: 'relative', marginTop: 30 }}>
      <Slider {...sliderSettings}>
        {images.map((image, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '300px',
              position: 'relative',
              transform: 'scale(0.8)', // Default scale for non-center slides
              transition: 'transform 0.5s, z-index 0.5s',
              '&.slick-center': {
                transform: 'scale(1)', // Scale up the center slide
                zIndex: 2, // Bring the center slide to the front
              },
            }}
          >
            <Button
              onClick={() => handleClick('/productcard')}
              sx={{
                width: '100%',
                height: '100%',
                boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
                borderRadius: '10px',
                position: 'relative',
                padding: 0,
                minWidth: 'unset',
                '&:hover': {
                  backgroundColor: 'transparent',
                },
              }}
            >
              <Paper
                sx={{
                  width: '100%',
                  height: '100%',
                  background: `url(${image.src}) center center / cover no-repeat`,
                  boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
                  position: 'relative',
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    position: 'absolute',
                    bottom: '20px',
                    left: '20px',
                    color: 'white',
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    padding: '10px 20px',
                    borderRadius: '5px',
                    fontWeight: 'bold',
                  }}
                >
                  {image.alt}
                </Typography>
              </Paper>
            </Button>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default SliderComponent;
