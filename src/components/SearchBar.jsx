import React from "react";

const SearchBar = () => {
  return (
    <div className="bg-white shadow-md p-6 rounded-md mx-6 -mt-12 z-10 relative flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 items-center">
      <input type="text" placeholder="Compétence ou mot-clé" className="border p-3 rounded w-full" />
      <select className="border p-3 rounded w-full md:w-1/3">
        <option>Catégorie</option>
        <option>Maçon</option>
        <option>Plombier</option>
        <option>Électricien</option>
      </select>
      <button className="bg-green-600 text-white px-6 py-3 rounded">Rechercher</button>
    </div>
  );
};

export default SearchBar;
