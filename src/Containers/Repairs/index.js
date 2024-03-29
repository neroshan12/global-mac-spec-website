import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Quote from "../../Components/Quote";
import Footer from "../../Components/Footer";
import "./repairs.scss";

const Repairs = () => {
  return (
    <>
      {/* 
      <img src={process.env.PUBLIC_URL + "static/repairs/battery.png"}></img>
      <img src={process.env.PUBLIC_URL + "static/repairs/drops.png"}></img>
      <img src={process.env.PUBLIC_URL + "static/repairs/hard-drive.png"}></img>
      <img src={process.env.PUBLIC_URL + "static/repairs/screen.png"}></img> */}

      <Container>
        <h1 className="custom-headings">Repairs</h1>
        <Row xs={1} sm={2} md={3}>
          <Col className="repair-container">
            <p className="info">Battery</p>
            <Image
              src={process.env.PUBLIC_URL + "static/repairs/battery.png"}
              rounded
              className="repair-image"
            />
            <p className="info">from only £90</p>
          </Col>
          {/* <Col className="container">
            <Image
              src={process.env.PUBLIC_URL + "static/repairs/drops.png"}
              rounded
              className="repair-image"
            />
          </Col> */}
          <Col className="repair-container">
            <p className="info">Hard drive</p>
            <Image
              src={process.env.PUBLIC_URL + "static/repairs/hard-drive.png"}
              rounded
              className="repair-image"
            />
            <p className="info">from only £60</p>
          </Col>
          <Col className="repair-container">
            <p className="info">Screen</p>
            <Image
              src={process.env.PUBLIC_URL + "static/repairs/screen.png"}
              rounded
              className="repair-image"
            />
            <p className="info">from only £199</p>
          </Col>
        </Row>
        <div className="notice">
          We are happy to do call out repairs at your convenience.
        </div>
        <Quote />
      </Container>
      <Footer />
    </>
  );
};

export default Repairs;
