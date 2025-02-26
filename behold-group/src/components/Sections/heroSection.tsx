const HeroSection = () => {
    return (
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600">
        <div className="text-center text-white px-4">
          <h1 className="text-6xl font-bold mb-4">Terra Azul Tech</h1>
          <p className="text-2xl mb-8">Strong Ozone</p>
          <button className="px-8 py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-lg">
            Learn More
          </button>
        </div>
      </section>
    );
  };

  export default HeroSection;
