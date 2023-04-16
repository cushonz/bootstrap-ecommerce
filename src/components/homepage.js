import React from "react";
import {
  Navbar,
  Nav,
  Container,
  Button,
  Card,
  Row,
  Col,
} from "react-bootstrap";
import filament from "../images/filament_pic.jpg";

const HomePage = () => {
  return (
    <>
      <div className="bg-light py-5">
        <Container className="text-center">
          <h1 className="display-4">Welcome to the Perfect Prints 3D Shop</h1>
          <p className="lead">
            Your one stop shop for 3D printed plant accessories
          </p>
          <Button variant="primary">Shop Now</Button>
        </Container>
      </div>

      <Container>
        <Row>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Sustainable</Card.Title>
                <Card.Img src={filament}></Card.Img>
                <Card.Text>
                  Made from responsibly sourced plastic called PLA, PLA is a
                  recycleable, natural thermoplastic polyester.
                </Card.Text>
                <a
                  href="https://www.biopak.com/au/resources/what-is-pla"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Read more
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Promotes Healthy Plant Growth</Card.Title>
                <Card.Img src="https://images.unsplash.com/photo-1457530378978-8bac673b8062?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
                <Card.Text>
                  Based on customer feedback, it has been demonstrated that our
                  poles are favored by plants. This is because our poles are 3D
                  printed, which enables the plant to grip onto the mosspole
                  more effectively.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Made to Order</Card.Title>
                <Card.Text>
                  Every order from the Perfect Prints 3D shop is made to order!
                  This helps us prevent wasted material/parts but can mean your
                  order may take some time depending on volume!
                </Card.Text>
                <Card.Img src="https://images.unsplash.com/photo-1575203091586-611fe505bb0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
