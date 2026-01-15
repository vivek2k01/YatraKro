import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const TravelStats = () => {
  const stats = [
    { count: "1,250+", label: "Trips Done", sub: "Safe Journeys", icon: "🧭" },
    { count: "180+", label: "Partners", sub: "Verified Agents", icon: "🤝" },
    { count: "320+", label: "Active", sub: "Across India", icon: "🗺️" },
  ];

  return (
    <div className="py-8 md:py-16 bg-gradient-to-b from-white to-sky-100/50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* --- Section Header --- */}
        <div className="text-center mb-12 md:mb-16">
          <div className="flex justify-center items-center gap-2 mb-3">
            <div className="h-[1px] w-6 bg-orange-500"></div>
            <span className="text-blue-900 font-bold tracking-[0.2em] uppercase text-[10px]">
              Our Impact
            </span>
            <div className="h-[1px] w-6 bg-orange-500"></div>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-blue-900 tracking-tight">
            The Numbers of Trust<span className="text-orange-500">.</span>
          </h2>
        </div>

        {/* --- Stats Grid --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8"
        >
          {stats.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative bg-white/70 backdrop-blur-md rounded-[2.5rem] p-8 md:p-12 text-center border-4 border-white shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Icon with Floating Effect */}
              <div className="mx-auto w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:bg-orange-500 group-hover:rotate-12 transition-all duration-500 shadow-inner">
                {item.icon}
              </div>

              {/* Count with Gradient Hint */}
              <h3 className="text-4xl md:text-6xl font-black text-blue-900 mb-2 group-hover:text-orange-500 transition-colors tracking-tighter">
                {item.count}
              </h3>

              {/* Label */}
              <p className="text-blue-900 text-sm md:text-lg font-black uppercase tracking-tight">
                {item.label}
              </p>

              {/* Subtext */}
              <div className="mt-3 flex flex-col items-center gap-2">
                <div className="h-[2px] w-4 bg-orange-500/30 group-hover:w-8 transition-all"></div>
                <p className="text-slate-400 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">
                  {item.sub}
                </p>
              </div>
              
              {/* Background Accent for Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 rounded-[2.5rem] transition-opacity"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TravelStats;