import React from "react";
import { CardDeck, Card } from "react-bootstrap";
import "./macgrid.scss";

const MacGrid = (data) => {
  return (
    <div className="card-deck-container">
      <CardDeck>
        {data.data.map((item, index) => {
          return (
            <Card
              style={{ minWidth: "18rem", width: "18rem", marginTop: "0.5rem" }}
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
                <Card.Text className="card-description">{item.ram}</Card.Text>
                <Card.Text className="card-description">
                  {item.memory}
                </Card.Text>
                <Card.Text className="card-description">{item.year}</Card.Text>
                <Card.Text className="card-description">{item.price}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
          );
        })}
      </CardDeck>
    </div>
  );
};

export default MacGrid;
