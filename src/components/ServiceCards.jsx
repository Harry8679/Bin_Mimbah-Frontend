const services = [
    {
      id: 1,
      name: 'Barbara T. Jean',
      job: 'Sr. Web Designer',
      rate: '70€/h',
      experience: '5 ans',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
      id: 2,
      name: 'Linda D. Strong',
      job: 'Front-End Developer',
      rate: '50€/h',
      experience: '3 ans',
      image: 'https://randomuser.me/api/portraits/women/45.jpg',
    },
    {
      id: 3,
      name: 'Howard S. Lopez',
      job: 'Magento Developer',
      rate: '75€/h',
      experience: '6 ans',
      image: 'https://randomuser.me/api/portraits/men/46.jpg',
    },
    {
      id: 4,
      name: 'Joseph R. Marshall',
      job: 'Laravel Developer',
      rate: '65€/h',
      experience: '4,5 ans',
      image: 'https://randomuser.me/api/portraits/men/47.jpg',
    },
  ];
  
  const ServiceCards = () => {
    return (
      <section className="bg-white py-12 px-8 md:px-20">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-10">
          Nos Talents et Experts
        </h2>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div key={service.id} className="bg-gray-50 rounded-xl shadow-md p-6 flex flex-col items-center">
              <img src={service.image} alt={service.name} className="w-24 h-24 rounded-full mb-4 object-cover" />
              <h3 className="text-xl font-semibold text-gray-800">{service.name}</h3>
              <p className="text-green-600 mb-2">{service.job}</p>
              <div className="text-sm text-gray-500 mb-4">{service.rate} | {service.experience} exp</div>
              <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm">
                Voir Détail
              </button>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default ServiceCards;
  