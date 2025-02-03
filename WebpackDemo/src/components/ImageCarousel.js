import React, { useState } from 'react';
import imageList from '../data/ImageList';
import '../styles/ImageCarousel.css'; // Add some styles

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imageList.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imageList.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel">
      <button onClick={prevSlide} className="carousel-btn">⬅</button>
      <img src={imageList[currentIndex]} alt={`Slide ${currentIndex}`} className="carousel-image" />
      <button onClick={nextSlide} className="carousel-btn">➡</button>
    </div>
  );
};

export default ImageCarousel;
