// components/Diversite.jsx
import React from "react";
// Assurez-vous que les chemins d'images sont corrects
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
    text: "De Picasso à Cocteau, la Côte d’Azur a toujours été une terre d’inspiration pour les artistes. Musées, galeries et sites historiques jalonnent la région, offrant un voyage au cœur de l'art et de l'histoire, entre Saint-Raphaël, Antibes et Saint-Paul de Vence.",
    img: diversity1,
    linkText: "À voir : le Festival de Cannes, Carnaval de Nice, Fête du Citron",
    linkUrl: "#", 
  },
  {
    id: 2,
    title: "Le sport au rythme de la Méditerranée",
    text: "Du légendaire Grand Prix de Monaco aux défis de l'Ironman, en passant par le Marathon des Alpes Maritimes, la région vibre au rythme des grands événements sportifs. Surf sur la Route des Crêtes, golf sur des parcours prestigieux et voile : les Alpes Maritimes et Saint-Tropez composent un décor idéal pour un amoureux de sport et d'excellence.",
    img: diversity2,
    linkText: "À voir : Grand prix de Monaco, Ironman France - Nice, Marathon des Alpes Maritimes, Régates de Saint-Tropez",
    linkUrl: "#", 
  },
  {
    id: 3,
    title: "Une destination gourmande et authentique",
    text: "Un melting-pot exceptionnel de saveurs au carrefour des traditions d'ici et d'ailleurs. Des fruits et légumes aux saveurs méditerranéennes. Vignerons passionnés et restaurants étoilés offrent une expérience gastronomique sans tradition ou authenticité se renouvelant dans un cadre enchanteur.",
    img: diversity3,
    linkText: "Découvrir les marchés et restaurants",
    linkUrl: "#", 
  },
  {
    id: 4,
    title: "Des expériences inoubliables en famille",
    text: "Entre villages pittoresques, marchés publics animés et escapades sur le bord de littoral. Saint-Raphaël propose un cadre idéal pour partager des expériences uniques en famille. De la randonnée, en plein air, au farniente, c'est une destination pensée sur les dimensions de découvertes et d'aventures en famille.",
    img: diversity4,
    linkText: "En savoir plus sur les expériences famille",
    linkUrl: "#", 
  },
  {
    id: 5,
    title: "L'évasion en pleine nature",
    text: "Le Massif de l'Estérel et les roches rouges contre le bleu azur offrent des paysages spectaculaires. Randonnées, balades côtières et sentiers escarpés permettent de s'imprégner d'un environnement préservé, idéal pour une parenthèse hors du temps.",
    img: diversity5,
    linkText: "À voir : Grand Canyon du Verdon",
    linkUrl: "#", 
  },
];

// Composant pour une carte simple
const Card = ({ card }) => (
  <div
    className="relative rounded-2xl overflow-hidden shadow-xl h-[450px] lg:h-[300px]" 
  >
    {/* Image en fond de la carte */}
    <img
      src={card.img}
      alt={card.title}
      className="absolute inset-0 w-full h-full object-cover"
    />

    {/* Calque de couleur noire avec dégradé pour le texte sur l'image */}
    <div className="absolute inset-0 bg-black/30 
      bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

    {/* Contenu - Texte en bas de l'image */}
    <div className="relative p-6 h-full flex flex-col justify-end">
      <h3 className="text-white text-xl font-bold mb-3 leading-snug">
        {card.title}
      </h3>
      {/* Texte descriptif */}
      <p className="text-gray-200 text-sm mb-4 line-clamp-5">
        {card.text}
      </p>
      
      {/* Bouton "À voir" / "En savoir plus" : Style conforme à la maquette */}
      <a
        href={card.linkUrl}
        // Bouton noir, bordure blanche, texte blanc, coins arrondis
        className="inline-block mt-2 text-white font-medium 
          border border-white rounded-full px-6 py-2 text-xs 
          bg-black/50 backdrop-blur-sm 
          hover:bg-white hover:text-black transition duration-300 w-fit"
      >
        {card.linkText}
      </a>
    </div>
  </div>
);


const Diversite = () => {
  const topCards = cards.slice(0, 2);
  const bottomCards = cards.slice(2);

  return (
    <section className="relative py-16 min-h-screen">
      {/* Image de fond : Opacité augmentée de 10 à 30 */}
      <img
        src={diversity6}
        alt="Fond Diversité"
        className="absolute inset-0 w-full h-full object-cover opacity-30 z-0" 
      />

      {/* Contenu */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
        
        {/* Ligne du haut (2 cartes) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {topCards.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </div>

        {/* Ligne du bas (3 cartes) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {bottomCards.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Diversite;