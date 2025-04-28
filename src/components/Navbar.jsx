import React from 'react';

export function Navbar() {
  return (
    <nav className="bg-green-600 text-white p-4 flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-bold">Mimbah</h1>
      <div className="space-x-4">
        <button className="bg-white text-green-600 font-semibold py-2 px-4 rounded-2xl hover:bg-green-100">
          Se connecter
        </button>
        <button className="bg-green-800 py-2 px-4 rounded-2xl hover:bg-green-700">
          S'inscrire
        </button>
      </div>
    </nav>
  );
}
