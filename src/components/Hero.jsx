// Hero.jsx
import React from "react";
import { ArrowRight } from "lucide-react"; // Icône simple et moderne
import heroImage from "../assets/images/hero.png";

const Hero = () => {
  return (
    <section
      className="relative h-[90vh] md:h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Contenu */}
      <div className="relative z-10 max-w-5xl mx-auto h-full flex flex-col justify-center px-6 md:px-12 text-center md:text-left">
        {/* Titre */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-snug md:leading-tight tracking-wide drop-shadow-lg">
          Votre évasion <br className="hidden md:block" /> sur la Côte d’Azur !
        </h1>

        {/* Texte */}
        <p className="mt-6 text-white/90 text-base md:text-lg leading-relaxed max-w-2xl drop-shadow">
          Blu Azur vous invite à découvrir le charme de Saint-Raphaël, une
          destination d’exception nichée entre Cannes et Saint-Tropez. Nos
          appartements tout équipés, situés dans un domaine privé sécurisé,
          offrent un cadre verdoyant et paisible, à quelques pas de la marina de
          Santa Lucia, des plages de sable fin et du centre-ville animé. Profitez
          d’un séjour alliant confort, sérénité et élégance au cœur de la
          Riviera française !
        </p>

        {/* Bouton avec icône */}
        <a
          href="#reserve"
          className="mt-8 inline-flex items-center gap-2 border border-white text-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold text-sm md:text-base backdrop-blur-sm bg-white/10 hover:bg-white/20 transition-all shadow-lg"
        >
          Réservez dès maintenant
          <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
