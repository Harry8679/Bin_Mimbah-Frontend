const HeroSection = () => {
    return (
      <section className="flex flex-col md:flex-row items-center justify-between bg-green-50 px-8 md:px-20 py-12">
        {/* Texte à gauche */}
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold text-green-700 mb-6">
            Trouve <span className="text-blue-900">le service</span> qu'il te faut !
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            Une opportunité unique d'accéder aux meilleurs fournisseurs de services.
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition">
            Commencer
          </button>
        </div>
  
        {/* Image à droite */}
        <div className="mt-10 md:mt-0">
          <img 
            src="https://images.unsplash.com/photo-1603415526960-f8f0b4ef3ec9" 
            alt="Hero" 
            className="w-full max-w-md rounded-2xl shadow-lg"
          />
        </div>
      </section>
    );
  };
  
  export default HeroSection;
  