// App.jsx
import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Sidebar from "./components/Sidebar";
import AboutAzur from "./components/AboutAzur";
import BestPlace from "./components/BestPlace";
import LocationSection from "./components/Location";
import StartingPoint from "./components/StartingPoint";

function App() {
  return (
    <div className="relative min-h-screen bg-gray-100">
      {/* Header */}
      <Header />

      {/* Sidebar */}
      <Sidebar />

      {/* Hero avec image de fond */}
      <Hero />

      {/* Contenu de la page */}
      <main className="pt-20">

        <AboutAzur />

        <BestPlace />

        <LocationSection />

        <StartingPoint />

      </main>
    </div>
  );
}

export default App;
