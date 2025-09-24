// App.jsx
import React from "react";
import Header from "./components/Header";

function App() {
  return (
    <div className="relative min-h-screen bg-gray-100">
      {/* Header */}
      <Header />

      {/* Contenu de la page */}
      <main className="pt-20">
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
