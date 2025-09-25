// App.jsx
import React from "react";
import Header from "./components/layouts/Header";
import Hero from "./components/sections/Hero";
import Sidebar from "./components/layouts/Sidebar";
import AboutAzur from "./components/sections/AboutAzur";
import BestPlace from "./components/sections/BestPlace";
import LocationSection from "./components/sections/Location";
import StartingPoint from "./components/sections/StartingPoint";
import Diversite from "./components/sections/Diversite";
import ReservationSection from "./components/sections/Reservation";
import Footer from "./components/layouts/Footer";

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
      <main>

        <AboutAzur />

        <BestPlace />

        <LocationSection />

        <StartingPoint />

        <Diversite />

        <ReservationSection />

        <Footer />

      </main>
    </div>
  );
}

export default App;
