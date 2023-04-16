// src/components/CartItem.js
import React from "react";
import { Row, Col, Button } from "react-bootstrap";

const CartItem = ({ item, handleRemove, handleUpdateQuantity }) => {
  return (
    <Row className="mb-3 align-items-center">
      <Col md={4}>{item.name}</Col>
      <Col md={2}>${item.price.toFixed(2)}</Col>
      <Col md={3}>
        <input
          type="number"
          min="1"
          max="99"
          value={item.quantity}
          onChange={(e) =>
            handleUpdateQuantity(item.id, parseInt(e.target.value))
          }
          className="form-control"
        />
      </Col>
      <Col md={2}>${(item.price * item.quantity).toFixed(2)}</Col>
      <Col md={1}>
        <Button variant="danger" onClick={() => handleRemove(item.id)}>
          Remove
        </Button>
      </Col>
    </Row>
  );
};

export default CartItem;
