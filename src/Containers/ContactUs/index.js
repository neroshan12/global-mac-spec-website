import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Map from "../../Components/Map";
import Footer from "../../Components/Footer";
import "./contact.scss";

const ContactUs = () => {
  return (
    <div>
      <Container>
        <Col sm={12}>
          <h1 className="custom-headings">Contact Us</h1>
        </Col>

        <Row xs={1} md={2}>
          <Col>
            <h4>Where are we?</h4>
            <p>69-77 High Street, Croydon, CR0 1QQ</p>

            <h4>Train station</h4>
            <p>We're a short walk away from East Croydon station.</p>
          </Col>

          <Col className="opening-times">
            <h4>Opening Times</h4>
            <p>Monday - Saturday: 10am - 7pm</p>
            <p>Sunday: 11am - 4pm</p>
          </Col>
        </Row>

        <Map />
      </Container>
      <Footer />
    </div>
  );
};

export default ContactUs;
