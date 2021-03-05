import React from "react";
import Quote from "../../Components/Quote";
import MacGrid from "../../Components/MacGrid";
import iMacForSale from "../../Products/iMac";
import { Column, Row, Col, Container } from "react-bootstrap";

import "./buy.scss";

const Buy = () => {
  return (
    <Container>
      <h2>iMac</h2>
      <Row noGutter>
        <Col className="grid-content-container" sm={6} lg={9}>
          <MacGrid data={iMacForSale} />
        </Col>
        <Col className="grid-content-container" sm={6} lg={3}>
          <Quote />
        </Col>
      </Row>
    </Container>
  );
};

export default Buy;
