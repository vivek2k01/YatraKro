const SafetyAssurance = () => {
  const items = [
    {
      icon: "🛡",
      title: "Verified Hotels",
      desc: "Comfortable and verified hotel stays for a safe journey.",
    },
    {
      icon: "🚍",
      title: "Safe Transport",
      desc: "Well-maintained vehicles with experienced drivers.",
    },
    {
      icon: "🧑‍✈️",
      title: "Experienced Guides",
      desc: "Professional guides to assist you throughout the trip.",
    },
    {
      icon: "📄",
      title: "Clear Itinerary",
      desc: "Well-planned day-wise itinerary with full transparency.",
    },
  ];

  return (
    <div className="relative py-5">
      {/* LINEAR GRADIENT BACKGROUND */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-sky-400 to-blue-500"></div>

      <div
        className="absolute inset-0 bg-gradient-to-b from-sky-200 via-white to-blue-50
"
      ></div>

      {/* CONTENT */}
      <div className="relative z-10 px-5 sm:px-4 pt-0">
        <div className="max-w-7xl mx-auto">
          {/* HEADING */}
          <div className="text-center mb-12">
            <h2 className="travel-heading text-2xl sm:text-3xl md:text-4xl font-bold text-blue-700">
              Safety & Assurance
            </h2>
            <p className="text-gray-700 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
              Your journey is our responsibility. We ensure safety, comfort and
              transparency in every yatra and trip.
            </p>
          </div>

          {/* CARDS */}
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
  {items.map((item, index) => (
    <div
      key={index}
      className="
        bg-white/90 backdrop-blur rounded-2xl
        p-6 sm:p-8
        text-center shadow-lg hover:shadow-2xl
        hover:-translate-y-1 sm:hover:-translate-y-2
        transition duration-500
      "
    >
      <div
        className="
          bg-white/90 backdrop-blur rounded-2xl
          p-4 sm:p-8
          text-center
          text-3xl sm:text-4xl
          mb-3 sm:mb-5
        "
      >
        {item.icon}
      </div>

      <h3 className="travel-heading text-base sm:text-lg font-semibold text-blue-700 mb-2 sm:mb-3">
        {item.title}
      </h3>

      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
        {item.desc}
      </p>
    </div>
  ))}
</div>

        </div>
        <p className="text-center text-sm text-gray-500 mt-12">
          Trusted by 10,000+ travellers • 4.8★ Rated • PAN India Coverage
        </p>
      </div>
    </div>
  );
};

export default SafetyAssurance;
