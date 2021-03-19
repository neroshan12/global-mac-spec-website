import React from "react";
import { CardDeck, Card, Column, Row, Col, Container } from "react-bootstrap";
import "./macgrid.scss";

const MacGrid = ({ data, dealsGrid = false }) => {
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
                    )}

                    <Card.Text className="card-description">
                      {item.price}
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
