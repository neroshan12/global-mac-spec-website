import React from "react";
import { CardDeck, Card, Column, Row, Col, Container } from "react-bootstrap";
import Quote from "../../Components/Quote";
import "./footer.scss";

const Footer = () => {
  return (
    <Container className="footer-container">
      <Row>
        <Col sm={4}>
          <h4>Global Mac Spec</h4>
          <p>
            If you want an instant quote for your hire or purchase? Call us,
            email us, or fill out our contact form for an instant reply!
          </p>

          <p>email:globalmacspec@gmail.com</p>
          <p>telephone: 07983209777</p>
          <p>address: 69-77 High Street, Croydon, CR0 1QQ</p>
        </Col>

        <Col sm={4}>
          <h4>Quick Info</h4>
          <p>
            We stock just about every Apple Mac conceivable! Our range is
            extensive, to say the least. If you require the highest spec Mac
            Pro, whilst we fix your mac, we have a mac that will suit your
            needs. No hire is too big or too small, should you wish to hire 40
            Apple Macs or One Apple Mac, our vast range allows us to cater for
            everyone. Global Macspec specialises in the sales, repairs,
            servicing and maintenance of pre-owned Apple Mac computers.
          </p>
        </Col>
        <Col sm={4}>
          <Quote />
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
