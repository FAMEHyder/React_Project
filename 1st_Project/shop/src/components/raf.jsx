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
    name: 'Nonpareil',
    image: nonpareil, // Image representing the Nonpareil almond variety
    description: 'Thin-skinned, easy to blanch, and used in many almond products. ' +
                 'Overall, it is one of the most sought-after varieties in the market due to its versatility.',
    price: 10.99,  // Price of the Nonpareil almond
    rating: 4.5,   // Rating out of 5
  },


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
  image: medjol