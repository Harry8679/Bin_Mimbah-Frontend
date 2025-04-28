// src/pages/Home.jsx

import React from 'react';
import { Navbar } from '../components/Navbar';
import { Sidebar } from '../components/Sidebar';

const offers = [
  {
    id: 1,
    title: "Développeur Web Freelance",
    description: "Recherche développeur pour site e-commerce sous Shopify.",
    location: "Dakar",
    price: "300 000 FCFA",
  },
  {
    id: 2,
    title: "Professeur de Maths",
    description: "Cours particuliers niveau Terminale série C/D.",
    location: "Abidjan",
    price: "10 000 FCFA/h",
  },
  {
    id: 3,
    title: "Designer Graphique",
    description: "Création d'une identité visuelle pour une startup.",
    location: "Douala",
    price: "150 000 FCFA",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <div className="flex flex-1">
        <Sidebar />

        <main className="flex-1 p-6">
          <h1 className="text-3xl font-bold text-green-600 mb-6">Offres disponibles</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offers.map((offer) => (
              <div
                key={offer.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border border-green-100 hover:border-green-300"
              >
                <h2 className="text-xl font-semibold text-green-700">{offer.title}</h2>
                <p className="text-gray-600 mt-2">{offer.description}</p>
                <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
                  <span>{offer.location}</span>
                  <span className="text-green-500 font-bold">{offer.price}</span>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
