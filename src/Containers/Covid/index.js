import React from "react";
import { Column, Row, Col, Container } from "react-bootstrap";
import Footer from "../../Components/Footer";

const Covid = () => {
  return (
    <>
      <div className="container">
        <h1 className="custom-headings">Covid-19</h1>
        <Container>
          <Row>
            <p>Guidelines pending.</p>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Covid;
