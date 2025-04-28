import React from 'react';

export function Sidebar() {
  return (
    <aside className="w-64 bg-green-50 p-6 hidden md:block border-r border-green-100">
      <h2 className="text-xl font-semibold text-green-700 mb-4">Recherche</h2>
      <input
        type="text"
        placeholder="Rechercher une offre..."
        className="w-full p-2 rounded-lg border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-400"
      />
      <button className="w-full bg-green-600 text-white mt-4 py-2 rounded-lg hover:bg-green-700">
        Chercher
      </button>
    </aside>
  );
}
