import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { Box, Typography, Paper } from '@mui/material';
import almonds from '../Image/almonds.png';
import cashew from '../Image/cashew.png';
import walnut from '../Image/walnut.png';
import pistacio from '../Image/pistacio.png';
import raisin from '../Image/raisin.png';
import dry from '../Image/dry.png';
import dates from '../Image/dates.png';

const images = [
  { src: almonds, alt: 'Almonds' },
  { src: cashew, alt: 'Cashews' },
  { src: walnut, alt: 'Walnuts' },
  { src: pistacio, alt: 'Pistachios' },
  { src: raisin, alt: 'Raisins' },
  { src: dry, alt: 'Dried Apricots' },
  { src: dates, alt: 'Dates' },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: '0',
  arrows: true,
  appendDots: (dots) => (
    <Box
      sx={{
        position: 'absolute',
        bottom: '10px',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          gap: '5px',
        }}
      >
        {dots}
      </Box>
    </Box>
  ),
  customPaging: (i) => (
    <Box
      sx={{
        width: '12px',
        height: '12px',
        borderRadius: '50%',
        backgroundColor: 'white',
        opacity: i === 0 ? 1 : 0.5,
        transition: 'opacity 0.3s',
        cursor: 'pointer',
      }}
    />
  ),
};

const SliderComponent = () => {
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
                zIndex: 1, // Bring the center slide to the front
              },
            }}
          >
            <Paper
              sx={{
                width: '100%',
                height: '100%',
                background: `url(${image.src}) center center / cover no-repeat`,
                boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
                borderRadius: '10px',
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
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default SliderComponent;
