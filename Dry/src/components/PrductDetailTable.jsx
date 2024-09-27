import PropTypes from 'prop-types'; // Import PropTypes
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const ProductDetailsTable = ({ product }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="left"><strong>Product Details</strong></TableCell>
            <TableCell align="left"><strong>Information</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell component="th" scope="row">
              Product Name
            </TableCell>
            <TableCell>{product.name}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              Description
            </TableCell>
            <TableCell>{product.description}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              Price
            </TableCell>
            <TableCell>${product.price}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              Category
            </TableCell>
            <TableCell>{product.category}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

// Prop validation for the product object
ProductDetailsTable.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    image: PropTypes.string, // Optional, in case the image is not provided
  }).isRequired,
};

export default ProductDetailsTable;
