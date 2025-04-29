import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-green-50 px-6 py-20 flex flex-col md:flex-row justify-between items-center">
      <div className="max-w-xl">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          <span className="text-green-600">Find</span> Great Job Opportunity <br />
          You Deserve
        </h1>
        <p className="text-gray-600 mb-6">
          Recherchez les meilleurs prestataires ou proposez vos services en toute simplicité.
        </p>
      </div>
      <img src="/hero-image.png" alt="hero" className="w-80 md:w-96" />
    </section>
  );
};

export default HeroSection;