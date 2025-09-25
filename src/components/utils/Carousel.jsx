// components/Carousel.jsx
import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Carousel = ({ images, width = "300px", height = "200px" }) => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative flex items-center justify-center overflow-hidden">
      {/* Slides */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${current * 60}%)` }}
      >
        {images.map((img, index) => {
          const scale = index === current ? 1 : 0.8;
          const opacity = index === current ? 1 : 0.6;
          return (
            <div
              key={index}
              className="flex-shrink-0 mx-2 rounded-xl overflow-hidden shadow-2xl"
              style={{
                transform: `scale(${scale})`,
                opacity,
                transition: "all 0.5s ease-in-out",
                width,
                height,
              }}
            >
              <img
                src={img}
                alt={`Slide ${index}`}
                className="w-full h-full object-cover"
              />
            </div>
          );
        })}
      </div>

      {/* Boutons navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 md:p-3 rounded-full backdrop-blur-md shadow-lg"
      >
        <ArrowLeft className="w-5 h-5 md:w-6 md:h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 md:p-3 rounded-full backdrop-blur-md shadow-lg"
      >
        <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
      </button>
    </div>
  );
};

export default Carousel;
