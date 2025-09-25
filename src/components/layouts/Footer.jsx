import React from "react";
import bluazurLogo from "../../assets/logos/bluazur-logo.png"; // adapte le chemin si besoin

const Footer = () => {
  return (
    <footer className="bg-blue-500">
      {/* Partie supérieure - Contenu principal */}
      <div className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center space-y-8 lg:space-y-0">
            
            {/* Logo */}
            <div className="text-center lg:text-left">
              <img
                src={bluazurLogo}
                alt="Blu Azur Logo"
                className="h-16 lg:h-20 mx-auto lg:mx-0"
              />
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
