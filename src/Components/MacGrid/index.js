import React from "react";
import { CardDeck, Card } from "react-bootstrap";
import "./macgrid.scss";

const MacGrid = () => {
  return (
    <div className="card-deck-container">
      <CardDeck>
        <Card>
          <Card.Img
            variant="top"
            src="https://i.picsum.photos/id/1057/400/200.jpg?hmac=dqf-XbcrjyVlPSZ9orq1NA4V9l3z46ZL6ohYUEaTRrk"
          />{" "}
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://i.picsum.photos/id/1057/400/200.jpg?hmac=dqf-XbcrjyVlPSZ9orq1NA4V9l3z46ZL6ohYUEaTRrk"
          />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.{" "}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://i.picsum.photos/id/1057/400/200.jpg?hmac=dqf-XbcrjyVlPSZ9orq1NA4V9l3z46ZL6ohYUEaTRrk"
          />{" "}
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardDeck>
    </div>
  );
};

export default MacGrid;
