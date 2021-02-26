import React from "react";
import { Carousel } from "react-bootstrap";
import "./carousel.scss";

const CarouselBox = () => {
  return (
    <div className="carousel-container">
      <Carousel>
        <Carousel.Item style={{ height: "400px" }}>
          <img
            className="d-block w-100"
            src={process.env.PUBLIC_URL + "/static/carousel/stock12.jpg"}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: "400px" }}>
          <img
            className="d-block w-100"
            src={process.env.PUBLIC_URL + "/static/carousel/stock13.jpg"}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: "400px" }}>
          <img
            className="d-block w-100"
            src={process.env.PUBLIC_URL + "/static/carousel/stock14.jpg"}
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
