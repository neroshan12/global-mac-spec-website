import React from "react";
import { CardDeck, Card, Column, Row, Col, Container } from "react-bootstrap";
import "./macgrid.scss";

const MacGrid = ({ data, dealsGrid = false, hire = false }) => {
  let xs;
  let sm;
  let md;
  let lg;
  if (dealsGrid) {
    xs = 12;
    sm = 12;
    md = 4;
    lg = 4;
  } else {
    xs = 12;
    sm = 12;
    md = 12;
    lg = 6;
  }

  const calculateHirePrice = (value) => {
    let hirePrice;
    if (value.charAt(0) === "£") {
      let price = parseInt(value.substring(1));
      if (price < 500) {
        hirePrice = 19;
      } else if (price > 1000) {
        hirePrice = 30;
      } else {
        hirePrice = 25;
      }
      return `from £${hirePrice}/week`;
    } else {
      return value;
    }
  };

  return (
    <div className="card-deck-container">
      <Container>
        <CardDeck>
          {data.map((item, index) => {
            return (
              <Col xs={xs} sm={sm} md={md} lg={lg} key={index}>
                <Card
                  style={{ margin: "0rem", marginTop: "0.5rem" }}
                  key={index}
                  className="card"
                >
                  <Card.Img
                    className="card-image"
                    variant="top"
                    src={
                      item.img
                        ? process.env.PUBLIC_URL + item.img
                        : process.env.PUBLIC_URL +
                          `static/Macs/stockappleimage.jpeg`
                    }
                  />
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    {/* 
                    <Card.Text className="card-description">
                      {item.processor}
                    </Card.Text>
                    <Card.Text className="card-description">
                      {item.ram}
                    </Card.Text>
                    <Card.Text className="card-description">
                      {item.memory}
                    </Card.Text>
                    {item.year && (
                      <Card.Text className="card-description">
                        {item.year}
                      </Card.Text>
                    )} */}

                    <Card.Text className="card-description">
                      | {item.processor} | {item.ram} | {item.memory} |
                      {item.year && item.year} |
                    </Card.Text>

                    <Card.Text className="card-description__price">
                      {hire ? calculateHirePrice(item.price) : item.price}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </CardDeck>
      </Container>
    </div>
  );
};

export default MacGrid;
