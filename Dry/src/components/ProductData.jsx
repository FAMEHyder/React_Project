
import { Grid, Card, CardContent, CardMedia, Typography, IconButton, Box, Rating } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';
import nonpareil from '../Image/nonpareil.png';
import carmel from '../Image/carmel.png';
import sonora from '../Image/sonora.png';
import butte from '../Image/butte.png';
import mission from '../Image/mission.png';
import california from '../Image/california.png';
import fritz from '../Image/fritz.png';
import peerless from '../Image/peerless.png';

//apricot pics
import chuli1 from '../Image/chuli1.png'
import chuli2 from '../Image/chuli2.png';
import chuli3 from '../Image/chuli3.png';
import chuli4 from '../Image/chuli4.png';
import chuli5 from '../Image/chuli5.png';
import chuli6 from '../Image/chuli6.png';
import chuli7 from '../Image/chuli7.png';
import chuli8 from '../Image/chuli8.png';
import chuli9 from '../Image/chuli9.png';
import chuli10 from '../Image/chuli10.png';
import chuli11 from '../Image/chuli11.png';
import chuli12 from '../Image/chuli12.png';

//cashews pics
import w180 from '../Image/w180.png'
import jambo from '../Image/jambo.png';
import w240 from '../Image/w240.png';
import w230 from '../Image/w230.png';
import w450 from '../Image/w450.png';
import splites from '../Image/splites.png';
import butts from '../Image/butts.png';
import pieces from '../Image/pieces.png';
import babybits from '../Image/babybits.png';
import roasted from '../Image/roasted.png';
import flavor from '../Image/flavor.png';
import fla from '../Image/flavor.png';

//dates pics
import medjol from '../Image/medjol.png';
import noor from '../Image/noor.png';
import barhi from '../Image/barhi.png';
import ajwa from '../Image/ajwa.png'
import zahidi from '../Image/zahidi.png';
import khudri from '../Image/khudri.png';
import halwi from '../Image/halwi.png';
import sukkari from '../Image/sukkari.png';
//pistachio 
import kerman from '../Image/kerman.png'
import antep from '../Image/antep.png';
import fando from '../Image/fando.png';
import bronte from '../Image/bronte.png';
import kale from '../Image/kale.png';
import badami from '../Image/badami.png';
import Akbari from '../Image/akbari.png';
import red from '../Image/redpista.png';
//raisin data
import sultana from '../Image/sultana.png';
import golden from '../Image/golden.png';
import black from '../Image/black.png';
import current from '../Image/current.png';
import flame from '../Image/flame.png';
import manoka from '../Image/manuka.png';
import green from '../Image/green.png';
import rede from '../Image/red.png';

