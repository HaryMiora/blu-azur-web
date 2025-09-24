// Sidebar.jsx
import React from "react";
import { Facebook, Youtube, Instagram, Twitter } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 z-50">
      {/* Fond rectangulaire bleu transparent */}
      <div className="flex flex-col items-center gap-8 bg-blue-900/40 backdrop-blur-sm px-4 py-10 rounded-2xl shadow-lg">
        {/* Icônes sociales */}
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-400 transition-colors"
        >
          <Facebook className="w-6 h-6" />
        </a>
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-red-500 transition-colors"
        >
          <Youtube className="w-6 h-6" />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-pink-400 transition-colors"
        >
          <Instagram className="w-6 h-6" />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-sky-400 transition-colors"
        >
          <Twitter className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
