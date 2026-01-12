import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const TravelStats = () => {
  const stats = [
    {
      count: "1,250+",
      label: "Successful Trips",
      sub: "Journeys completed safely",
      icon: "🧭",
    },
    {
      count: "180+",
      label: "Travel Partners",
      sub: "Verified tour & travel agents",
      icon: "🤝",
    },
    {
      count: "320+",
      label: "Active Trips",
      sub: "Across India",
      icon: "🗺️",
    },
  ];

  return (
    <div className="relative pb-10 px-5">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-100 via-white to-sky-100"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="travel-heading text-2xl sm:text-3xl md:text-4xl font-bold text-blue-700">
            Our Journey So Far
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            Trusted by travelers and partners across India for safe,
            transparent and memorable journeys.
          </p>
        </motion.div>

        {/* STATS */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-10"
        >
          {stats.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              className="
                group bg-white/90 backdrop-blur rounded-2xl
                p-6 sm:p-10 text-center
                shadow-lg hover:shadow-2xl
                transition
              "
            >
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-5 group-hover:scale-110 transition-transform duration-500">
                {item.icon}
              </div>

              <h3 className="travel-heading text-2xl sm:text-3xl md:text-4xl font-bold text-blue-700">
                {item.count}
              </h3>

              <p className="text-gray-800 text-base sm:text-lg mt-1 sm:mt-2 font-semibold">
                {item.label}
              </p>

              <p className="text-gray-500 text-xs sm:text-sm mt-1">
                {item.sub}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TravelStats;
