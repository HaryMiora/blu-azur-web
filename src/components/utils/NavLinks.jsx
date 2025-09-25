import React from "react";

const links = [
  { name: "À propos", href: "#about" },
  { name: "Localisation", href: "#location" },
  { name: "Activités", href: "#activities" },
];

const NavLinks = ({ className = "" }) => {
  return (
    <ul className={`flex items-center gap-8 ${className}`}>
      {links.map((link) => (
        <li key={link.name}>
          <a
            href={link.href}
            className="text-white text-sm md:text-base font-medium tracking-wide hover:text-blue-200 transition-colors"
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
