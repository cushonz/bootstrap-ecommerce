import React from "react";
import { useParams } from "react-router-dom";
import products from "../data/productData.js";
import Cart from "../components/Cart.js";
import { Container, Row, Col, Image, Carousel, Button } from "react-bootstrap";

const Listing = ({ addToCart }) => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <Container>
      <Row>
        <Col md={6}>
          <Carousel>
            {product.images.map((image, index) => (
              <Carousel.Item key={index}>
                <Image
                  className="d-block w-100"
                  src={image}
                  alt={`Slide ${index}`}
                  fluid
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
        <Col md={6}>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <p>Price: ${product.price.toFixed(2)}</p>
          <Button variant="primary" size="lg" block onClick={addToCart}>
            Add to Cart
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Listing;
