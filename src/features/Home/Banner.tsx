import React from "react";
import { Carousel } from "react-bootstrap";

type CarouselIconProps = {
  size?: number;
  name?: string;
};
const CarouselIcon = ({
  size = 14,
  name = "fa-chevron-circle-right",
}: CarouselIconProps) => (
  <div style={{ fontSize: `${size}px`, color: "black" }}>
    <i className={`fa ${name}`}></i>
  </div>
);

export default function Banner() {
  return (
    <Carousel
      interval={null}
      nextIcon={<CarouselIcon size={50} name="fa-chevron-circle-right" />}
      prevIcon={<CarouselIcon size={50} name="fa-chevron-circle-left" />}
    >
      <Carousel.Item>
        <img
          className="d-block w-100 h-100 carousel-img-item"
          src="/assets/banner-1.jpg"
          alt="First slide"
        />
        <Carousel.Caption className="custom-caption">
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-100 carousel-img-item"
          src="/assets/banner-2.jpg"
          alt="Third slide"
        />

        <Carousel.Caption className="custom-caption">
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-100 carousel-img-item"
          src="/assets/banner-3.jpg"
          alt="Third slide"
        />

        <Carousel.Caption className="custom-caption">
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
