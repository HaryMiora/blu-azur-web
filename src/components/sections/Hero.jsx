// Hero.jsx
import React, { useState } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import heroImage from "../../assets/images/hero/hero.png";
import img1 from "../../assets/images/carousel/carousel1.png";
import img2 from "../../assets/images/carousel/carousel2.png";

const images = [img1, img2];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      className="relative h-[90vh] md:h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Contenu Hero en deux colonnes */}
      <div className="relative z-10 max-w-6xl mx-auto h-full flex flex-col md:flex-row items-center px-6 md:px-12">
        
        {/* Texte Hero à gauche */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-snug md:leading-tight tracking-wide drop-shadow-lg">
            Votre évasion <br className="hidden md:block" /> sur la Côte d’Azur !
          </h1>

          <p className="mt-4 md:mt-6 text-white/90 text-sm md:text-base leading-relaxed max-w-2xl drop-shadow">
            Blu Azur vous invite à découvrir le charme de Saint-Raphaël, une
            destination d’exception nichée entre Cannes et Saint-Tropez. Nos
            appartements tout équipés, situés dans un domaine privé sécurisé,
            offrent un cadre verdoyant et paisible, à quelques pas de la marina de
            Santa Lucia, des plages de sable fin et du centre-ville animé.
          </p>

          <a
            href="#reserve"
            className="mt-6 inline-flex items-center gap-2 border border-white text-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold text-sm md:text-base backdrop-blur-sm bg-white/10 hover:bg-white/20 transition-all shadow-lg"
          >
            Réservez dès maintenant
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        {/* Carrousel à droite */}
        <div className="relative w-full md:w-1/2 mt-8 md:mt-0 flex justify-center items-center">
          <div className="flex items-center justify-center relative overflow-hidden">
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
                      opacity: opacity,
                      transition: "all 0.5s ease-in-out",
                      width: "250px",
                      height: "150px",
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
        </div>

      </div>
    </section>
  );
};

export default Hero;
