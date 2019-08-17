import React from "react";
import { Carousel } from "react-bootstrap";
import "../containers/customcarousel.css";

const CustomCarousel = () => {
  return (
    <Carousel>
  <Carousel.Item>
    <img
      className="d-block"
      src="https://source.unsplash.com/zcUgjyqEwe8"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Banana & Blueberry French Toast</h3>
      <p>Fluffy french toast made with bananas and blueberries with powdered sugar</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block"
      src="https://source.unsplash.com/auIbTAcSH6E"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Homemade Lamb Chop</h3>
      <p>savory lamb chop seasoned, topped with balsamic vinegarette and sun-dried tomatos</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block"
      src="https://source.unsplash.com/pLKgCsBOiw4"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Southwest Chicken Sandwich</h3>
      <p>A cripsy chicken sandwich made on broiche bun with pickled red onions, garlic pickles, and mayonaisse</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  );
};

export default CustomCarousel;
