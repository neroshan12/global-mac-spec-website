import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Quote from "../Quote";
import Map from "../Map";
import "./footer.scss";

const Footer = () => {
  return (
    <>
      <div className="footer-box">
        <Container>
          <Row>
            <Col className="footer-content" xs={12} sm={12} lg={4}>
              <h4>Global Macspec</h4>
              <p>
                If you want an instant quote for your hire or purchase? Call us,
                email us, or fill out our contact form for an instant reply!
              </p>

              <p>
                Email:{" "}
                <a href="mailto:globalmacspec@gmail.com">
                  globalmacspec@gmail.com
                </a>
              </p>

              <p>Telephone: 07983209777</p>
              <p>Address: 69-77 High Street, Croydon, CR0 1QQ</p>
              <Map height="300px" />
            </Col>

            <Col className="footer-content" xs={12} sm={12} lg={4}>
              <h4>Quick Info</h4>
              <p>
                We stock just about every Apple Mac conceivable! Our range is
                extensive, to say the least. If you require the highest spec Mac
                Pro, whilst we fix your mac, we have a mac that will suit your
                needs. No hire is too big or too small, should you wish to hire
                40 Apple Macs or One Apple Mac, our vast range allows us to
                cater for everyone. Global Macspec specialises in the sales,
                repairs, servicing and maintenance of pre-owned Apple Mac
                computers.
              </p>
            </Col>
            <Col className="footer-content" xs={12} sm={12} lg={4}>
              <h4>Contact Us</h4>
              <Quote />
            </Col>
          </Row>
        </Container>
      </div>

      <Row className="footer-message-container">
        <div className="footer-message">
          <h2>Global Macspec</h2>
          <h5>Call us free on 07983209777</h5>
        </div>
      </Row>
    </>
  );
};

export default Footer;
