import React from 'react';
import { Info } from 'lucide-react';
import location1 from '../../assets/images/location/location1.png';
import location2 from '../../assets/images/location/location2.png';

const LocationSection = () => {
  return (
    <section
      id="location"
      className="relative py-12 lg:py-16 px-4 bg-cover bg-center"
      style={{ backgroundImage: `url(${location1})` }}
    >
      {/* Overlay plus transparent */}
      <div className="absolute inset-0 bg-white/40"></div>

      <div className="relative max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8 items-center">
          {/* Colonne de gauche - Texte (3/5 de la largeur) */}
          <div className="lg:col-span-3 space-y-4">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
              Où se trouve Blu Azur à<br />
              <span className="text-gray-900">Saint-Raphaël ?</span>
            </h2>
            
            <p className="text-gray-700 text-sm leading-relaxed pr-0 lg:pr-8">
              Blu Azur est idéalement situé entre Saint-Tropez et Cannes, au cœur de 
              l'une des plus belles destinations balnéaires de France. Les résidences 
              sont proches des plages de sable doré et des commerces. Vous pourrez 
              accéder à pied à de nombreux restaurants, bars et boutiques dans le 
              centre-ville de Saint-Raphaël. La résidence propose un accès facile aux 
              boutiques, restaurants et boulangeries pour vous fournir tout le nécessaire.
            </p>
            
            {/* Bouton bleu arrondi */}
            <button className="inline-flex items-center space-x-2 border border-blue-400 text-blue-500 rounded-full px-4 py-2 bg-transparent hover:bg-blue-50 transition-colors duration-200 text-sm">
              <span>Comment s'y rendre ?</span>
              <div className="w-5 h-5 border border-blue-400 rounded-full flex items-center justify-center">
                <Info size={10} className="text-blue-500" />
              </div>
            </button>
          </div>
          
          {/* Colonne de droite - Carte (2/5 de la largeur) */}
          <div className="lg:col-span-2 relative flex justify-center">
            {/* Image carte rectangulaire */}
            <div className="w-full max-w-xs">
              <img
                src={location2}
                alt="Carte de localisation Saint-Raphaël"
                className="w-full h-[280px] lg:h-[320px] object-cover rounded-xl shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;