import React from "react";
import bestPlace1 from "../../assets/images/bestPlace/bestPlace1.png";
import icon1 from "../../assets/icones/bestPlace/icon1.png"; 
import icon2 from "../../assets/icones/bestPlace/icon2.png"; 
import icon3 from "../../assets/icones/bestPlace/icon3.png"; 
import icon4 from "../../assets/icones/bestPlace/icon4.png"; 
import icon5 from "../../assets/icones/bestPlace/icon5.png"; 
import icon6 from "../../assets/icones/bestPlace/icon6.png"; 

const BestPlace = () => {
  const activities = [
    { icon: icon1, label: "Sports nautiques, plongée, voile" },
    { icon: icon2, label: "Randonnées et vélo dans l'Estérel" },
    { icon: icon3, label: "Casino et vie nocturne animée" },
    { icon: icon4, label: "Villages perchés et marchés provençaux" },
    { icon: icon5, label: "Un paradis pour les golfeurs" },
    { icon: icon6, label: "Montagne et vélo au Massif de l'Estérel" },
  ];

  return (
    <section
      className="relative w-full py-16 text-white"
      style={{
        background: `linear-gradient(
          to bottom,
          rgba(64,151,255,0.05) 0%, 
          rgba(64,151,255,0.035) 50%, 
          rgba(64,151,255,0.018) 75%, 
          rgba(64,151,255,0.008) 100%
        ), url(${bestPlace1})`,
        backgroundSize: "cover",
        backgroundPosition: "center bottom",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Titre */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Saint Raphaël, l'endroit parfait pour <br /> vivre la Côte d'Azur
        </h2>

        {/* Sous-titre */}
        <p className="text-base md:text-lg max-w-3xl mx-auto mb-10">
          Avec ses plages dorées, ses 300 jours de soleil et ses calanques sauvages, Saint-Raphaël est une destination de rêve. 
          Entre mer turquoise et rochers rouges, la ville offre un cadre idyllique pour la détente et l’aventure.
        </p>

        {/* Grille d'activités */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-10">
          {activities.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center w-32"
            >
              <div className="w-20 h-20 flex items-center justify-center rounded-full border-2 border-[#4097FF] bg-white shadow-md overflow-hidden">
                <img
                  src={item.icon}
                  alt={item.label}
                  className="w-12 h-12 object-contain"
                />
              </div>
              <p className="mt-3 text-sm md:text-base text-white">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Légende */}
        <p className="text-sm md:text-base italic max-w-4xl mx-auto">
          Faites-vous sur la Promenade des Bains, explorez les criques secrètes ou partez en mer depuis son port de plaisance. 
          Saint-Raphaël, c’est la Côte d’Azur dans toute sa splendeur !
        </p>
      </div>
    </section>
  );
};

export default BestPlace;
