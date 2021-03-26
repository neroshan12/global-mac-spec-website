import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Map from "../../Components/Map";
import Footer from "../../Components/Footer";

const ContactUs = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col sm={12}>
            <h1>Contact Us</h1>
          </Col>
          <Col sm={12}>
            <h6>Where are we?</h6>
            <p>69-77 High Street, Croydon, CR0 1QQ</p>
            <Map />
          </Col>
        </Row>
        <Row>
          <Col>
            <h6>Openning Times</h6>
            <p>Monday - Saturday</p>
            <h6>Sunday</h6>
            <p>10am - 7pm</p>
            <p>11am - 4pm</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h6>Train station</h6>
            <p>We're a short walk away from East Croydon station.</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h6>Routes</h6>
            <p></p>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default ContactUs;
