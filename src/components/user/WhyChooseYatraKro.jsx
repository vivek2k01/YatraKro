import React from "react";

const WhyChooseYatraKro = () => {
  const reasons = [
    {
      icon: "✅",
      title: "Verified Partners",
      desc: "We work exclusively with hand-picked, government-approved travel experts.",
    },
    {
      icon: "💰",
      title: "Fair Pricing",
      desc: "Zero hidden fees. Every rupee you spend is accounted for with full honesty.",
    },
    {
      icon: "🧘",
      title: "Diverse Trips",
      desc: "Soulful spiritual yatras or high-octane adventure tours—we have it all.",
    },
    {
      icon: "📞",
      title: "24x7 Support",
      desc: "Our human-led support team is just one call away, anytime, anywhere.",
    },
  ];

  return (
    <div className="relative py-12 overflow-hidden">
      {/* BACKGROUND DECOR (Subtle circles for the 'Osm' vibe) */}

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* --- SECTION HEADER --- */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl text-left">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-1.5 w-12 bg-orange-500 rounded-full"></span>
              <span className="text-blue-900 font-black tracking-[0.2em] uppercase text-[10px]">
                The YatraKro Edge
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-blue-900 tracking-tight leading-none">
              Why Choose Us<span className="text-orange-500">?</span>
            </h2>
          </div>
          <p className="text-slate-500 text-sm md:text-base font-medium max-w-sm md:text-right border-l-2 md:border-l-0 md:border-r-2 border-orange-500 pl-4 md:pr-4">
            We don't just plan trips; we craft memories that stay with you forever. Experience the difference.
          </p>
        </div>

        {/* --- REASONS GRID --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white/80 backdrop-blur-sm rounded-[2rem] p-8 border border-white shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              {/* ICON AREA */}
              <div className="w-14 h-14 bg-white shadow-inner rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:bg-blue-900 group-hover:-rotate-6 transition-all duration-500">
                <span className="group-hover:scale-110 transition-transform">
                  {item.icon}
                </span>
              </div>

              <h3 className="text-lg font-black text-blue-900 mb-3 group-hover:text-orange-500 transition-colors">
                {item.title}
              </h3>

              <p className="text-gray-500 text-xs md:text-sm leading-relaxed font-semibold opacity-80">
                {item.desc}
              </p>

              {/* HOVER ACCENT LINE */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1.5 bg-orange-500 rounded-t-full group-hover:w-1/2 transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* --- TRUST FOOTER --- */}
        <div className="mt-20 pt-10 border-t border-blue-100 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex -space-x-3">
             {/* Simple Avatar placeholders to simulate '10k+ travelers' */}
            {[1,2,3,4].map(i => (
              <div key={i} className={`w-10 h-10 rounded-full border-2 border-white bg-blue-${i}00 flex items-center justify-center text-[10px] font-bold text-white shadow-md overflow-hidden`}>
                <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="user" loading="lazy"    
                    decoding="async" />
              </div>
            ))}
            <div className="w-10 h-10 rounded-full border-2 border-white bg-orange-500 flex items-center justify-center text-[10px] font-bold text-white shadow-md">
              +10k
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            <span className="text-[10px] uppercase tracking-widest text-blue-900/40 font-black">
              ✓ 100% Secure Payments
            </span>
            <span className="text-[10px] uppercase tracking-widest text-blue-900/40 font-black">
              ✓ Verified Experiences
            </span>
            <span className="text-[10px] uppercase tracking-widest text-blue-900/40 font-black">
              ✓ Local Expertise
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseYatraKro;