// Header.jsx
import React, { useState } from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-transparent z-40">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-5 px-6 md:px-10">
        
        {/* Logo à gauche */}
        <Logo />

        {/* Menu Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <NavLinks />
          {/* Bouton Réservé */}
          <a
            href="#reserve"
            className="bg-gradient-to-r from-blue-400 to-blue-600 text-white px-6 py-2 rounded-lg font-medium text-sm md:text-base hover:from-blue-500 hover:to-blue-700 transition-all"
          >
            Réservé
          </a>
        </div>

        {/* Bouton Burger (mobile) */}
        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden text-white text-3xl"
        >
          ☰
        </button>
      </div>

      {/* Menu Mobile (drawer) */}
      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
};

export default Header;
