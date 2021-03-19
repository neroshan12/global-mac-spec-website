import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Quote from "../../Components/Quote";
import "./repairs.scss";

const Repairs = () => {
  return (
    <div>
      {/* 
      <img src={process.env.PUBLIC_URL + "static/repairs/battery.png"}></img>
      <img src={process.env.PUBLIC_URL + "static/repairs/drops.png"}></img>
      <img src={process.env.PUBLIC_URL + "static/repairs/hard-drive.png"}></img>
      <img src={process.env.PUBLIC_URL + "static/repairs/screen.png"}></img> */}

      <Container>
        <h1>Repairs</h1>
        <Row xs={1} sm={2} md={3}>
          <Col className="repair-container">
            <Image
              src={process.env.PUBLIC_URL + "static/repairs/battery.png"}
              rounded
              className="repair-image"
            />
            <p>Battery repair from only £90</p>
          </Col>
          {/* <Col className="container">
            <Image
              src={process.env.PUBLIC_URL + "static/repairs/drops.png"}
              rounded
              className="repair-image"
            />
          </Col> */}
          <Col className="repair-container">
            <Image
              src={process.env.PUBLIC_URL + "static/repairs/hard-drive.png"}
              rounded
              className="repair-image"
            />
            <p>Hard drive repair from only £60</p>
          </Col>
          <Col className="repair-container">
            <Image
              src={process.env.PUBLIC_URL + "static/repairs/screen.png"}
              rounded
              className="repair-image"
            />
            <p>Screen repair from only £199</p>
          </Col>
        </Row>
        <Quote />
      </Container>
    </div>
  );
};

export default Repairs;
