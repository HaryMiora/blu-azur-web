// components/AboutAzur.jsx
import React from "react";
import Carousel from "../utils/Carousel";
import carousel3 from "../../assets/images/carousel/carousel3.png";
import carousel4 from "../../assets/images/carousel/carousel4.png";

const AboutAzur = () => {
  const images = [carousel3, carousel4];

  return (
    <section
      id="about"
      className="relative bg-white min-h-[90vh] md:min-h-screen flex flex-col md:flex-row items-center"
    >
      <div className="relative z-10 max-w-6xl mx-auto w-full h-full flex flex-col md:flex-row items-center px-6 md:px-12 py-12 md:py-0">
        
        {/* Texte à gauche */}
        <div className="w-full md:w-1/2 text-left md:pr-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 leading-tight">
            Le confort et la sérénité d'un{" "}
            <span className="text-blue-500 font-semibold">appartement privé</span>
          </h2>

          <p className="mt-4 text-sm md:text-base text-gray-700 leading-relaxed">
            Blu Azur vous propose des appartements élégants et spacieux, conçus pour accueillir 
            de 2 à 6 personnes. Offrant un cadre confortable et moderne, ils sont parfaits pour une 
            escapade détente ou un séjour prolongé.
          </p>

          <h3 className="mt-6 text-lg md:text-xl font-medium text-gray-800">
            Les inclusions :
          </h3>

          <ul className="mt-3 space-y-1 text-sm md:text-base text-gray-600">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Stationnement privé
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Piscine extérieure avec chaises longues
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Télévision, téléphone et Wi-Fi (accès au salon)
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Réfrigérateur, cuisinière, lave-vaisselle, vaisselle
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Linge de lit et serviettes
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Kit bébé : comprend un lit parapluie avec un vrai matelas et une chaise haute
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Autres commodités en prêt à la réception : jeux de société, livres, raquettes et 
              balles de ping-pong, sèche-cheveux, fer et planche à repasser, adaptateur pour les 
              prises étrangères et cache-prises pour les enfants.
            </li>
          </ul>
        </div>

        {/* Carrousel à droite */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end md:pl-8">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <Carousel images={images} width="280px" height="380px" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAzur;