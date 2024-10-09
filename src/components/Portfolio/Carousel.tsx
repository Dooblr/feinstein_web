import React, { useState } from "react";
import "./Carousel.scss"; // Import the corresponding styles

type CarouselProps = {
  images: string[];
  height?: number; // Optional prop to control height of the carousel
};

const Carousel: React.FC<CarouselProps> = ({ images, height = 400 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel-container" style={{ height: `${height}px` }}>
      <button className="carousel-button left" onClick={handlePrevious}>
        ❮
      </button>
      <div className="carousel-image-wrapper">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="carousel-image"
          style={{ height: `${height}px` }}
        />
      </div>
      <button className="carousel-button right" onClick={handleNext}>
        ❯
      </button>
    </div>
  );
};

export default Carousel;
