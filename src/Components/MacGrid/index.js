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
            src={process.env.PUBLIC_URL + "static/Macs/21.5inchimac.jpeg"}
          />
          <Card.Body>
            <Card.Title>21.5" iMac</Card.Title>
            <Card.Text>
              <p>21.5-Inch Apple Imac</p>
              <p>"Dual Core I5" 1.4Ghz</p>
              <p>8Gb Ram </p>
              <p>500GB HDD</p>
              <p>(Mid-2014) </p>
              <p>£450</p>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src={process.env.PUBLIC_URL + "static/Macs/imacpro.jpg"}
          />
          <Card.Body>
            <Card.Title>27 iMac</Card.Title>
            <Card.Text>
              27-Inch (Slim) Apple iMac "Quad Core i5" 2.9Ghz 8GB Ram 1TB HDD
              (Late 2012/13) £700
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src={process.env.PUBLIC_URL + "static/Macs/imacpro.jpg"}
          />
          <Card.Body>
            <Card.Title>iMac Pro</Card.Title>
            <Card.Text>
              27-Inch Apple iMac Pro ”14 Core" 2.5Ghz Xeon W 64GB Ram 1TB SSD
              (Late 2017) £5499
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
