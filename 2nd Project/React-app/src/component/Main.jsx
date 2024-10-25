import { useEffect, useState } from 'react';
import axios from 'axios';
import { Grid, Card, CardContent, CardMedia, Typography, Container, Box, Dialog, DialogTitle, DialogContent, IconButton, Button, Skeleton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const Main = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [dialogLoading, setDialogLoading] = useState(false);

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
      } finally {
        setLoading(false); // Set loading to false after data is fetched
      }
    };

    fetchProducts();
  }, []);

  const handleOpen = (product) => {
    setSelectedProduct(null);
    setDialogLoading(true);
    setOpen(true);

    axios.get(`https://fakestoreapi.com/products/${product.id}`)
      .then(response => {
        setSelectedProduct(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the product details!", error);
      })
      .finally(() => {
        setDialogLoading(false); // Set loading to false after fetching product details
      });
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProduct(null);
  };

  const handleAddToCart = () => {
    console.log(`${selectedProduct?.title} added to cart!`);
  };

  const handleBuyNow = () => {
    console.log(`Proceed to buy ${selectedProduct?.title}!`);
  };

  return (
    <Container>
      <Grid container spacing={4}>
        {loading ? (
          Array.from(new Array(6)).map((_, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Box sx={{ height: '100%' }}>
                <Skeleton variant="rectangular" height={140} />
                <Skeleton variant="text" height={30} sx={{ mt: 1 }} />
                <Skeleton variant="text" height={30} sx={{ mt: 1 }} />
              </Box>
            </Grid>
          ))
        ) : (
          products.slice(0, 20).map((product) => (
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
          ))
        )}
      </Grid>

      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle>
          {selectedProduct?.title || "Loading..."}
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
          {dialogLoading ? (
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Skeleton variant="rectangular" width="100%" height={300} />
              <Skeleton variant="text" width="60%" height={30} sx={{ mt: 2 }} />
              <Skeleton variant="text" width="80%" height={20} sx={{ mt: 1 }} />
              <Skeleton variant="text" width="40%" height={20} sx={{ mt: 1 }} />
            </Box>
          ) : selectedProduct ? (
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

              {/* Add buttons for Add to Cart and Buy Now here */}
              <Box mt={3} display="flex" justifyContent="flex-end" gap={1} width="100%">
                <Button variant="contained" color="primary" size="large" onClick={handleAddToCart}>
                  Add to Cart
                </Button>
                <Button variant="contained" color="secondary" size="large" onClick={handleBuyNow}>
                  Buy Now
                </Button>
              </Box>
            </Box>
          ) : (
            <Typography variant="body2" color="textSecondary">
              Failed to load product details.
            </Typography>
          )}
        </DialogContent>
      </Dialog>
    </Container>
  );
};

export default Main;
