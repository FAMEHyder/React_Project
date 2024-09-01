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
  { src: pistacio, alt: 'Pistacios' },
  { src: raisin, alt: 'Raisins' },
  { src: dry, alt: 'Dried Apricots' },
  { src: dates, alt: 'Dates' },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const SliderComponent = () => {
  return (
    <Box sx={{ width: '400px', padding: '20px',marginTop:30,marginLeft:60}}>
      <Slider {...sliderSettings}>
        {images.map((image, index) => (
          <Paper
            key={index}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '300px',
              
              
              background: `url(${image.src}) center center / cover no-repeat`,
              boxShadow: '0 4px 8px rgba(0,0,0,0.9)',
              borderRadius:'5px',
            }}
          >
            <Typography variant="h6" sx={{ color: 'white', backgroundColor: 'rgba(0,0,0,0.5)', padding: '10px' }}>
              {image.alt}
            </Typography>
          </Paper>
        ))}
      </Slider>
    </Box>
  );
};

export default SliderComponent;
