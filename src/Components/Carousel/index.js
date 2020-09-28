import React from "react";
import { Carousel } from "react-bootstrap";

const CarouselBox = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.picsum.photos/id/955/500/300.jpg?hmac=smYQz3eakNIkbe9ZJrEnsCjM2d38lyujpY2hs47I4_8"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.picsum.photos/id/494/500/300.jpg?hmac=9OGVLWQQwlMQBHeX73n2dKMGVjODeVM_rFA17sPuOEQ"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.picsum.photos/id/110/500/300.jpg?hmac=BH32INqyaSkvZF-_HyDip3MypRBR5VZGUFc-5Chzq3U"
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
    </>
  );
};

export default CarouselBox;
