import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import tripsData from "../../data/tripsData";
import SafetyAssurance from "./SafetyAssurance";
import WhyChooseYatraKro from "./WhyChooseYatraKro";
import TravelStats from "./TravelStats";
import SearchIcon from "@mui/icons-material/Search";

// Assets (Using your imported paths)
import himachal from "../../assets/himachal.jpg";
import vrindavan from "../../assets/vrindavan.jpg";
import somnath from "../../assets/somnath.jpg";
import kedarnath from "../../assets/kedarnath.jpg";
import varansi from "../../assets/varansi.jpg";
import tirupati from "../../assets/tirupatibalaji.jpg";

const places = [
  { name: "Kedarnath", image: kedarnath, state: "Uttarakhand" },
  { name: "Somnath", image: somnath, state: "Gujarat" },
  { name: "Vrindavan", image: vrindavan, state: "Uttar Pradesh" },
  { name: "Kullu Manali", image: himachal, state: "Himachal Pradesh" },
  { name: "Tirupati Balaji", image: tirupati, state: "Andhra Pradesh" },
  { name: "Varanasi", image: varansi, state: "Uttar Pradesh" },
];

const Home = () => {
  const [searchInput, setSearchInput] = useState("");
  const [appliedSearch, setAppliedSearch] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activePlace, setActivePlace] = useState(0);

  const upcomingTrips = [...tripsData]
    .sort((a, b) => new Date(a.startDate) - new Date(b.startDate))
    .slice(0, 6);

  useEffect(() => {
    if (upcomingTrips.length === 0) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % upcomingTrips.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [upcomingTrips.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActivePlace((prev) => (prev + 1) % places.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const searchedTrips = tripsData.filter((trip) => {
    if (!appliedSearch) return true;
    const search = appliedSearch.toLowerCase();
    return (
      trip.title.toLowerCase().includes(search) ||
      trip.location.toLowerCase().includes(search) ||
      trip.startLocation.toLowerCase().includes(search)
    );
  });

  const tripsToShow = appliedSearch
    ? searchedTrips
    : [...tripsData]
        .sort((a, b) => new Date(a.startDate) - new Date(b.startDate))
        .slice(0, 3);

  const suggestions = [
    ...new Set(
      tripsData.flatMap((trip) => [
        trip.title,
        trip.location,
        trip.startLocation,
      ])
    ),
  ].filter(
    (item) =>
      searchInput && item.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <div className="text-white relative bg-white overflow-x-hidden">
      {/* ================= CINEMATIC HERO ================= */}
      <div className="relative h-[85vh] md:h-[95vh] flex items-center justify-center overflow-hidden bg-blue-950">
        <AnimatePresence mode="wait">
          <motion.div
            key={`bg-${activeIndex}`}
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url(${upcomingTrips[activeIndex]?.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* High-End Cinematic Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-950/60 via-transparent to-blue-950/90"></div>
          </motion.div>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.div
            key={`text-${activeIndex}`}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative z-10 text-center px-6 max-w-5xl"
          >
            <div className="flex justify-center items-center gap-3 mb-6">
              <span className="h-[2px] w-10 bg-orange-500 rounded-full"></span>
              <span className="text-orange-400 font-black tracking-[0.4em] uppercase text-[10px]">
                Upcoming Yatra
              </span>
              <span className="h-[2px] w-10 bg-orange-500 rounded-full"></span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter drop-shadow-2xl leading-none mb-6">
              {upcomingTrips[activeIndex]?.title || "Begin Your Journey"}
              <span className="text-orange-500">.</span>
            </h1>
            <p className="text-gray-200 text-lg md:text-2xl font-light tracking-wide max-w-2xl mx-auto italic opacity-90">
              {upcomingTrips[activeIndex]?.location} • Sacred Yatras
            </p>
          </motion.div>
        </AnimatePresence>

        {/* FLOATING PREVIEW CARDS */}
        <div className="absolute bottom-24 right-10 hidden lg:flex gap-6 z-20">
          {upcomingTrips.map((trip, index) => {
            if (index < activeIndex || index > activeIndex + 1) return null;
            return (
              <motion.div
                layoutId={`card-${trip.id}`}
                key={trip.id}
                className={`relative w-[240px] h-[140px] rounded-[2rem] overflow-hidden shadow-2xl border-2 transition-all duration-700
                  ${
                    index === activeIndex
                      ? "border-orange-500 scale-105"
                      : "border-white/20 opacity-40 scale-95"
                  }`}
              >
                <img
                  src={trip.image}
                  className="absolute inset-0 w-full h-full object-cover"
                  alt=""
                  loading="lazy"    
                    decoding="async"
                />
                <div className="absolute inset-0 bg-blue-900/40"></div>
                <div className="absolute bottom-4 left-5">
                  <p className="text-white text-[10px] font-black uppercase tracking-widest">
                    {trip.title}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ================= SEARCH BAR (STABLE JUNCTION) ================= */}
      <div className="relative z-[100] flex justify-center px-6 -mt-10 mb-8">
        <div className="w-full max-w-3xl">
          <div className="flex bg-white rounded-[2.5rem] p-2 overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)] border border-blue-100">
            <input
              type="text"
              placeholder="Where is your soul calling you?..."
              value={searchInput}
              onChange={(e) => {
                const value = e.target.value;
                setSearchInput(value);
                setShowSuggestions(true);
                if (value.trim() === "") setAppliedSearch("");
              }}
              onFocus={() => setShowSuggestions(true)}
              className="flex-1 px-8 py-4 text-blue-900 focus:outline-none text-base font-medium placeholder:text-slate-400"
            />
            <button
              onClick={() => {
                setAppliedSearch(searchInput.trim());
                setShowSuggestions(false);
              }}
              className="bg-blue-900 text-white px-8 md:px-12 flex items-center justify-center font-black uppercase tracking-widest text-[11px] rounded-[2rem] hover:bg-orange-500 transition-all duration-500 shadow-lg"
            >
              <SearchIcon className="mr-2 !text-lg" />
              <span className="hidden sm:block">Search</span>
            </button>
          </div>

          {/* Suggestions Dropdown */}
          <AnimatePresence>
            {showSuggestions && suggestions.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="absolute w-[calc(100%-3rem)] sm:w-full max-w-3xl bg-white text-blue-900 mt-3 rounded-[2rem] shadow-2xl max-h-64 overflow-y-auto z-[110] border border-blue-50 p-3"
              >
                {suggestions.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      setSearchInput(item);
                      setAppliedSearch(item);
                      setShowSuggestions(false);
                    }}
                    className="px-6 py-4 cursor-pointer hover:bg-blue-50 hover:text-orange-500 rounded-xl transition-colors font-bold text-sm border-b border-gray-50 last:border-0"
                  >
                    {item}
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* ================= JOURNEYS SECTION ================= */}
      <div className="relative bg-white pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div className="text-left">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-8 h-[2px] bg-orange-500"></span>
                <span className="text-blue-900 font-black uppercase tracking-widest text-[10px]">
                  The Collection
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-blue-900 leading-none">
                {appliedSearch ? "Search Results" : "Upcoming Journeys"}
                <span className="text-orange-500">.</span>
              </h2>
            </div>
            <Link
              to="/trips"
              className="text-orange-500 font-bold uppercase tracking-widest text-xs hover:text-blue-900 transition-colors"
            >
              View All Journeys →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {tripsToShow.map((trip) => (
              <div
                key={trip.id}
                className="group relative rounded-[2.5rem] overflow-hidden bg-white border border-blue-50 shadow-xl hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={trip.image}
                    alt={trip.title}
                    loading="lazy"    
                    decoding="async"
                    className="h-full w-full object-cover group-hover:scale-110 transition duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-transparent to-transparent"></div>
                  <div className="absolute top-6 left-6 bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/30">
                    <p className="text-white text-[10px] font-black uppercase tracking-widest">
                      📅 {trip.startDate}
                    </p>
                  </div>
                  <div className="absolute bottom-6 left-6">
                    <h3 className="text-2xl font-black text-white tracking-tight">
                      {trip.title}
                    </h3>
                    <p className="text-orange-400 text-xs font-bold tracking-widest uppercase mt-1">
                      📍 {trip.location}
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <Link
                    to={`/trips/${trip.id}`}
                    className="block text-center bg-blue-900 text-white py-4 rounded-2xl font-black uppercase tracking-widest text-[11px] hover:bg-orange-500 transition-all duration-500 shadow-lg"
                  >
                    Explore Journey
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= DESTINATIONS ================= */}
      <div className="bg-white/40 py-16 backdrop-blur-sm border-y border-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-blue-900 tracking-tight">
              Destinations That Call You
              <span className="text-orange-500">.</span>
            </h2>
            <div className="w-20 h-1.5 bg-orange-500 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="relative w-full flex justify-center min-h-[450px]">
            <AnimatePresence initial={false} mode="popLayout">
              <motion.div
                key={activePlace}
                className={`flex flex-col md:flex-row items-center gap-12 ${
                  activePlace % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  initial={{ x: activePlace % 2 === 0 ? -60 : 60, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  className="text-center md:text-left max-w-sm"
                >
                  <h3 className="text-5xl md:text-7xl font-black text-blue-900 tracking-tighter leading-none mb-4">
                    {places[activePlace].name}
                  </h3>
                  <p className="text-orange-500 font-black uppercase tracking-[0.3em] text-sm">
                    {places[activePlace].state}
                  </p>
                </motion.div>

                <div className="hidden md:block w-[2px] h-48 bg-blue-200"></div>

                <motion.div
                  initial={{
                    x: activePlace % 2 === 0 ? 100 : -100,
                    opacity: 0,
                    rotate: activePlace % 2 === 0 ? 5 : -5,
                  }}
                  animate={{ x: 0, opacity: 1, rotate: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="w-[90vw] md:w-[45vw] max-w-xl h-[300px] md:h-[400px] rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.4)] border-[12px] border-white"
                >
                  <img
                    src={places[activePlace].image}
                    className="w-full h-full object-cover"
                    alt=""
                    loading="lazy"    
                    decoding="async"
                  />
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* ================= TRUST SECTIONS ================= */}
      <div className="bg-white">
        <SafetyAssurance />
        <WhyChooseYatraKro />
        <TravelStats />
      </div>

      {/* ================= CINEMATIC CTA ================= */}
      <div className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1800&q=80"
          className="absolute inset-0 h-full w-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
          alt=""
          loading="lazy"    
                    decoding="async"
        />
        <div className="absolute inset-0 bg-blue-950/80 backdrop-blur-[2px]"></div>
        <div className="relative z-10 text-center px-4 md:px-6 py-12 md:py-20">
          {/* --- Compact Badge --- */}
          <div className="mb-4 md:mb-6 inline-block bg-orange-500 px-4 md:px-6 py-1.5 md:py-2 rounded-full text-white font-black uppercase tracking-widest text-[9px] md:text-[10px]">
            Adventure Awaits
          </div>

          {/* --- Fluid Responsive Heading --- */}
          <h2 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter mb-6 md:mb-10 leading-[0.9] md:leading-none">
            Your Journey <br className="hidden sm:block" /> Begins Here
            <span className="text-orange-500">.</span>
          </h2>

          {/* --- Adaptive Button --- */}
          <Link
            to="/trips"
            className="inline-flex bg-white text-blue-900 px-8 md:px-12 py-3.5 md:py-5 rounded-full font-black uppercase tracking-widest text-[10px] md:text-xs hover:bg-orange-500 hover:text-white transition-all duration-500 shadow-2xl transform hover:scale-105 active:scale-95"
          >
            🌍 <span className="ml-2">Explore All Journeys</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
