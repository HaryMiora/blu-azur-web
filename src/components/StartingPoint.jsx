// components/StartingPoint.jsx
import React from "react";
import startingpoint1 from "../assets/images/startingpoint1.png"; // fond
import startingpoint2 from "../assets/images/startingpoint2.png"; // image collage

const StartingPoint = () => {
  return (
    <section
      className="relative w-full min-h-[600px] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${startingpoint1})` }}
    >
      {/* Overlay bleu beaucoup plus transparent */}
      <div className="absolute inset-0 bg-blue-500/30"></div>

      {/* Contenu */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center lg:items-start justify-between w-full">
        
        {/* Image unique en rectangle vertical */}
        <div className="flex justify-center lg:justify-start w-full lg:w-1/2">
          <img
            src={startingpoint2}
            alt="Découverte Côte d'Azur"
            className="w-[260px] h-[420px] lg:w-[300px] lg:h-[500px] object-cover rounded-3xl shadow-xl"
          />
        </div>

        {/* Bloc Texte */}
        <div className="lg:w-1/2 text-right mt-10 lg:mt-0">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Un point de départ idéal pour découvrir la Côte d’Azur !
          </h2>
          <p className="text-white text-lg leading-relaxed">
            Entre mer et montagne, Saint-Raphaël est une destination idéale pour
            les amoureux de la nature, les passionnés de sport et les amateurs
            de culture. Profitez de ses plages de sable fin, de ses criques
            secrètes et de ses paysages spectaculaires. Découvrez un patrimoine
            historique riche, une gastronomie méditerranéenne savoureuse et des
            activités pour tous les goûts. Un lieu où détente, aventure et
            authenticité se rencontrent pour des vacances inoubliables.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StartingPoint;
