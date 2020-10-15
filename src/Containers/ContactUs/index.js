import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Map from "../../Components/Map";

const ContactUs = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col sm={12}>
            <h3>Contact Us</h3>
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
      </Container>
    </div>
  );
};

export default ContactUs;
