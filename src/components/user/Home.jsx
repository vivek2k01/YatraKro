import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import tripsData from "../../data/tripsData";
import SafetyAssurance from "./SafetyAssurance";
import WhyChooseYatraKro from "./WhyChooseYatraKro";
import TravelStats from "./TravelStats";
import SearchIcon from "@mui/icons-material/Search";
import himachal from "../../assets/himachal.jpg";
import vrindavan from "../../assets/vrindavan.jpg";
import somnath from "../../assets/somnath.jpg";
import kedarnath from "../../assets/kedarnath.jpg";
import varansi from "../../assets/varansi.jpg";
import tirupati from "../../assets/tirupatibalaji.jpg";

/* ================= POPULAR PLACES ================= */
const places = [
  { name: "Kedarnath", image: kedarnath },
  { name: "Somnath", image: somnath },
  { name: "Vrindavan", image: vrindavan },
  { name: "Kullu Manali", image: himachal },
  { name: "Tirupati Balaji", image: tirupati },
  { name: "Varanasi", image: varansi },
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
    }, 3000); // 👈 natural rhythm

    return () => clearInterval(interval);
  }, []);

  /* ================= SEARCH LOGIC ================= */
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
    <div className=" text-white relative">
      {/* ================= CINEMATIC HERO (BACKGROUND ONLY KEY) ================= */}

      <div className="relative h-[80vh] md:h-[90vh] flex items-center justify-center overflow-hidden bg-black">
        {/* BACKGROUND IMAGE (FIRST) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`bg-${activeIndex}`}
            initial={{ scale: 1.3, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url(${upcomingTrips[activeIndex]?.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Cinematic Overlay */}
            {/* <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#0C7779]/90"></div> */}
          </motion.div>
        </AnimatePresence>

        {/* HERO TEXT (AFTER IMAGE) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`text-${activeIndex}`}
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{
              delay: 0.6, // ⬅️ image ke baad text
              duration: 0.5,
              ease: "easeOut",
            }}
            className="relative z-10 text-center px-4 max-w-4xl w-full"
          >
            <h1 className="travel-heading text-4xl md:text-6xl font-bold text-white drop-shadow-2xl">
              {upcomingTrips[activeIndex]?.title || "Begin Your Journey"}
            </h1>

            <p className="text-gray-200 mt-4 text-lg font-medium">
              {upcomingTrips[activeIndex]?.location} • Sacred Yatras • Scenic
              Escapes
            </p>
          </motion.div>
        </AnimatePresence>

        {/* UPCOMING TRIP CARDS */}
        <div className="absolute bottom-20 right-4 sm:right-10 hidden sm:flex gap-4 z-20">
          {upcomingTrips.map((trip, index) => {
            if (index < activeIndex || index > activeIndex + 1) return null;

            return (
              <motion.div
                layoutId={`card-${trip.id}`}
                key={trip.id}
                className={`relative w-[200px] h-[130px] rounded-xl overflow-hidden shadow-2xl border-2 
          ${
            index === activeIndex
              ? "border-white scale-105"
              : "border-transparent opacity-60 scale-95"
          }`}
              >
                <img
                  src={trip.image}
                  alt={trip.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute bottom-2 left-3">
                  <p className="text-white text-[10px] font-bold uppercase tracking-tighter">
                    {trip.title}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ================= STABLE SEARCH BAR (JUNCTION POSITION) ================= */}
      <div className="relative z-[100] flex justify-center px-6 -mt-10 mb-[-25px]">
        <div className="w-full sm:w-[75%] md:w-[60%] lg:w-[50%]">
          <div className="flex bg-white rounded-full overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-[#79C9C5]/30">
            <input
              type="text"
              placeholder="Search destination, state or city..."
              value={searchInput}
              onChange={(e) => {
                const value = e.target.value;
                setSearchInput(value);
                setShowSuggestions(true);
                if (value.trim() === "") setAppliedSearch("");
              }}
              onFocus={() => setShowSuggestions(true)}
              className="flex-1 px-6 py-4 text-gray-800 focus:outline-none text-sm sm:text-base bg-transparent"
            />
            <button
              onClick={() => {
                setAppliedSearch(searchInput.trim());
                setShowSuggestions(false);
              }}
              className="bg-blue-600 text-white px-6 sm:px-10 flex items-center justify-center font-semibold hover:bg-blue-700 transition"
            >
              <SearchIcon className="mr-0 sm:mr-2" />
              <span className="hidden sm:block">Search</span>
            </button>
          </div>

          {/* Suggestions Dropdown */}
          {showSuggestions && suggestions.length > 0 && (
            <div className="absolute w-[calc(100%-3rem)] sm:w-[inherit] bg-white text-gray-800 mt-2 rounded-2xl shadow-2xl max-h-60 overflow-y-auto z-[110] border border-gray-100">
              {suggestions.map((item, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setSearchInput(item);
                    setAppliedSearch(item);
                    setShowSuggestions(false);
                  }}
                  className="px-6 py-3 cursor-pointer hover:bg-sky-50 text-left border-b border-gray-50 last:border-0"
                >
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* ================= JOURNEYS SECTION ================= */}
      <div className="relative bg-gradient-to-b from-blue-50 via-sky to-sky-200 pt-16 pb-10">
        <div className="px-6 pb-10">
          <h2 className="travel-heading text-2xl md:text-4xl text-center mb-5 text-blue-700 drop-shadow-md">
            {appliedSearch ? "Your Search Results" : "Starting Soon"}
          </h2>

          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {tripsToShow.map((trip) => (
              <div
                key={trip.id}
                className="group rounded-2xl overflow-hidden shadow-2xl bg-gray-900 border border-white/5"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={trip.image}
                    alt={trip.title}
                    className="h-full w-full object-cover group-hover:scale-110 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="travel-heading text-xl text-white">
                      {trip.title}
                    </h3>
                    <p className="text-gray-300 text-sm mt-1">
                      📍 {trip.location} • 📅 {trip.startDate}
                    </p>
                  </div>
                </div>
                <div className="p-5">
                  <Link
                    to={`/trips/${trip.id}`}
                    className="block text-center bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition shadow-lg"
                  >
                    Start This Journey
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= DESTINATIONS ================= */}
        <div
          className="relative w-full  overflow-hidden"
        >
          {/* SECTION HEADING */}
          <div className="text-center mb-2 px-4">
            <h2 className="travel-heading text-3xl md:text-4xl text-blue-700">
              Destinations That Call You
            </h2>
          </div>

          <div className="relative w-full flex justify-center min-h-[380px] sm:min-h-[420px]">
            <AnimatePresence initial={false} mode="popLayout">
              <motion.div
                key={activePlace}
                className={`
          flex
          flex-col
          md:flex-row
          items-center
          gap-6 sm:gap-8 md:gap-12
          ${activePlace % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}
        `}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {/* TEXT */}
                <motion.div
                  initial={{
                    x: activePlace % 2 === 0 ? "-60px" : "60px",
                    opacity: 0,
                  }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 0.9,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="
            text-center
            md:text-left
            max-w-sm
            px-4
          "
                >
                  <h3 className="travel-heading text-3xl sm:text-3xl md:text-5xl text-blue-800">
                    {places[activePlace].name}
                  </h3>
                </motion.div>

                {/* LINE – DESKTOP (VERTICAL) */}
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "220px" }}
                  exit={{ height: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="
            hidden md:block
            w-[3px]
            bg-gradient-to-b from-blue-500 to-sky-400
          "
                />

                {/* LINE – MOBILE (HORIZONTAL) */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "120px" }}
                  exit={{ width: 0 }}
                  transition={{ duration: 0.6 }}
                  className="
            md:hidden
            h-[3px]
            bg-gradient-to-r from-blue-500 to-sky-400
          "
                />

                {/* IMAGE */}
                <motion.div
                  initial={{
                    x: activePlace % 2 === 0 ? "120%" : "-120%",
                    opacity: 0,
                  }}
                  animate={{ x: "0%", opacity: 1 }}
                  exit={{
                    x: activePlace % 2 === 0 ? "120%" : "-120%",
                    opacity: 0,
                  }}
                  transition={{
                    duration: 1.4,
                    delay: 0.25,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="
            w-[92vw]
            sm:w-[75vw]
            md:w-[40vw]
            max-w-[520px]
            h-[220px]
            sm:h-[260px]
            md:h-[300px]
            rounded-3xl
            overflow-hidden
            shadow-2xl
          "
                >
                  <img
                    src={places[activePlace].image}
                    alt={places[activePlace].name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* ================= TRUST SECTIONS ================= */}
      <div className="bg-white text-gray-800">
        <SafetyAssurance />
        <WhyChooseYatraKro />
        <TravelStats />
      </div>

      {/* ================= CINEMATIC CTA ================= */}
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1800&q=80"
          className="absolute inset-0 h-full w-full object-cover"
          alt="journey"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
        <div className="relative z-10 text-center px-6">
          <h2 className="travel-heading text-4xl font-extrabold text-white">
            ✈️ Your Journey Begins Here
          </h2>
          <p className="text-gray-200 mt-4 italic font-medium">
            Discover • Believe • Travel • Explore
          </p>
          <Link
            to="/trips"
            className="inline-flex mt-8 bg-gradient-to-r from-blue-600 to-sky-600 text-white px-10 py-4 rounded-full font-bold hover:scale-105 transition shadow-2xl"
          >
            🌍 Explore All Journeys
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
