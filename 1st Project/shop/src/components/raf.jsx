import nonpareil from '../Image/nonpareil.png';

import chuli1 from '../Image/chuli1.png'


import w180 from '../Image/w180.png'


import medjol from '../Image/medjol.png';

import kerman from '../Image/kerman.png'

import sultana from '../Image/sultana.png';



import eng from "../Image/engwalnut.png";

const ProductData = [
  {
    id: 1,
    Category:'Almonds',
    name: 'Nonpa

  // Appricote Data
  { 
    id: 9,
    Category:'Dried Apricots',
    price: 20,
    name: 'Moorpark Apricot',
    image: chuli1, // Image representing the Moorpark apricot variety
    description: 'Moorpark apricots are large, juicy, and known for their sweet, rich flavor. ' + 
                 'Due to their size and sweetness, they are a favorite among apricot lovers.',
                 
    rating: 4.5,   // Rating out of 5
  },

//Cashews Data
{
  id: 21,
  Category:'Cashews',
  price:120,
  name: 'W-180 (King of Cashews)',
  image: w180,
  description: 'W-180, known as the "King of Cashews," is the largest and highest quality cashew nut available.',
  
    rating: 4.5,   // Rating out of 5
},
//Dates Data
{
  id: 33,
  Category:'Dates',
  price:50,
  name: 'Medjool',
  image: medjol, // Replace with actual image URLs
  description: 'Large, soft, and rich in flavor, Medjool dates are known as the "king of dates".',
  
    rating: 4.5,   // Rating out of 5
},

//pischio data
{
  id: 53,
  Category:'Pistachios',
  price:40,
  name: 'Kerman Pistachio',
  image: kerman,
  description: 'Kerman pistachios are known for their large size, creamy texture, and rich flavor, making them a popular variety.',
  
    rating: 4.5,   // Rating out of 5
},

//raisins data
{
  id: 53,
  Category:'Raisins',
  price:30,
  name: 'Sultana Raisin',
  image: sultana,
  description: 'Sultana raisins are light yellow and known for their juicy and sweet flavor.',
  
    rating: 4.5,   // Rating out of 5

},
//walnutdata
{
  id: 65,
  Category:'Walnuts',
  price:23,
  name: 'English Walnuts (Persian Walnuts)',
  image: eng, // Replace with a valid image URL
  description: 'English walnuts are known for their mild flavor and thin, easy-to-crack shells.',
  
    rating: 4.5,   // Rating out of 5
},
];



export default ProductData;


