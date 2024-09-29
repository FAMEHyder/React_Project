
import { Typography } from '@mui/material';
import PropTypes from 'prop-types'; 
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const ProductDetailsTable = ({ product }) => {
  if (!product) {
    return <Typography variant="h6" align="center">Product data not available</Typography>;
  }

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
            <TableCell>{product.name || 'N/A'}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              Description
            </TableCell>
            <TableCell>{product.description || 'N/A'}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              Price
            </TableCell>
            <TableCell>{product.price ? `$${product.price}` : 'N/A'}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              Category
            </TableCell>
            <TableCell>{product.category || 'N/A'}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

ProductDetailsTable.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    category: PropTypes.string,
    image: PropTypes.string,
  }),
};

export default ProductDetailsTable;