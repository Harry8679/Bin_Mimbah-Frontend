const experts = [
    {
      id: 1,
      name: 'Barbara T. Jean',
      title: 'Sr. Web Designer',
      rate: '70€/H',
      exp: '5 Years exp.',
      image: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
      id: 2,
      name: 'Linda D. Strong',
      title: 'Front-End Developer',
      rate: '50€/H',
      exp: '3 Years exp.',
      image: 'https://randomuser.me/api/portraits/women/45.jpg'
    },
    {
      id: 3,
      name: 'Howard S. Lopez',
      title: 'Magento Developer',
      rate: '75€/H',
      exp: '6 Years exp.',
      image: 'https://randomuser.me/api/portraits/men/46.jpg'
    },
    {
      id: 4,
      name: 'Joseph R. Marshall',
      title: 'Laravel Developer',
      rate: '65€/H',
      exp: '4.5 Years exp.',
      image: 'https://randomuser.me/api/portraits/men/47.jpg'
    },
  ];
  
  const ServiceCards = () => {
    return (
      <section className="bg-white px-6 md:px-20 py-12">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-4">
          Hire Talents & Experts
        </h2>
        <p className="text-center text-gray-500 mb-10 max-w-xl mx-auto">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.
        </p>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {experts.map((expert) => (
            <div key={expert.id} className="bg-gray-50 p-6 rounded-lg shadow text-center">
              <img 
                src={expert.image} 
                alt={expert.name} 
                className="w-20 h-20 mx-auto rounded-full mb-4"
              />
              <h3 className="font-semibold text-lg text-blue-900">{expert.name}</h3>
              <p className="text-sm text-gray-500 mb-2">{expert.title}</p>
              <div className="flex justify-center space-x-4 text-sm mb-4">
                <span className="text-green-700">{expert.rate}</span>
                <span className="text-pink-600">{expert.exp}</span>
              </div>
              <div className="flex justify-center space-x-2">
                <button className="px-4 py-1 text-sm bg-gray-200 rounded">Message</button>
                <button className="px-4 py-1 text-sm bg-green-100 text-green-700 rounded">View Detail</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default ServiceCards;