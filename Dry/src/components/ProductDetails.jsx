import { useLocation } from 'react-router-dom';

const ProductDetails = () => {
  const location = useLocation();
  const { product } = location.state || {}; // Access product data from location state

  if (!product) {
    return <div>No product details available</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <h3>Price: ${product.price}</h3>
      
      {/* Example buttons for actions */}
      <button>Add to Cart</button>
      <button>Buy Now</button>

      {/* Display related products or more details here */}
    </div>
  );
};

export default ProductDetails;
