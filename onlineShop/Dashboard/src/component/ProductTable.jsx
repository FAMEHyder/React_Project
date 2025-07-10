import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  CircularProgress,
  Box,
  Typography,
  Skeleton,
  IconButton,
} from "@mui/material";
import { Delete } from "@mui/icons-material";
import axios from "axios";

const ProductTable = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:8000/product/");
        console.log("API Response:", response.data); // Debugging the API response structure
        setProducts(response.data.result || []); // Adjust if the API has a different structure
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Failed to fetch product data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Handle deleting a product
  const handleDelete = async (id) => {
    try {
      // Sending a DELETE request to the API
      await axios.delete(`http://localhost:8000/product/${id}`);
      
      // Remove the deleted product from the state
      setProducts((prevProducts) => prevProducts.filter((product) => product._id !== id));
    } catch (err) {
      console.error("Error deleting product:", err);
      setError("Failed to delete product. Please try again later.");
    }
  };

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="50vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box textAlign="center" marginTop="20px" color="red">
        <Typography variant="h6">{error}</Typography>
      </Box>
    );
  }

  if (products.length === 0) {
    return (
      <Box textAlign="center" marginTop="20px">
        <Typography variant="h6">No Products Found</Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        padding: "20px",
        marginLeft: "240px", // Adjust this to the width of the sidebar (240px is common for Material UI)
        marginTop: "20px",
        overflowX: "auto", // Ensures horizontal scrolling when needed
        maxWidth: "calc(100% - 240px)", // Prevents the table from overflowing on smaller screens
      }}
    >
      <TableContainer
        component={Paper}
        sx={{
          boxShadow: 3,
          overflowX: "auto", // Adds scroll if table exceeds the width
        }}
      >
        <Table
          sx={{
            tableLayout: "auto",
            "& td, & th": {
              whiteSpace: "normal",
              wordWrap: "break-word",
            },
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell align="center"><strong>Product Name</strong></TableCell>
              <TableCell align="center"><strong>Category</strong></TableCell>
              <TableCell align="center"><strong>Price</strong></TableCell>
              <TableCell align="center"><strong>Description</strong></TableCell>
              <TableCell align="center"><strong>Actions</strong></TableCell> {/* For delete icon */}
            </TableRow>
          </TableHead>
          <TableBody>
            {loading
              ? [1, 2, 3, 4, 5].map((_, index) => (
                  <TableRow key={index}>
                    <TableCell align="center">
                      <Skeleton variant="text" width="100px" />
                    </TableCell>
                    <TableCell align="center">
                      <Skeleton variant="text" width="100px" />
                    </TableCell>
                    <TableCell align="center">
                      <Skeleton variant="text" width="80px" />
                    </TableCell>
                    <TableCell align="center">
                      <Skeleton variant="text" width="200px" />
                    </TableCell>
                    <TableCell align="center">
                      <Skeleton variant="text" width="50px" />
                    </TableCell>
                    <TableCell align="center">
                      <Skeleton variant="circle" width={24} height={24} />
                    </TableCell>
                  </TableRow>
                ))
              : products.map((product) => (
                  <TableRow key={product._id}>
                    <TableCell align="center">{product.name}</TableCell>
                    <TableCell align="center">{product.category}</TableCell>
                    <TableCell align="center">{`$${product.price}`}</TableCell>
                    <TableCell align="center">{product.description}</TableCell>
                    <TableCell align="center">
                      <IconButton
                        color="error"
                        onClick={() => handleDelete(product._id)} // Call handleDelete on icon click
                      >
                        <Delete />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ProductTable;
