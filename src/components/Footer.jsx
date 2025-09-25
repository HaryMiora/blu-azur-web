import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-500">
      {/* Partie supérieure - Contenu principal */}
      <div className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center space-y-8 lg:space-y-0">
            
            {/* Logo */}
            <div className="text-center lg:text-left">
              <div className="text-white">
                <h2 className="text-5xl lg:text-6xl font-bold">BLU</h2>
                <p className="text-xl lg:text-2xl font-light mt-0 tracking-widest">AZUR</p>
              </div>
            </div>
            
            {/* Bloc de contact */}
            <div className="text-center lg:text-right">
              <h3 className="text-white text-xl font-semibold mb-6">Contactez-nous</h3>
              
              <div className="space-y-3 text-white">
                <p>info@bluazur.com</p>
                <p>+1 555-555-5555</p>
                <p>@BLU AZUR</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      
      {/* Barre de droits d'auteur */}
      <div className="bg-blue-700 py-4">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-white text-sm">
            © Tous droits réservés à Blu Azur
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;