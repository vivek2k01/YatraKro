import React from "react";

const SafetyAssurance = () => {
  const items = [
    {
      icon: "🛡",
      title: "Verified Hotels",
      desc: "Comfortable and hand-picked hotel stays for a safe journey.",
    },
    {
      icon: "🚍",
      title: "Safe Transport",
      desc: "Well-maintained vehicles with highly experienced drivers.",
    },
    {
      icon: "🧑‍✈️",
      title: "Expert Guides",
      desc: "Professional local guides to assist you throughout the trip.",
    },
    {
      icon: "📄",
      title: "Clear Itinerary",
      desc: "Meticulously planned day-wise maps with full transparency.",
    },
  ];

  return (
    <div className="relative overflow-hidden py-16 backdrop-blur-sm">
      {/* --- TOP ACCENT LINE --- */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-1.5 bg-orange-500 rounded-b-full shadow-lg shadow-orange-200"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* --- HEADER SECTION --- */}
        <div className="text-center mb-12 md:mb-16">
          <div className="flex justify-center items-center gap-2 mb-3">
            <div className="h-[1px] w-6 bg-orange-500 rounded-full"></div>
            <span className="text-blue-900 font-bold tracking-[0.3em] uppercase text-[10px]">
              Our Promise
            </span>
            <div className="h-[1px] w-6 bg-orange-500 rounded-full"></div>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-blue-900 tracking-tight">
            Safety & Assurance<span className="text-orange-500">.</span>
          </h2>
          <p className="mt-6 text-slate-500 max-w-2xl mx-auto text-sm md:text-lg font-light leading-relaxed">
            Your journey is our responsibility. We ensure safety, comfort, and
            unmatched transparency in every yatra and adventure.
          </p>
        </div>

        {/* --- PREMIUM CARDS GRID --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white/70 backdrop-blur-md rounded-[2.5rem] p-8 text-center border-2 border-white shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3"
            >
              {/* ICON CONTAINER */}
              <div className="relative mx-auto w-20 h-20 mb-6 flex items-center justify-center bg-blue-50 rounded-3xl group-hover:bg-orange-500 transition-colors duration-500 group-hover:rotate-12">
                <span className="text-4xl filter group-hover:brightness-0 group-hover:invert transition-all duration-500">
                  {item.icon}
                </span>
                {/* DECORATIVE DOT */}
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-orange-500 border-4 border-white rounded-full"></div>
              </div>

              <h3 className="text-xl font-bold text-blue-900 mb-3 group-hover:text-orange-600 transition-colors">
                {item.title}
              </h3>

              <p className="text-gray-500 text-sm leading-relaxed font-medium">
                {item.desc}
              </p>

              {/* BOTTOM ACCENT BAR */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-0 h-1 bg-blue-900 rounded-full group-hover:w-12 transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* --- TRUST FOOTER --- */}
        <div className="mt-20 flex flex-col items-center gap-6">
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
            <div className="flex flex-col items-center">
              <span className="text-2xl font-black text-blue-900">10,000+</span>
              <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Happy Souls</span>
            </div>
            <div className="h-8 w-[1px] bg-blue-200 hidden md:block"></div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-black text-blue-900">4.8★</span>
              <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">User Rating</span>
            </div>
            <div className="h-8 w-[1px] bg-blue-200 hidden md:block"></div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-black text-blue-900">PAN India</span>
              <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Coverage</span>
            </div>
          </div>
          
          <div className="bg-blue-900 text-white px-8 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.3em]">
            Verified Partner
          </div>
        </div>
      </div>
    </div>
  );
};

export default SafetyAssurance;