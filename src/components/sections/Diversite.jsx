// components/Diversite.jsx
import React from "react";
import diversity1 from "../../assets/images/diversity/diversity1.jpg"; // patrimoine
import diversity2 from "../../assets/images/diversity/diversity2.png"; // sport
import diversity3 from "../../assets/images/diversity/diversity3.jpg"; // destination
import diversity4 from "../../assets/images/diversity/diversity4.jpg"; // expérience famille
import diversity5 from "../../assets/images/diversity/diversity5.png"; // évasion
import diversity6 from "../../assets/images/diversity/diversity6.png"; // image de fond

const cards = [
  {
    id: 1,
    title: "Un patrimoine culturel d’exception",
    text: "Découvrez l’histoire et les richesses architecturales uniques de la Côte d’Azur.",
    img: diversity1,
  },
  {
    id: 2,
    title: "Le sport au rythme de la Méditerranée",
    text: "Entre mer et montagne, profitez d’activités sportives variées toute l’année.",
    img: diversity2,
  },
  {
    id: 3,
    title: "Une destination gourmande et authentique",
    text: "Savourez les spécialités locales et partez à la découverte des marchés provençaux.",
    img: diversity3,
  },
  {
    id: 4,
    title: "Des expériences inoubliables en famille",
    text: "Activités ludiques et découvertes culturelles à partager avec petits et grands.",
    img: diversity4,
  },
  {
    id: 5,
    title: "L’évasion en pleine nature",
    text: "Randonnez au cœur de paysages grandioses et profitez d’une nature préservée.",
    img: diversity5,
  },
];

const Diversite = () => {
  return (
    <section className="relative py-16">
      {/* Image de fond */}
      <img
        src={diversity6}
        alt="Fond Diversité"
        className="absolute inset-0 w-full h-full object-cover opacity-30 z-0"
      />

      {/* Contenu */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg flex flex-col"
            >
              {/* Image */}
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-48 object-cover"
              />

              {/* Contenu */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-white text-xl font-bold mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-300 flex-grow">{card.text}</p>
                <a
                  href="#"
                  className="inline-block mt-4 px-4 py-2 bg-black text-white rounded-md border border-white hover:bg-white hover:text-black transition"
                >
                  En savoir plus
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Diversite;
