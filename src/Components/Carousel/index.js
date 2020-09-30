import React from "react";
import { Carousel } from "react-bootstrap";
import "./carousel.scss";

const CarouselBox = () => {
  return (
    <div className="carousel-container">
      <Carousel>
        <Carousel.Item style={{ height: "300px" }}>
          <img
            className="d-block w-100"
            src="https://i.picsum.photos/id/1057/400/200.jpg?hmac=dqf-XbcrjyVlPSZ9orq1NA4V9l3z46ZL6ohYUEaTRrk"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: "300px" }}>
          <img
            className="d-block w-100"
            src="https://i.picsum.photos/id/1042/400/200.jpg?hmac=NL1EUTUfuarfF075fs539P-m5d2xO3gACkbt6nT8E2I"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: "300px" }}>
          <img
            className="d-block w-100"
            src="https://i.picsum.photos/id/718/400/200.jpg?hmac=Jtg2dmUeZkR_S0l-bzJQ5mGxWq9JkVvxvGQVQuXM3xA"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselBox;
