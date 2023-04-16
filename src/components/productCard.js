import React from "react";
import { Card } from "react-bootstrap";

// Add the product prop to the function parameters and update the function name to PascalCase
const ProductCard = ({ product }) => {
  return (
    <Card>
      <Card.Img variant="top" src={product.imageUrl} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>Price: {product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
