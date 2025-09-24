import React from "react";
import heroImage from "../assets/images/hero.png";

const Hero = () => {
  return (
    <section
      className="relative h-[90vh] md:h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Overlay sombre pour lisibilité */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Contenu du Hero */}
      <div className="relative z-10 max-w-4xl mx-auto h-full flex flex-col justify-center px-6 text-center md:text-left">
        <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
          Votre évasion <br /> sur la Côte d’Azur !
        </h1>
        <p className="mt-4 text-white/90 text-sm md:text-lg max-w-2xl">
         Blu Azur vous invite à découvrir le charme de Saint-Raphaël, une 
         destination d’exception nichée entre Cannes et Saint-Tropez. Nos 
         appartements tout équipés, situés dans un domaine privé 
         sécurisé, offrent un cadre verdoyant et paisible, à quelques pas 
         de la marina de Santa Lucia, des plages de sable fin et du 
         centre-ville animé. Profitez d’un séjour alliant confort, sérénité et
          élégance au cœur de la Riviera française !
        </p>
        <a
          href="#reserve"
          className="mt-6 inline-block bg-gradient-to-r from-blue-400 to-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-500 hover:to-blue-700 transition-all"
        >
          Réservez dès maintenant votre séjour !
        </a>
      </div>
    </section>
  );
};

export default Hero;
