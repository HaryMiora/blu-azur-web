// Carousel.jsx
import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import img1 from "../assets/images/img1.png";
import img2 from "../assets/images/img2.png";

const images = [img1, img2];

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative max-w-6xl mx-auto mt-[-15vh] z-20">
      {/* Conteneur du carrousel */}
      <div className="flex items-center justify-center relative overflow-hidden">
        {/* Images */}
        <div className="flex transition-transform duration-500 ease-in-out"
             style={{ transform: `translateX(-${current * 60}%)` }}>
          {images.map((img, index) => {
            // Calculer l'échelle pour effet perspective
            const scale = index === current ? 1 : 0.8;
            const opacity = index === current ? 1 : 0.6;
            return (
              <div
                key={index}
                className="flex-shrink-0 mx-2 rounded-xl overflow-hidden shadow-2xl"
                style={{
                  transform: `scale(${scale})`,
                  opacity: opacity,
                  transition: "all 0.5s ease-in-out",
                  width: "300px",
                  height: "200px",
                }}
              >
                <img src={img} alt={`Slide ${index}`} className="w-full h-full object-cover" />
              </div>
            );
          })}
        </div>

        {/* Boutons de navigation */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full backdrop-blur-md shadow-lg"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full backdrop-blur-md shadow-lg"
        >
          <ArrowRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
