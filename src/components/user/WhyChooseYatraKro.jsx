const WhyChooseYatraKro = () => {
  const reasons = [
    {
      icon: "✅",
      title: "Verified Travel Partners",
      desc: "We work only with trusted and verified tour and travel partners.",
    },
    {
      icon: "💰",
      title: "Transparent Pricing",
      desc: "No hidden charges. Clear pricing with complete cost breakdown.",
    },
    {
      icon: "🧘",
      title: "Spiritual & Adventure Trips",
      desc: "From yatras to adventure tours, we cover every travel need.",
    },
    {
      icon: "📞",
      title: "24x7 Support",
      desc: "Our support team is always available to assist you anytime.",
    },
  ];

  return (
    <div className="relative py-5">

      {/* LINEAR GRADIENT BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-sky-100"></div>

      {/* CONTENT */}
      <div className="relative z-10 px-5 sm:px-4 pb-10">
        <div className="max-w-7xl mx-auto">

          {/* HEADING */}
          <div className="text-center mb-12">
            <h2 className="travel-heading text-2xl sm:text-3xl md:text-4xl font-bold text-blue-700">
              Why Choose YatraKro?
            </h2>
            <p className="text-gray-700 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
              We are committed to making your journey safe, transparent and truly memorable.
            </p>
          </div>

          {/* CARDS */}
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
  {reasons.map((item, index) => (
    <div
      key={index}
      className="
        group bg-white/90 backdrop-blur rounded-2xl
        p-6 sm:p-8
        text-center shadow-lg hover:shadow-2xl
        hover:-translate-y-1 sm:hover:-translate-y-2
        transition duration-500
      "
    >
      <div className="text-3xl sm:text-4xl mb-3 sm:mb-5 transition-transform duration-500 group-hover:scale-110">
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

          {/* TRUST LINE */}
          <p className="text-center text-sm text-gray-500 mt-12">
            Trusted by 10,000+ travellers • PAN India Trips • Handpicked Experiences
          </p>

        </div>
      </div>
    </div>
  );
};

export default WhyChooseYatraKro;
