import React from "react";
import Quote from "../../Components/Quote";
import MacGrid from "../../Components/MacGrid";
import iMacForSale from "../../Products/iMac";
import { Column, Row, Col, Container } from "react-bootstrap";

import "./buy.scss";

const Buy = () => {
  return (
    <Container>
      <Row>
        <Col sm={6} lg={9}>
          <h2>iMac</h2>
          <MacGrid data={iMacForSale} />
        </Col>
        <Col sm={6} lg={3}>
          <Quote />
        </Col>
      </Row>
    </Container>
  );
};

export default Buy;