// walnut
import eng from "../Image/engwalnut.png";
import blacks from '../Image/blackwalnut.png';
import white from '../Image/whitewalnut.png';
import cali from '../Image/cali.png';
import chand from '../Image/chandlerwalnut.png';
import man from '../Image/marchanwalnut.png';
const ProductData = [
  {
    id: 1,
    Category:'Almonds',
    name: 'Nonpareil',
    image: nonpareil, // Image representing the Nonpareil almond variety
    description: 'Thin-skinned, easy to blanch, and used in many almond products. ' +
                 'The Nonpareil almond features a smooth and delicate skin that allows for easy blanching, ' +
                 'making it a popular choice for creating almond flour and almond milk. ' +
                 'Its consistent shape and size also make it ideal for use in snacks and confections. ' +
                 'Overall, it is one of the most sought-after varieties in the market due to its versatility.',
    price: 10.99,  // Price of the Nonpareil almond
    rating: 4.5,   // Rating out of 5
  },
  {
    id: 2,
    Category:'Almonds',
    name: 'Carmel',
    image: carmel, // Image representing the Carmel almond variety
    description: 'Similar to Nonpareil but with a slightly wrinkled surface, often used for roasting. ' +
                 'The Carmel almond is appreciated for its robust flavor, making it ideal for roasting. ' +
                 'This variety has a distinct, wrinkled appearance that gives it a unique texture. ' +
                 'Carmel almonds are frequently found in snack mixes and baked goods, enhancing their taste. ' +
                 'They are a favorite among consumers looking for flavorful roasted almonds.',
    price: 9.99, // Price of the Carmel almond
    rating: 4.0,
  },
  {
    id: 3,
    Category:'Almonds',
    name: 'Sonora',
    image: sonora, // Image representing the Sonora almond variety
    description: 'Long, narrow almonds with a light color, commonly used in desserts. ' +
                 'Sonora almonds stand out due to their elongated shape and light, creamy color. ' +
                 'Their mild flavor makes them a great addition to various dessert recipes. ' +
                 'Bakers often choose Sonora almonds for garnishing and flavoring, especially in pastries. ' +
                 'These almonds also add a pleasing visual appeal to sweets, making them a popular choice.',
    price: 12.99, // Price of the Sonora almond
    rating: 4.2,
  },
  {
    id: 4,
    Category:'Almonds',
    name: 'Butte',
    image: butte, // Image representing the Butte almond variety
    description: 'Thicker-skinned, good for roasting and used in confectionery. ' +
                 'The Butte almond is characterized by its robust, thicker skin that adds a delightful crunch. ' +
                 'It is particularly well-suited for roasting, which enhances its rich flavor. ' +
                 'This variety is often used in confectionery products, including chocolate-covered almonds. ' +
                 'Its texture and taste make it a favorite for gourmet snacks and treats.',
    price: 8.99, // Price of the Butte almond
    rating: 3.8,
  },
  {
    id: 5,
    Category:'Almonds',
    name: 'Mission',
    image: mission, // Image representing the Mission almond variety
    description: 'Darker skin, known for its slightly bittersweet flavor, often used in baking. ' +
                 'Mission almonds have a deep, dark skin that gives them a unique flavor profile. ' +
                 'Their slightly bittersweet taste complements various baked goods and desserts. ' +
                 'Bakers often prefer Mission almonds for cookies, cakes, and brownies, as they add depth to flavors. ' +
                 'This variety’s versatility makes it a staple in both home and professional kitchens.',
    price: 11.99, // Price of the Mission almond
    rating: 4.3,
  },
  {
    id: 6,
    Category:'Almonds',
    name: 'California',
    image: california, // Image representing the California almond variety
    description: 'A category that includes several almond varieties, typically used for processed almond products. ' +
                 'California almonds are well-known for their high quality and diverse range. ' +
                 'This category encompasses multiple types, allowing for a variety of flavors and textures. ' +
                 'They are commonly used in creating almond butter, oils, and other processed products. ' +
                 'California almonds are often considered the benchmark for almond quality globally.',
    price: 13.99, // Price of the California almond
    rating: 4.7,
  },
  {
    id: 7,
    Category:'Almonds',
    name: 'Fritz',
    image: fritz, // Image representing the Fritz almond variety
    description: 'Small and hard, often used in almond paste and marzipan. ' +
                 'Fritz almonds are distinctive due to their small size and firm texture. ' +
                 'They are frequently utilized in making almond paste, which is a key ingredient in pastries. ' +
                 'Marzipan made from Fritz almonds is known for its rich flavor and smooth consistency. ' +
                 'This variety is a preferred choice among bakers for decorative and gourmet applications.',
    price: 14.99, // Price of the Fritz almond
    rating: 4.6,
  },
  {
    id: 8,
    Category:'Almonds',
    name: 'Peerless',
    image: peerless, // Image representing the Peerless almond variety
    description: 'Commonly used in snacks, known for its mild flavor. ' +
                 'Peerless almonds are celebrated for their subtle, buttery flavor that appeals to many consumers. ' +
                 'They are often included in snack mixes and used as a topping for salads and desserts. ' +
                 'This variety’s mild taste makes it versatile for both sweet and savory dishes. ' +
                 'Peerless almonds are a popular choice for those seeking a healthy snack option.',
    price: 9.49, // Price of the Peerless almond
    rating: 4.1,
  },


  // Appricote Data
  { 
    id: 9,
    Category:'Apricot',
    price: 20,
    name: 'Moorpark Apricot',
    image: chuli1, // Image representing the Moorpark apricot variety
    description: 'Moorpark apricots are large, juicy, and known for their sweet, rich flavor. ' + 
                 'These apricots are particularly prized for their exceptional sweetness, making them ideal for fresh consumption. ' + 
                 'Their juicy flesh is perfect for preserves and canning, capturing their flavor for year-round enjoyment. ' + 
                 'Moorpark apricots are also great for baking and can enhance desserts with their luscious taste. ' + 
                 'Due to their size and sweetness, they are a favorite among apricot lovers.',
                 
    rating: 4.5,   // Rating out of 5
  },
  { 
    id: 10,
    Category:'Apricot',
    price: 20,
    name: 'Tilton Apricot',
    image: chuli2, // Image representing the Tilton apricot variety
    description: 'Tilton apricots have a tangy, sweet flavor and are commonly used for drying and cooking. ' + 
                 'These apricots strike a perfect balance between sweet and tangy, making them a versatile option. ' + 
                 'They are often dried to enhance their flavor, resulting in a chewy texture thats perfect for snacking. ' + 
                 'In cooking, Tilton apricots add a delightful flavor to sauces and desserts. ' + 
                 'Their culinary uses make them a staple for both home cooks and professional chefs.',
                 
    rating: 4.5,   // Rating out of 5
  },
  { 
    id: 11,
    Category:'Apricot',
    price: 20,
    name: 'Perfection Apricot',
    image: chuli3, // Image representing the Perfection apricot variety
    description: 'Perfection apricots are large with a firm texture and bright orange color, often used in fresh dishes. ' + 
                 'These apricots are visually striking, featuring a vibrant orange hue that enhances any dish. ' + 
                 'Their firm texture makes them ideal for slicing, ensuring they hold up well in salads and platters. ' + 
                 'Perfection apricots are best enjoyed fresh, allowing their full flavor to shine. ' + 
                 'Their size and appearance make them popular for garnishing and showcasing in culinary presentations.',
                 
    rating: 4.5,   // Rating out of 5
  },
  { 
    id: 12,
    Category:'Apricot',
    price: 20,
    name: 'Blenheim Apricot',
    image: chuli4, // Image representing the Blenheim apricot variety
    description: 'Blenheim apricots are sweet and juicy, ideal for both fresh consumption and drying. ' + 
                 'Known for their rich flavor, Blenheim apricots are a favorite for fresh eating due to their sweetness. ' + 
                 'They are also excellent for drying, which concentrates their flavor and sweetness even further. ' + 
                 'Blenheim apricots can be used in various recipes, from desserts to savory dishes, adding a unique twist. ' + 
                 'Their versatility and flavor make them a beloved choice among fruit enthusiasts.',
                 
    rating: 4.5,   // Rating out of 5
  },
  { 
    id: 13,
    Category:'Apricot',
    price: 20,
    name: 'Gold Kist Apricot',
    image: chuli5, // Image representing the Gold Kist apricot variety
    description: 'Gold Kist apricots are early ripening with a sweet and slightly tart flavor, often enjoyed fresh. ' + 
                 'These apricots are known for their vibrant yellow color and delightful taste. ' + 
                 'Their early ripening makes them a popular choice for those looking to enjoy fresh fruit earlier in the season. ' + 
                 'Gold Kist apricots are great for snacking and can also be used in salads for added flavor. ' + 
                 'Their balance of sweetness and tartness adds complexity to various dishes and desserts.',
                 
    rating: 4.5,   // Rating out of 5
  },
  { 
    id: 14,
    Category:'Apricot',
    price: 20,
    name: 'Chinese/Mormon Apricot',
    image: chuli6, // Image representing the Chinese/Mormon apricot variety
    description: 'Chinese or Mormon apricots are small, hardy, and have a sweet, mild flavor, often grown in cooler climates. ' + 
                 'These apricots are particularly resilient, thriving in less than ideal conditions. ' + 
                 'Their small size does not compromise their flavor, which is mild yet sweet, making them enjoyable fresh. ' + 
                 'Chinese apricots are often used in jams and preserves, capturing their essence for later use. ' + 
                 'Their adaptability and flavor make them a unique addition to any apricot collection.',
                 
    rating: 4.5,   // Rating out of 5
  },
  { 
    id: 15,
    Category:'Apricot',
    price: 20,
    name: 'Tomcot Apricot',
    image: chuli7, // Image representing the Tomcot apricot variety
    description: 'Tomcot apricots ripen early and are known for their vibrant color and balanced sweet-tart flavor. ' + 
                 'These apricots stand out with their striking color, attracting attention in orchards and markets. ' + 
                 'Their early ripening makes them a favorite for those eager to enjoy apricots before other varieties. ' + 
                 'Tomcot apricots offer a well-rounded flavor, making them suitable for both fresh eating and cooking. ' + 
                 'Their versatility allows them to shine in a variety of culinary applications, from desserts to savory dishes.',
                 
    rating: 4.5,   // Rating out of 5
  },
  { 
    id: 16,
    Category:'Apricot',
    price: 20,
    name: 'Katy Apricot',
    image: chuli8, // Image representing the Katy apricot variety
    description: 'Katy apricots are large, sweet, and flavorful, commonly enjoyed fresh or in salads. ' + 
                 'These apricots are celebrated for their size, which makes them a substantial addition to any dish. ' + 
                 'Their sweetness is exceptional, providing a delicious contrast in salads and fruit platters. ' + 
                 'Katy apricots are also great for baking, where their flavor can enhance various desserts. ' + 
                 'Their delightful taste and size make them a popular choice for those seeking a satisfying snack.',
                 
    rating: 4.5,   // Rating out of 5
  },
  { 
    id: 17,
    Category:'Apricot',
    price: 20,
    name: 'Royal Apricot',
    image: chuli9, // Image representing the Royal apricot variety
    description: 'Royal apricots have an intense flavor and are often used for canning and drying. ' + 
                 'These apricots are known for their rich, sweet taste that captivates the palate. ' + 
                 'Their intense flavor makes them ideal for preserving, allowing their essence to be enjoyed year-round. ' + 
                 'Royal apricots are often chosen for canning, as their taste remains robust even after processing. ' + 
                 'They are a staple for those who love to create homemade preserves and jams.',
                 
    rating: 4.5,   // Rating out of 5
  },
  { 
    id: 18,
    Category:'Apricot',
    price: 20,
    name: 'Puget Gold Apricot',
    image: chuli10, // Image representing the Puget Gold apricot variety
    description: 'Puget Gold apricots thrive in cooler climates and are known for their sweet, delicious taste. ' + 
                 'These apricots are specially adapted to thrive in regions with cooler temperatures. ' + 
                 'Their sweetness is enhanced by the growing conditions, resulting in a delightful flavor. ' + 
                 'Puget Gold apricots are often enjoyed fresh or used in cooking to add a touch of sweetness. ' + 
                 'Their ability to thrive in cooler climates makes them a unique option for apricot lovers.',
                 
    rating: 4.5,   // Rating out of 5
  },
  { 
    id: 19,
    Category:'Apricot',
    price: 20,
    name: 'Autumn Glo Apricot',
    image: chuli11, // Image representing the Autumn Glo apricot variety
    description: 'Autumn Glo apricots ripen later in the season, with a juicy texture and rich, sweet flavor. ' + 
                 'These apricots are a delightful treat for those who enjoy late-season fruits. ' + 
                 'Their juicy texture and sweetness make them perfect for fresh eating and baking. ' + 
                 'Autumn Glo apricots can enhance various desserts, adding a seasonal touch to dishes. ' + 
                 'Their late ripening makes them a cherished variety for prolonging the apricot season.',
                 
    rating: 4.5,   // Rating out of 5
  },
  { 
    id: 20,
    Category:'Apricot',
    price: 20,
    name: 'Harcot Apricot',
    image: chuli12, // Image representing the Harcot apricot variety
    description: 'Harcot apricots are known for their excellent flavor and are perfect for fresh eating or making jams. ' + 
                 'These apricots are highly regarded for their rich taste, making them a favorite for fresh snacks. ' + 
                 'Their sweet flavor also makes them ideal for creating homemade jams and preserves. ' + 
                 'Harcot apricots hold their flavor well during cooking, enhancing various recipes. ' + 
                 'Their exceptional taste and versatility make them a popular choice among apricot enthusiasts.',
                 
    rating: 4.5,   // Rating out of 5
  },

//Cashews Data
{
  id: 21,
  Category:'cashew',
  price:120,
  name: 'W-180 (King of Cashews)',
  image: w180,
  description: 'W-180, known as the "King of Cashews," is the largest and highest quality cashew nut available.',
  
    rating: 4.5,   // Rating out of 5
},
{
  id: 22,
  Category:'cashew',
  price:120,
  name: 'W-210 (Jumbo Cashews)',
  image: jambo,
  description: 'W-210 cashews are large, high-quality nuts, perfect for gourmet snacks and recipes.',
  
    rating: 4.5,   // Rating out of 5
},
{
  id: 23,
  Category:'cashew',
  price:120,
  name: 'W-240',
  image: w240,
  description: 'W-240 is a popular size that offers a balance between size and affordability.',
  
    rating: 4.5,   // Rating out of 5
},
{
  id: 24,
  Category:'cashew',
  price:120,
  name: 'W-320',
  image: w230,
  description: 'W-320 is one of the most common cashew grades, used widely in snacks and cooking.',
  
    rating: 4.5,   // Rating out of 5
},
{
  id: 25,
  Category:'cashew',
  price:120,
  name: 'W-450',
  image: w450,
  description: 'W-450 cashews are smaller and more affordable, often used in bulk or recipes.',
  
    rating: 4.5,   // Rating out of 5
},
{
  id: 26,
  Category:'cashew',
  price:120,
  name: 'Splits',
  image: splites,
  description: 'Splits are naturally split cashews, often used in cooking and baking.',
  
    rating: 4.5,   // Rating out of 5
},
{
  id: 27,
  Category:'cashew',
  price:120,
  name: 'Butts',
  image: butts,
  description: 'Cashew butts are the bottom parts of the nut, used in cooking and for cashew products.',
  
    rating: 4.5,   // Rating out of 5
},
{
  id: 28,
  Category:'cashew',
  price:120,
  name: 'Pieces',
  image: pieces,
  description: 'Pieces are smaller fragments used in various recipes, including sweets and snacks.',
  
    rating: 4.5,   // Rating out of 5
},
{
  id: 29,
  Category:'cashew',
  price:120,
  name: 'Baby Bits',
  image: babybits,
  description: 'Baby Bits are tiny fragments of cashews, often used in industrial applications or for making cashew flour.',
  
    rating: 4.5,   // Rating out of 5
},
{
  id: 30,
  Category:'cashew',
  price:120,
  name: 'Roasted Cashews',
  image: roasted,
  description: 'Roasted cashews have a rich flavor, enhanced by roasting. Available salted or unsalted.',
  
    rating: 4.5,   // Rating out of 5
},
{
  id: 31,
  Category:'cashew',
  price:120,
  name: 'Salted Cashews',
  image: flavor,
  description: 'Salted cashews are roasted and salted for flavor, making them a popular snack.',
  
    rating: 4.5,   // Rating out of 5
},
{
  id: 32,
  Category:'cashew',
  price:120,
  name: 'Flavored Cashews',
  image: fla,
  description: 'Flavored cashews are coated or mixed with various spices or sweeteners like honey, chili, or garlic.',
  
    rating: 4.5,   // Rating out of 5
},

//Dates Data
{
  id: 33,
  Category:'dates',
  price:50,
  name: 'Medjool',
  image: medjol, // Replace with actual image URLs
  description: 'Large, soft, and rich in flavor, Medjool dates are known as the "king of dates".',
  
    rating: 4.5,   // Rating out of 5
},
{
  id: 34,
  Category:'dates',
  price:50,
  name: 'Deglet Noor',
  image: noor,
  description: 'Deglet Noor dates are known for their semi-dry texture and mild sweetness, making them one of the most popular date varieties in the world. Their firmness and delicate flavor allow them to be versatile in both sweet and savory dishes. They are often used in cooking, baking, and as a snack. Because they aren t overly sticky or too sweet, they are great for stuffing, chopping into salads, blending into smoothies, or incorporating into recipes like date bars and energy bites.',
  
    rating: 4.5,   // Rating out of 5
},
{
  id: 35,
  Category:'dates',
  price:50,
  name: 'Barhi',
  image: barhi,
  description: 'Soft, chewy, and very sweet, Barhi dates are often enjoyed fresh or at the yellow stage.',
  
    rating: 4.5,   // Rating out of 5
},
{
  id: 36,
  Category:'dates',
  price:50,
  name: 'Ajwa',
  image: ajwa,
  description: 'Rich in flavor and soft in texture, Ajwa dates are famous for their cultural and religious significance.',
  
    rating: 4.5,   // Rating out of 5
},
{
  id: 37,
  Category:'dates',
  price:50,
  name: 'Zahidi',
  image: zahidi,
  description: 'Zahidi dates are semi-dry, mildly sweet, and commonly used for making date sugar or pastes.',
  
    rating: 4.5,   // Rating out of 5
},
{
  id: 38,
  Category:'dates',
  price:50,
  name: 'Khudri',
  image: khudri,
  description: 'Dark brown and medium-sweet, Khudri dates are often eaten as a snack or used in dishes.',
  
    rating: 4.5,   // Rating out of 5
},
{
  id: 39,
  Category:'dates',
  price:50,
  name: 'Halawi',
  image: halwi,
  description: 'Sweet and soft with a caramel-like taste, Halawi dates are a perfect treat.',
  
    rating: 4.5,   // Rating out of 5
},
{
  id: 40,
  Category:'dates',
  price:50,
  name: 'Sukkari',
  image: sukkari,
  description: 'Known for their buttery texture and extreme sweetness, Sukkari dates are popular in the Middle East.',
  
    rating: 4.5,   // Rating out of 5
},

//pischio data
{
  id: 53,
  Category:'pistachio',
  price:40,
  name: 'Kerman Pistachio',
  image: kerman,
  description: 'Kerman pistachios are known for their large size, creamy texture, and rich flavor, making them a popular variety.',
  
    rating: 4.5,   // Rating out of 5
},
{
  id: 54,
  Category:'pistachio',
  price:40,
  name: 'Turkish Antep Pistachio',
  image: antep,
  description: 'Turkish Antep pistachios are smaller with a strong flavor and are often used in Turkish desserts like baklava.',
  
    rating: 4.5,   // Rating out of 5
},
{
  id: 55,
  Category:'pistachio',
  price:40,
  name: 'Iranian Fandoghi Pistachio',
  image: fando,
  description: 'Iranian Fandoghi pistachios are round and smaller, with a distinctive flavor that is popular in the Middle East.',
  
    rating: 4.5,   // Rating out of 5
},
{
  id: 56,
  Category:'pistachio',
  price:40,
  name: 'Bronte Pistachio',
  image: bronte,
  description: 'Bronte pistachios are grown in Sicily and are prized for their unique, vibrant green color and intense flavor.',
  
    rating: 4.5,   // Rating out of 5
},
{
  id: 57,
  Category:'pistachio',
  price:40,
  name: 'Kalehghouchi Pistachio',
  image: kale,
  description: 'Kalehghouchi pistachios are large and round, known for their open shells and rich taste.',
  
    rating: 4.5,   // Rating out of 5
},
{
  id: 58,
  Category:'pistachio',
  price:40,
  name: 'Badami Pistachio',
  image: badami,
  description: 'Badami pistachios are long and thin, often used in Indian and Middle Eastern cuisines for their distinct flavor.',
  
    rating: 4.5,   // Rating out of 5
},
{
  id: 59,
  Category:'pistachio',
  price:40,
  name: 'Akbari Pistachio',
  image: Akbari,
  description: 'Akbari pistachios are long and large, with a smooth texture and mild, buttery flavor.',
  
    rating: 4.5,   // Rating out of 5
},
{
  id: 60,
  Category:'pistachio',
  price:40,
  name: 'Red Pistachio',
  image: red,
  description: 'Red pistachios are dyed with a bright red color and have a crunchy texture, making them popular as a snack.',
  
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
{
  id: 54,
  Category:'Raisins',
  price:30,
  name: 'Golden Raisin',
  image: golden,
  description: 'Golden raisins are plumper and have a milder flavor compared to regular raisins.',
  
    rating: 4.5,   // Rating out of 5
},
{
  id: 55,
  Category:'Raisins',
  price:30,
  name: 'Black Raisin',
  image: blacks,
  description: 'Black raisins are dark and have a sweet, tangy flavor, made from red or black seedless grapes.',
  
    rating: 4.5,   // Rating out of 5
},
{
  id: 56,
  Category:'Raisins',
  price:30,
  name: 'Currant',
  image: current,
  description: 'Currants are small, dark raisins with a tart and intense flavor, often used in baking.',
  
    rating: 4.5,   // Rating out of 5
},
{
  id: 57,
  Category:'Raisins',
  price:30,
  name: 'Flame Raisin',
  image: flame,
  description: 'Flame raisins are large, dark, and have a sweet, fruity flavor, often enjoyed as snacks.',
  
    rating: 4.5,   // Rating out of 5
},
{
  id: 58,
  Category:'Raisins',
  price:30,
  name: 'Monukka Raisin',
  image: manoka,
  description: 'Monukka raisins are larger with a rich, sweet flavor and chewy texture.',
  
    rating: 4.5,   // Rating out of 5
},
{
  id: 59,
  price:30,
  Category:'Raisin',
  name: 'Green Raisin',
  image: green,
  description: 'Green raisins are slightly tart and made from green grapes, retaining a greenish hue.',
  
    rating: 4.5,   // Rating out of 5
},
{
  id: 60,
  Category:'Raisins',
  price:30,
  name: 'Red Raisin',
  image: rede,
  description: 'Red raisins are made from red grapes and have a sweet flavor with a lighter red color.',
  
    rating: 4.5,   // Rating out of 5
},
//walnutdata
{
  id: 65,
  Category:'walnut',
  price:23,
  name: 'English Walnuts (Persian Walnuts)',
  image: eng, // Replace with a valid image URL
  description: 'English walnuts are known for their mild flavor and thin, easy-to-crack shells.',
  
    rating: 4.5,   // Rating out of 5
},
{
  id: 66,
  Category:'walnut',
  price:23,
  name: 'Black Walnuts',
  image: black, // Replace with a valid image URL
  description: 'Black walnuts have a bold, earthy flavor with harder shells than English walnuts.',
  
    rating: 4.5,   // Rating out of 5
},
{
  id: 67,
  Category:'walnut',
  price:23,
  name: 'White Walnuts (Butternuts)',
  image: white, // Replace with a valid image URL
  description: 'White walnuts are sweeter and oilier compared to other varieties, but harder to find.',
  
    rating: 4.5,   // Rating out of 5
},
{
  id: 68,
  Category:'walnut',
  price:23,
  name: 'Northern California Walnuts',
  image: cali, // Replace with a valid image URL
  description: 'These walnuts are grown in California, known for their rich flavor and high quality.',
  
    rating: 4.5,   // Rating out of 5
},
{
  id: 69,
  Category:'walnut',
  price:23,
  name: 'Chandler Walnuts',
  image: chand, // Replace with a valid image URL
  description: 'Chandler walnuts are a variant of English walnuts, valued for their light-colored kernel.',
  
    rating: 4.5,   // Rating out of 5
},
{
  id: 70,
  Category:'walnut',
  price:23,
  name: 'Manchurian Walnuts',
  image: man, // Replace with a valid image URL
  description: 'Manchurian walnuts are smaller with thicker shells, able to grow in colder climates.',
  
    rating: 4.5,   // Rating out of 5
}
];

// AlmondCards Component
const AlmondCards = () => {

  const navigate = useNavigate(); // Hook for programmatic navigation

  // Function to handle card clicks and navigate to product details
  const handleCardClick = (product) => {
    navigate(`/productDetails`, { state: { product } });
  };

  // Function to handle adding items to the cart
  const handleAddToCart = (e, product) => {
    e.stopPropagation(); // Prevent triggering the card click event
    // Implement your add to cart logic here
    console.log(`Added ${product.name} to cart.`);
  };

  return (
    <Grid container spacing={2} sx={{ mt: 12 }}>
      {ProductData.map((product) => (
        <Grid item xs={12} sm={6} md={3} key={product.Category}>
          <Card
            onClick={() => handleCardClick(product)} // Pass the entire almond object
            sx={{
              height: 400,
              cursor: 'pointer', // Show pointer cursor on hover
              boxShadow: 5,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <CardMedia
              component="img"
              height="200"
              image={product.image}
              alt={product.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {product.name}
              </Typography>
              <Typography variant="h6" color="text.primary" sx={{ mb: 1 }}>
                ${product.price.toFixed(2)}
              </Typography>
              <Box display="flex" alignItems="center" justifyContent="space-between">
                <Rating
                  name={`rating-${product.id}`}
                  value={product.rating}
                  precision={0.1}
                  readOnly
                  size="small"
                />
                <IconButton
                  color="primary"
                  onClick={(e) => handleAddToCart(e, product)}
                  aria-label="add to cart"
                >
                  <ShoppingCartIcon />
                </IconButton>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default AlmondCards ;
