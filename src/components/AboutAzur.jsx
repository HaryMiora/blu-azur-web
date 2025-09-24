// components/AboutAzur.jsx
import React from "react";
import Carousel from "./Carousel";
import img3 from "../assets/images/img3.png";
import img4 from "../assets/images/img4.png";

const AboutAzur = () => {
  const images = [img3, img4];

  return (
    <section
      id="about"
      className="relative bg-white min-h-[90vh] md:min-h-screen flex flex-col md:flex-row items-center"
    >
      <div className="relative z-10 max-w-6xl mx-auto w-full h-full flex flex-col md:flex-row items-center px-6 md:px-12 py-12 md:py-0">
        
        {/* Texte à gauche */}
        <div className="w-full md:w-1/2 text-center md:text-left md:pr-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-snug">
            Le confort et la sérénité d’un{" "}
            <span className="text-blue-600">appartement privé</span>
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Blu Azur vous propose des appartements élégants et spacieux, conçus pour accueillir 
            de 2 à 6 personnes. Offrant un cadre confortable et moderne, ils sont parfaits pour une 
            escapade détente ou un séjour prolongé.
          </p>

          <h3 className="mt-10 text-2xl md:text-3xl font-semibold text-gray-800">
            Les inclusions :
          </h3>

          <ul className="mt-6 list-disc pl-6 space-y-2 text-base md:text-lg text-gray-700">
            <li>Stationnement privé</li>
            <li>Piscine extérieure avec chaises longues</li>
            <li>Linge de lit et serviettes</li>
            <li>Télévision, téléphone et Wi-Fi (accès au salon)</li>
            <li>Réfrigérateur, cuisinière, lave-vaisselle, vaisselle</li>
            <li>Kit bébé : comprend un lit parapluie avec un vrai matelas et une chaise haute</li>
            <li>
              Autres commodités en prêt à la réception : jeux de société, livres,
              raquettes et balles de ping-pong, sèche-cheveux, fer et planche à
              repasser, adaptateur pour les prises étrangères et cache-prises pour les enfants.
            </li>
          </ul>
        </div>

        {/* Carrousel à droite */}
        <div className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center md:justify-end md:pl-12">
          <Carousel images={images} width="320px" height="420px" />
        </div>
      </div>
    </section>
  );
};

export default AboutAzur;
