import React, { useState } from "react";
import { motion } from "framer-motion"; // Performance ke liye zaruri hai
import mission from "../../assets/mission2.jpg";
import whoweare from "../../assets/whoweare.jpg";
import { useNavigate } from "react-router-dom";

const About = () => {
  // Image loading state handling
  const [imagesLoaded, setImagesLoaded] = useState({
    who: false,
    mission: false,
  });

  const handleImageLoad = (key) => {
    setImagesLoaded((prev) => ({ ...prev, [key]: true }));
  };
  const navigate = useNavigate();

  return (
    <div className="min-h-screen px-4 md:px-6 py-20 bg-gradient-to-b from-blue-100 via-white to-sky-130 selection:bg-orange-500 selection:text-white">
      {/* --- PAGE HEADER --- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto mb-16 mt-10 text-center"
      >
        <div className="flex justify-center items-center gap-2 mb-3">
          <div className="h-[1px] w-6 bg-orange-500 rounded-full"></div>
          <span className="text-blue-900 font-bold tracking-[0.3em] md:tracking-[0.4em] uppercase text-[10px] md:text-xs">
            Our Story
          </span>
          <div className="h-[1px] w-6 bg-orange-500 rounded-full"></div>
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-blue-900 tracking-tight">
          About YatraKro<span className="text-orange-500">.</span>
        </h1>
        <p className="mt-4 text-gray-500 font-medium max-w-2xl mx-auto text-sm md:text-base">
          Your trusted platform for spiritual and travel journeys across India.
          We bridge the gap between soulful seekers and divine destinations.
        </p>
      </motion.div>

      {/* --- CONTENT WRAPPER --- */}
      <div className="max-w-6xl mx-auto space-y-10 md:space-y-20">
        {/* WHO WE ARE */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="group grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white/70 backdrop-blur-md p-4 md:p-10 rounded-[2.5rem] shadow-xl border-4 border-white transition-all duration-500 hover:shadow-2xl"
        >
          {/* Optimized Image Container */}
          <div className="relative overflow-hidden rounded-[2rem] h-72 bg-slate-200 animate-pulse">
            <img
              src={whoweare}
              alt="Who We Are"
              loading="eager" // About page ki main images ko jaldi load karein
              onLoad={() => handleImageLoad("who")}
              className={`w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 ${
                imagesLoaded.who
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-105"
              }`}
            />
            <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors"></div>
          </div>

          <div className="px-2">
            <h2 className="text-3xl font-black text-blue-900 mb-4 leading-tight">
              Who We Are<span className="text-orange-500">?</span>
            </h2>
            <p className="text-gray-500 font-medium leading-relaxed text-sm md:text-base">
              YatraKro is a travel-focused platform designed to connect
              travelers with trusted tour and travel partners. Whether you are
              planning a spiritual yatra or an adventure trip, we make trip
              discovery and booking{" "}
              <span className="text-blue-900 font-bold">
                simple, transparent, and reliable.
              </span>
            </p>
          </div>
        </motion.div>

        {/* OUR MISSION */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="group grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white/70 backdrop-blur-md p-4 md:p-10 rounded-[2.5rem] shadow-xl border-4 border-white transition-all duration-500 hover:shadow-2xl"
        >
          <div className="order-2 md:order-1 px-2">
            <h2 className="text-3xl font-black text-blue-900 mb-4 leading-tight">
              Our Mission<span className="text-orange-500">.</span>
            </h2>
            <p className="text-gray-500 font-medium leading-relaxed text-sm md:text-base">
              Our mission is to simplify travel planning for everyone by
              bringing{" "}
              <span className="text-blue-900 font-bold">
                verified trips, clear pricing, and trusted partners
              </span>{" "}
              onto one platform.
            </p>
          </div>

          {/* Optimized Image Container */}
          <div className="relative overflow-hidden rounded-[2rem] h-72 order-1 md:order-2 bg-slate-200">
            <img
              src={mission}
              alt="Our Mission"
              loading="lazy"
              onLoad={() => handleImageLoad("mission")}
              className={`w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 ${
                imagesLoaded.mission
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-105"
              }`}
            />
            <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors"></div>
          </div>
        </motion.div>

        {/* VALUES SECTION (Icons load faster than images) */}
        <div className="pt-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black text-blue-900 tracking-tighter">
              Why Choose YatraKro<span className="text-orange-500">?</span>
            </h2>
            <div className="w-12 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Trusted Partners",
                desc: "Work only with verified operators.",
                icon: "🤝",
              },
              {
                title: "Transparent Pricing",
                desc: "No hidden charges.",
                icon: "💎",
              },
              {
                title: "Easy Booking",
                desc: "Simple and fast experience.",
                icon: "⚡",
              },
            ].map((value, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-white/50 backdrop-blur-sm p-8 rounded-[2rem] border-2 border-white text-center hover:bg-white hover:shadow-xl transition-all duration-300"
              >
                <div className="text-3xl mb-4">{value.icon}</div>
                <h3 className="text-lg font-black text-blue-900 mb-2 uppercase tracking-tight">
                  {value.title}
                </h3>
                <p className="text-gray-500 text-xs font-bold leading-relaxed">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* FOOTER CALL TO ACTION */}
      <div className="max-w-4xl mx-auto mt-20 text-center bg-blue-900 p-10 md:p-16 rounded-[3rem] shadow-2xl relative overflow-hidden">
        <h2 className="text-3xl md:text-5xl font-black text-white mb-6 relative z-10">
          Ready for your next yatra<span className="text-orange-500">?</span>
        </h2>
        <button
          onClick={() => navigate("/trips")}
          className="relative z-10 bg-orange-500 text-white px-10 py-4 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-white hover:text-blue-900 transition-all duration-300 shadow-lg"
        >
          Explore All Trips
        </button>
      </div>
    </div>
  );
};

export default About;
