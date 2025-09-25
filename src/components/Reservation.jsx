import React from 'react';
import { ArrowRight } from 'lucide-react';

const ReservationSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Image de fond */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80')`
        }}
      />
      
      {/* Superposition bleue semi-transparente */}
      <div className="absolute inset-0 bg-blue-600 opacity-75"></div>
      
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