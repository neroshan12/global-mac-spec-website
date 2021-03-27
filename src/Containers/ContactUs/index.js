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
            <h1 className="custom-headings">Contact Us</h1>
          </Col>
          <Col sm={12}>
            <h4>Where are we?</h4>
            <p>69-77 High Street, Croydon, CR0 1QQ</p>
            <Map />
          </Col>
        </Row>
        <Row>
          <Col>
            <h4>Opening Times</h4>
            <p>Monday - Saturday</p>
            <p>10am - 7pm</p>
            <h4>Sunday</h4>
            <p>11am - 4pm</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h4>Train station</h4>
            <p>We're a short walk away from East Croydon station.</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h4>Routes</h4>
            <p></p>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default ContactUs;
