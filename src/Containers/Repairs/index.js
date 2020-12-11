import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./repairs.scss";

const Repairs = () => {
  return (
    <div>
      <h1>Repairs</h1>
      {/* 
      <img src={process.env.PUBLIC_URL + "static/repairs/battery.png"}></img>
      <img src={process.env.PUBLIC_URL + "static/repairs/drops.png"}></img>
      <img src={process.env.PUBLIC_URL + "static/repairs/hard-drive.png"}></img>
      <img src={process.env.PUBLIC_URL + "static/repairs/screen.png"}></img> */}

      <Container>
        <Row xs={1} sm={2} md={4}>
          <Col className="container">
            <Image
              src={process.env.PUBLIC_URL + "static/repairs/battery.png"}
              rounded
              className="repair-image"
            />
          </Col>
          <Col className="container">
            <Image
              src={process.env.PUBLIC_URL + "static/repairs/drops.png"}
              rounded
              className="repair-image"
            />
          </Col>
          <Col className="container">
            <Image
              src={process.env.PUBLIC_URL + "static/repairs/hard-drive.png"}
              rounded
              className="repair-image"
            />
          </Col>
          <Col className="container">
            <Image
              src={process.env.PUBLIC_URL + "static/repairs/screen.png"}
              rounded
              className="repair-image"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Repairs;
