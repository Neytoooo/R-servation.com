import React, { useState, useEffect } from 'react';
import './Slider.css'; 

const Slider = ({ images }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = images.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, images]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000); 
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <section className="slider">
      {images.map((img, imgIndex) => (
        <div
          key={imgIndex}
          className={index === imgIndex ? 'slide active' : 'slide'}
        >
          {index === imgIndex && (
            <img src={img} alt={`slide ${imgIndex}`} className="image" />
          )}
        </div>
      ))}
      <button className="prev" onClick={() => setIndex(index - 1)}>
        &#10094;
      </button>
      <button className="next" onClick={() => setIndex(index + 1)}>
        &#10095;
      </button>
    </section>
  );
};

export default Slider;
