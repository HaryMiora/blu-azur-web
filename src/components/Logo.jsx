import React from "react";
import logo from "../assets/images/bluazur-logo.png";

const Logo = () => {
  return (
    <img
      src={logo}
      alt="Blu Azur Logo"
      className="h-10 md:h-12 object-contain" 
    />
  );
};

export default Logo;