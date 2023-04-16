import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProductCard from "./productCard"; // Import the ProductCard component
import mosspole1 from "../images/mossPole1.jpg";
import bulb from "../images/bulb-planter.jpg";

const productData = [
  {
    id: 1,
    name: "Product 1",
    price: "$6.99",
    colors: ["Red", "Blue", "Green"],
    imageUrl: mosspole1,
  },
  {
    id: 2,
    name: "Bulbasaur Planter",
    price: "$15.99",
    colors: ["Red", "Blue", "Green"],
    imageUrl: bulb,
  },
];

const ProductsPage = () => {
  return (
    <Container>
      <Row>
        {productData.map((product) => (
          <Col md={4} key={product.id} className="mb-4">
            <Link to={`/products/${product.id}`}>
              <ProductCard product={product} />{" "}
              {/* Use the ProductCard component */}
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductsPage;
