import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import emailjs from "emailjs-com";

const emailjsUserID = "GDqNUj-4NBt4hQzSB";
const emailjsServiceID = "service_wcqmeyy";
const emailjsTemplateID = "template_qlkuhii";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Send the email using EmailJS
    emailjs
      .sendForm(
        emailjsServiceID,
        emailjsTemplateID,
        event.target,
        emailjsUserID
      )
      .then(
        (result) => {
          console.log("Email successfully sent!", result);
        },
        (error) => {
          console.error("Email failed to send: ", error);
        }
      );

    // Clear the form data
    setFormData({
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1>Contact Us</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="contactEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </Form.Group>

            <Form.Group controlId="contactSubject">
              <Form.Label>Subject</Form.Label>
              <Form.Control
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Enter subject"
                required
              />
            </Form.Group>

            <Form.Group controlId="contactMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message"
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;
