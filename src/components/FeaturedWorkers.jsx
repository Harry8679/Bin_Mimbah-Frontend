import React from "react";

const workers = [
  {
    name: "Barbara T. Jean",
    role: "Maçon",
    rating: 4.6,
    rate: "70/H",
    experience: "5 ans",
    img: "/avatar1.png"
  },
  {
    name: "Linda D. Strong",
    role: "Plombier",
    rating: 4.7,
    rate: "50/H",
    experience: "3 ans",
    img: "/avatar2.png"
  },
  // Ajoute d'autres profils ici
];

const FeaturedWorkers = () => {
  return (
    <section className="px-6 py-10 bg-white">
      <h2 className="text-2xl font-bold mb-6 text-center">Prestataires en vedette</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {workers.map((worker, index) => (
          <div key={index} className="border rounded-lg p-6 shadow-sm text-center">
            <img src={worker.img} alt={worker.name} className="w-20 h-20 rounded-full mx-auto mb-4" />
            <h3 className="font-semibold text-lg">{worker.name}</h3>
            <p className="text-sm text-gray-600">{worker.role}</p>
            <div className="flex justify-center space-x-4 mt-2 text-sm">
              <span>⭐ {worker.rating}</span>
              <span>💵 {worker.rate}</span>
              <span>🧰 {worker.experience}</span>
            </div>
            <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded">Voir le profil</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedWorkers;