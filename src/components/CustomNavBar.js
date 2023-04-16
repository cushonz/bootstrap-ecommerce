import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom"; // Add this import

const CustomNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          Perfect Prints 3D
        </Navbar.Brand>{" "}
        {/* Modify this line */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/" activeClassName="active">
              Home
            </Nav.Link>{" "}
            {/* Modify this line */}
            <Nav.Link as={NavLink} to="/products" activeClassName="active">
              Products
            </Nav.Link>{" "}
            {/* Modify this line */}
            <Nav.Link as={NavLink} to="/about" activeClassName="active">
              About
            </Nav.Link>{" "}
            <Nav.Link as={NavLink} to="/contact-us" activeClassName="active">
              Contact Us
            </Nav.Link>{" "}
            {/* Modify this line */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
