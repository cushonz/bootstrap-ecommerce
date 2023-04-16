import React, { useState } from "react";
import { Container, Row, Col, Carousel, Image } from "react-bootstrap";

const Listing = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setActiveIndex(selectedIndex);
  };

  return (
    <Container>
      <Row>
        <Col md={6}>
          <Carousel activeIndex={activeIndex} onSelect={handleSelect}>
            <Carousel.Item>
              <Image
                className="d-block w-100"
                src="https://via.placeholder.com/600x400"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <Image
                className="d-block w-100"
                src="https://via.placeholder.com/600x400"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <Image
                className="d-block w-100"
                src="https://via.placeholder.com/600x400"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col md={6}>
          <h1>Product Title</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
          <h2>Price: $99.99</h2>
          <button className="btn btn-primary">Add to Cart</button>
        </Col>
      </Row>
    </Container>
  );
};

export default Listing;
