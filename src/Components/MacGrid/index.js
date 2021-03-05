import React from "react";
import { CardDeck, Card, Column, Row, Col, Container } from "react-bootstrap";
import "./macgrid.scss";

const MacGrid = (data) => {
  return (
    <div className="card-deck-container">
      <Container>
        <CardDeck>
          {data.data.map((item, index) => {
            return (
              <Col xs={12} sm={12} md={12} lg={6} className="container">
                <Card
                  style={{ margin: "0rem", marginTop: "0.5rem" }}
                  key={index}
                  className="card"
                >
                  <Card.Img
                    className="card-image"
                    variant="top"
                    src={process.env.PUBLIC_URL + item.img}
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
