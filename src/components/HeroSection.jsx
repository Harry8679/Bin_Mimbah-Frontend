const HeroSection = () => {
    return (
      <section className="bg-green-50 px-6 md:px-20 py-12 flex flex-col-reverse md:flex-row items-center justify-between">
        <div className="md:max-w-xl mt-10 md:mt-0">
          <h1 className="text-4xl md:text-5xl font-bold text-green-700 leading-tight mb-6">
            Find <span className="text-blue-900">Great Job Opportunity</span><br />You Deserve
          </h1>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <input 
              type="text" 
              placeholder="Skills, Designations, Keyword" 
              className="w-full md:w-80 px-4 py-2 border border-gray-300 rounded"
            />
            <select className="w-full md:w-40 px-4 py-2 border border-gray-300 rounded">
              <option>Job Category</option>
            </select>
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded">
              Find Job
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <img 
            src="https://images.unsplash.com/photo-1603415526960-f8f0b4ef3ec9" 
            alt="Hero" 
            className="w-full max-w-md rounded-2xl"
          />
        </div>
      </section>
    );
  };
  
  export default HeroSection;