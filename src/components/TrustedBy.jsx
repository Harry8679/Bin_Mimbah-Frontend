import React from "react";

const TrustedBy = () => {
  return (
    <section className="text-center py-10 bg-green-50">
      <p className="text-gray-600 mb-2">Ils nous font confiance</p>
      <div className="flex justify-center space-x-10 flex-wrap">
        <img src="/logo192.png" alt="logo" className="h-10" />
        <img src="/logo192.png" alt="logo" className="h-10" />
        <img src="/logo192.png" alt="logo" className="h-10" />
        <img src="/logo192.png" alt="logo" className="h-10" />
      </div>
    </section>
  );
};

export default TrustedBy;