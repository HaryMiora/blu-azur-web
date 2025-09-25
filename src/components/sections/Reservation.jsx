// components/ReservationSection.jsx
import React from 'react';
import { ArrowRight } from 'lucide-react';
import reservation1 from '../../assets/images/reservation/reservation1.png';

const ReservationSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Image de fond */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${reservation1})`
        }}
      />
      
      {/* Superposition bleue semi-transparente */}
      <div className="absolute inset-0 bg-blue-600 opacity-50"></div>
      
      {/* Contenu */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        {/* Titre principal */}
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
          Réservations
        </h1>
        
        {/* Texte d'appel à l'action */}
        <p className="text-lg md:text-xl text-white mb-12 leading-relaxed max-w-3xl mx-auto">
          Offrez-vous un séjour inoubliable dans l'un de nos appartements Blu Azur. 
          Profitez d'un cadre exceptionnel, entre confort, détente et découverte, 
          au cœur de Saint-Raphaël.
        </p>
        
        {/* Bouton de réservation */}
        <button className="inline-flex items-center px-8 py-4 bg-blue-800 hover:bg-blue-900 text-white font-semibold text-lg rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
          Réservez dès maintenant votre séjour !
          <ArrowRight className="ml-3 w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default ReservationSection;
