import React, { useState } from "react";
import Quote from "../../Components/Quote";
import MacGrid from "../../Components/MacGrid";
import iMacForSale from "../../Products/iMac";
import iMacProForSale from "../../Products/iMacPro";
import macBookAirForSale from "../../Products/MacBookAir";
import macBookProForSale from "../../Products/MacBookPro";
import otherForSale from "../../Products/Other";
import Footer from "../../Components/Footer";
import ScrollButton from "../../Components/ScrollButton";

import { Row, Col, Container, Nav, Button } from "react-bootstrap";

import "./buy.scss";

const Buy = () => {
  const [displayedProducts, setDisplayedProducts] = useState(iMacForSale);

  const selectProductType = (e) => {
    console.log(e);
    switch (e) {
      case "1":
        setDisplayedProducts(iMacProForSale);
        console.log(e);
        break;
      case "2":
        setDisplayedProducts(iMacForSale);
        console.log(e);
        break;
      case "3":
        setDisplayedProducts(macBookProForSale);
        console.log(e);
        break;
      case "4":
        setDisplayedProducts(macBookAirForSale);
        console.log(e);
        break;
      case "5":
        setDisplayedProducts(otherForSale);
        console.log(e);
        break;
    }
  };

  return (
    <>
      <Container>
        <Nav variant="tabs" defaultActiveKey="3">
          <Nav.Item>
            <Nav.Link
              onSelect={(e) => {
                selectProductType(e);
              }}
              eventKey="1"
            >
              iMac Pro
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              onSelect={(e) => {
                selectProductType(e);
              }}
              eventKey="2"
            >
              iMac
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              onSelect={(e) => {
                selectProductType(e);
              }}
              eventKey="3"
            >
              MacBook Pro
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              onSelect={(e) => {
                selectProductType(e);
              }}
              eventKey="4"
            >
              MacBook Air
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              onSelect={(e) => {
                selectProductType(e);
              }}
              eventKey="5"
            >
              Other
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Row>
          <Col className="mac-grid-container" sm={6} lg={9}>
            <MacGrid data={displayedProducts} />
          </Col>
          <Col className="quote-container" sm={6} lg={3}>
            <Quote />
          </Col>
        </Row>
        <ScrollButton />
      </Container>
      <Footer />
    </>
  );
};

export default Buy;
