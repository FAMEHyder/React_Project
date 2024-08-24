import { useEffect, useState } from 'react';
import axios from 'axios';
import { Grid, Card, CardContent, CardMedia, Typography, Container, Box, Dialog, DialogTitle, DialogContent, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const Main = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const menClothing = await axios.get("https://fakestoreapi.com/products/category/men's%20clothing");
        const womenClothing = await axios.get("https://fakestoreapi.com/products/category/women's%20clothing");
        const electronics = await axios.get("https://fakestoreapi.com/products/category/electronics");
        const jewelery = await axios.get("https://fakestoreapi.com/products/category/jewelery");

        const allProducts = [
          ...menClothing.data,
          ...womenClothing.data,
          ...electronics.data,
          ...jewelery.data,
        ];

        setProducts(allProducts);
      } catch (error) {
        console.error("There was an error fetching the data!", error);
      }
    };

    fetchProducts();
  }, []);

  const handleOpen = (product) => {
    setSelectedProduct(product);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProduct(null);
  };

  return (
    <Container>
      <Grid container spacing={4}>
        {products.slice(0, 20).map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <Box sx={{ height: '100%' }}>
              <Card 
                onClick={() => handleOpen(product)} 
                sx={{ height: '100%', display: 'flex', flexDirection: 'column', ':hover': { boxShadow: 6 } }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={product.image}
                  alt={product.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="div">
                    {product.title}
                  </Typography>
                  <Typography variant="h6" color="textPrimary">
                    ${product.price}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Address: Sat_Tara Shopping Mall Skardu
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Grid>
        ))}
      </Grid>

      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle>
          {selectedProduct?.title}
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          {selectedProduct && (
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <CardMedia
                component="img"
                height="300"
                image={selectedProduct.image}
                alt={selectedProduct.title}
              />
              <Typography gutterBottom variant="h6" component="div" sx={{ mt: 2 }}>
                {selectedProduct.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
                {selectedProduct.description}
              </Typography>
              <Typography variant="h5" color="textPrimary">
                ${selectedProduct.price}
              </Typography>
            </Box>
          )}
        </DialogContent>
      </Dialog>
    </Container>
  );
};

export default Main;
