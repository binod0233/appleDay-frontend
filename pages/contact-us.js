import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function ContactUs() {
  return (
    <Container>
      <div className="text-center my-4">
        <h1>Contact Us</h1>
        <p className="lead mb-5">
          Need to get touch with us ? Either fill out the form with your inquiry
          or find the company email you'd like to contact below.
        </p>
      </div>
      <Row className="my-md-5">
        <Col md={6}>
          <h4>Contact Form</h4>
          <Form>
            <Row className="ps-2 g-2">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" placeholder="Enter first name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>What can we help you with ?</Form.Label>
                <Form.Control as="textarea" aria-label="With textarea" />
              </Form.Group>
            </Row>
            <Button variant="newColor" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
        <Col md={6}>
          <div className="ratio ratio-1x1">
            <iframe
              width="100%"
              height="600"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=27.680335,%2085.340617+(Apple%20Day)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.maps.ie/distance-area-calculator.html">
                measure area map
              </a>
            </iframe>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactUs;
