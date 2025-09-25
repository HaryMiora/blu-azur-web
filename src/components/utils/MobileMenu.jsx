import React from "react";
import NavLinks from "./NavLinks";

const MobileMenu = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-3/4 bg-blue-900 p-6 z-50 transform transition-transform duration-300 
      ${isOpen ? "translate-x-0" : "translate-x-full"}`}
    >
      {/* Bouton pour fermer */}
      <button
        onClick={onClose}
        className="text-white text-3xl mb-8"
      >
        ✕
      </button>

      {/* Liens du menu */}
      <NavLinks className="flex flex-col gap-6" />

      {/* Bouton Réservé */}
      <a
        href="#reserve"
        className="mt-10 block bg-gradient-to-r from-blue-400 to-blue-600 text-white text-center px-6 py-3 rounded-lg font-medium hover:from-blue-500 hover:to-blue-700 transition-all"
      >
        Réservé
      </a>
    </div>
  );
};

export default MobileMenu;
