// Cart.js
import React, { useState, useEffect } from "react";
import products from "../data/productData.js";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const fetchedItems = storedCart.map((item) => {
      const product = products.find((p) => p.id === item.productId);
      return { ...product, quantity: item.quantity };
    });
    setCartItems(fetchedItems);
  }, []);

  return (
    <div
      className="cart"
      style={{
        position: "fixed",
        left: "0",
        width: "300px",
        maxHeight: "80vh", // Set maxHeight to desired value
        overflowY: "scroll", // Enable vertical scrolling
      }}
    >
      <h3>Your Cart</h3>
      {cartItems.map((item, index) => (
        <Card key={index} style={{ marginBottom: "10px" }}>
          <Card.Img variant="top" src={item.images[0]} />
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Price: ${item.price.toFixed(2)}</ListGroupItem>
            <ListGroupItem>Quantity: {item.quantity}</ListGroupItem>
          </ListGroup>
        </Card>
      ))}
    </div>
  );
};

export default Cart;
