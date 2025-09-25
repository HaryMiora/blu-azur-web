import React from 'react';
import { Info } from 'lucide-react';
import location1 from '../assets/images/location1.png';
import location2 from '../assets/images/location2.png';

const LocationSection = () => {
  return (
    <section
      id="location"
      className="relative py-16 px-4 bg-cover bg-center"
      style={{ backgroundImage: `url(${location1})` }}
    >
      {/* Overlay plus transparent */}
      <div className="absolute inset-0 bg-white/40"></div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Colonne de gauche - Texte */}
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
              Où se trouve Blu Azur à<br />
              Saint-Raphaël ?
            </h2>
            
            <p className="text-gray-700 text-base leading-relaxed">
              Blu Azur est idéalement situé entre Saint-Tropez et Cannes, au cœur de 
              l'une des plus belles destinations balnéaires de France. Les résidences 
              sont proches des plages de sable doré et des commerces. Vous pourrez 
              accéder à pied à de nombreux restaurants, bars et boutiques dans le 
              centre-ville de Saint-Raphaël. La résidence propose un accès facile aux 
              boutiques, restaurants et boulangeries pour vous fournir tout le nécessaire.
            </p>
            
            {/* Bouton bleu arrondi */}
            <button className="flex items-center space-x-3 border border-[#4097FF] text-[#4097FF] rounded-xl px-6 py-3 bg-transparent hover:bg-[#4097FF]/10 transition-colors duration-200">
              <span className="font-medium">Comment s'y rendre ?</span>
              <div className="w-6 h-6 border border-[#4097FF] rounded-full flex items-center justify-center">
                <Info size={14} className="text-[#4097FF]" />
              </div>
            </button>
          </div>
          
          {/* Colonne de droite - Carte */}
          <div className="relative flex justify-center">
            {/* Image rectangle vertical */}
            <img
              src={location2}
              alt="Détail localisation"
              className="w-1/3 h-[400px] object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
