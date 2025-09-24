// App.jsx
import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Sidebar from "./components/Sidebar";
import AboutAzur from "./components/AboutAzur";
import BestPlace from "./components/BestPlace";

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

        <section id="about" className="h-screen bg-blue-200 flex items-center justify-center">
          <h1 className="text-4xl">Section À propos</h1>
        </section>
        <section id="location" className="h-screen bg-green-200 flex items-center justify-center">
          <h1 className="text-4xl">Section Localisation</h1>
        </section>
        <section id="activities" className="h-screen bg-yellow-200 flex items-center justify-center">
          <h1 className="text-4xl">Section Activités</h1>
        </section>
      </main>
    </div>
  );
}

export default App;
