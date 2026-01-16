import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
// Using FaMapMarkerAlt for better compatibility
import {
  FaSuitcaseRolling,
  FaUsers,
  FaRupeeSign,
  FaPlusCircle,
  FaMapMarkerAlt,
  FaChevronRight,
  FaSearch,
  FaTimes,
  FaArrowRight,
} from "react-icons/fa";

const stats = [
  {
    title: "Trips",
    value: "48",
    icon: <FaMapMarkerAlt />,
    color: "from-blue-900 to-blue-700 shadow-blue-200",
    link: "/agent/trips",
  },
  {
    title: "Bookings",
    value: "126",
    icon: <FaSuitcaseRolling />,
    color: "from-orange-600 to-orange-400 shadow-orange-200",
    link: "/agent/bookings",
  },
  {
    title: "Customers",
    value: "310",
    icon: <FaUsers />,
    color: "from-slate-900 to-slate-700 shadow-slate-200",
    link: "/agent/customers",
  },
  {
    title: "Revenue",
    value: "₹8.4L",
    icon: <FaRupeeSign />,
    color: "from-blue-600 to-sky-400 shadow-blue-100",
    link: "/agent/revenue",
  },
];

const upcomingTrips = [
  {
    id: "TRIP-201",
    place: "Vrindavan – Agra",
    date: "12 Feb",
    seats: "6 left",
    status: "Filling",
    type: "Spiritual",
  },
  {
    id: "TRIP2102",
    place: "Kedarnath Yatra",
    date: "25 Mar",
    seats: "Sold Out",
    status: "Closed",
    type: "Trek",
  },
  {
    id: "TRIP-203",
    place: "Manali Tour",
    date: "05 Apr",
    seats: "12 left",
    status: "Open",
    type: "Leisure",
  },
];

const TravelAgentDashboard = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();
    const query = searchQuery.toUpperCase().trim();

    if (query.startsWith("BK-")) {
      setSearchResult({
        id: query,
        type: "Booking",
        name: "Agra Trip Booking",
        status: "Paid",
        target: `/agent/bookings/${query}`,
      });
    } else if (query.startsWith("CUST-")) {
      setSearchResult({
        id: query,
        type: "Customer",
        name: "Rahul Sharma",
        status: "Active",
        target: `/agent/customers`,
      });
    } else if (query.startsWith("TRIP-")) {
      setSearchResult({
        id: query,
        type: "Trip",
        name: "Spiritual Vrindavan",
        status: "Filling",
        target: `/agent/trips/view/${query}`,
      });
    } else if (query === "") {
      setSearchResult(null);
    } else {
      setSearchResult(null);
      alert("Invalid ID Format. Use BK-, U-, or TR-");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 via-white to-sky-130 p-3 md:p-10 selection:bg-orange-500 selection:text-white">
      {/* --- HEADER --- */}
      <div className="max-w-7xl mx-auto mb-8 mt-14 md:mt-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <div className="flex items-center gap-2 mb-1 md:mb-3">
            <div className="h-[2px] w-6 bg-orange-500"></div>
            <span className="text-orange-500 font-black tracking-[0.4em] uppercase text-[10px]">
              Management Portal
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-blue-900 tracking-tighter leading-none uppercase italic">
            Command Center.
          </h1>
        </motion.div>

        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/agent/CreateNewTrip")}
          className="flex items-center justify-center gap-3 bg-blue-900 text-white px-8 py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest shadow-xl hover:bg-orange-500 transition-all duration-500"
        >
          <FaPlusCircle className="text-lg" /> Launch New Trip
        </motion.button>
      </div>

      {/* --- UNIVERSAL SEARCH BAR --- */}
      <div className="max-w-7xl mx-auto mb-10 relative">
        <form onSubmit={handleSearch} className="relative group">
          <input
            type="text"
            placeholder="Search BK-, CUST-, or TRIP- ID..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white border-4 border-white shadow-2xl shadow-blue-900/10 rounded-2xl md:rounded-3xl px-6 md:px-10 py-5 md:py-6 text-blue-900 font-bold placeholder:text-slate-300 focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all text-sm md:text-base"
          />
          <button
            type="submit"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-blue-900 text-white p-3 md:p-4 rounded-xl md:rounded-2xl hover:bg-orange-500 transition-all"
          >
            <FaSearch />
          </button>
        </form>

        {/* SEARCH RESULT UI */}
        <AnimatePresence>
          {searchResult && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="absolute z-50 left-0 right-0 mt-4 bg-blue-900 text-white p-6 md:p-8 rounded-[2rem] shadow-2xl shadow-blue-900/40 border-t-4 border-orange-500"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div className="flex items-center gap-4 md:gap-6">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-white/10 rounded-2xl flex items-center justify-center text-2xl">
                    {searchResult.type === "Booking" ? (
                      <FaSuitcaseRolling />
                    ) : searchResult.type === "Customer" ? (
                      <FaUsers />
                    ) : (
                      <FaMapMarkerAlt />
                    )}
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-orange-400 italic">
                      Result Found: {searchResult.type}
                    </span>
                    <h2 className="text-xl md:text-2xl font-black tracking-tight">
                      {searchResult.name}
                    </h2>
                    <p className="text-blue-300 font-mono text-sm">
                      {searchResult.id}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 w-full md:w-auto">
                  <div className="bg-white/5 px-4 py-2 rounded-xl text-[10px] font-black uppercase">
                    Status:{" "}
                    <span className="text-emerald-400">
                      {searchResult.status}
                    </span>
                  </div>
                  <button
                    onClick={() => navigate(searchResult.target)}
                    className="flex-1 md:flex-none bg-orange-500 px-6 py-3 rounded-xl font-black uppercase text-[10px] tracking-widest hover:bg-white hover:text-blue-900 transition-all flex items-center justify-center gap-2"
                  >
                    Manage <FaArrowRight />
                  </button>
                  <button
                    onClick={() => setSearchResult(null)}
                    className="text-white/40 hover:text-white p-2 text-xl"
                  >
                    <FaTimes />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* --- STATS GRID --- */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8 mb-8 md:mb-16">
        {stats.map((item, index) => (
          <Link to={item.link} key={index}>
            <motion.div
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
              className={`relative overflow-hidden bg-gradient-to-br ${item.color} p-5 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] shadow-lg text-white group cursor-pointer active:scale-95 transition-all`}
            >
              <div className="relative z-10">
                <p className="text-[8px] md:text-[10px] font-black uppercase tracking-widest opacity-70 mb-1">
                  {item.title}
                </p>
                <h2 className="text-2xl md:text-4xl font-black tracking-tighter">
                  {item.value}
                </h2>
              </div>
              <div className="absolute top-4 right-4 text-2xl md:text-4xl opacity-20">
                {item.icon}
              </div>
            </motion.div>
          </Link>
        ))}
      </div>

      {/* --- MAIN CONTENT GRID --- */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-10">
        <motion.div className="bg-white border-2 md:border-4 border-white rounded-[2rem] md:rounded-[3rem] p-6 md:p-10 shadow-xl shadow-blue-900/5 flex flex-col justify-between">
          <div>
            <h3 className="text-xl md:text-2xl font-black text-blue-900 mb-4 md:mb-6 uppercase tracking-tighter italic">
              Insights
            </h3>
            <div className="flex items-start gap-3 bg-blue-50/50 p-4 rounded-2xl border border-blue-50">
              <div className="w-1 h-10 bg-orange-500 rounded-full shrink-0"></div>
              <p className="text-slate-500 text-[11px] md:text-sm leading-relaxed font-medium">
                High demand for{" "}
                <span className="text-blue-900 font-bold underline decoration-orange-500">
                  Spiritual Tours
                </span>{" "}
                this week.
              </p>
            </div>
          </div>
          <div className="mt-8 space-y-2">
            <button className="w-full py-3 px-6 bg-slate-50 text-blue-900 rounded-xl font-black text-[8px] md:text-[9px] uppercase tracking-widest flex justify-between items-center group active:bg-blue-900 active:text-white transition-all">
              Reports <FaChevronRight />
            </button>
            <button
              onClick={() => navigate("/agent/refunds")}
              className="w-full py-3 px-6 bg-orange-50 text-orange-600 rounded-xl font-black text-[8px] md:text-[9px] uppercase tracking-widest flex justify-between items-center active:bg-orange-500 active:text-white transition-all"
            >
              Refund <FaChevronRight />
            </button>
          </div>
        </motion.div>

        <motion.div className="lg:col-span-2 bg-white border-2 md:border-4 border-white rounded-[2rem] md:rounded-[3rem] p-6 md:p-10 shadow-xl shadow-blue-900/5">
          <div className="flex justify-between items-center mb-6 md:mb-10">
            <h3 className="text-xl md:text-2xl font-black text-blue-900 uppercase tracking-tighter">
              Departures
            </h3>
            <span className="text-[8px] md:text-[9px] font-black text-white bg-blue-900 px-4 py-2 md:px-6 md:py-3 rounded-full uppercase tracking-widest shadow-lg">
              Schedule
            </span>
          </div>
          <div className="space-y-3">
            {upcomingTrips.map((trip, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-slate-50/50 hover:bg-white border border-transparent hover:border-orange-100 rounded-2xl md:rounded-[2rem] p-3 md:p-6 transition-all group"
              >
                <div className="flex items-center gap-3 md:gap-6">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-xl md:rounded-[1.5rem] flex flex-col items-center justify-center shadow-sm border border-slate-100 group-hover:bg-blue-900 group-hover:text-white transition-all">
                    <span className="text-sm md:text-xl font-black leading-none">
                      {trip.date.split(" ")[0]}
                    </span>
                    <span className="text-[7px] md:text-[8px] font-bold uppercase opacity-60">
                      {trip.date.split(" ")[1]}
                    </span>
                  </div>
                  <div>
                    <span className="text-[7px] md:text-[8px] font-black text-orange-500 uppercase tracking-widest px-1.5 py-0.5 bg-orange-50 rounded mb-1 inline-block">
                      {trip.type}
                    </span>
                    <h4 className="font-bold text-blue-900 text-sm md:text-lg leading-tight">
                      {trip.place}
                    </h4>
                  </div>
                </div>
                <div className="flex items-center gap-3 md:gap-8">
                  <div className="text-right hidden sm:block">
                    <p
                      className={`text-[8px] font-black uppercase ${
                        trip.status === "Closed"
                          ? "text-red-500"
                          : "text-emerald-500"
                      }`}
                    >
                      • {trip.status}
                    </p>
                    <p className="text-[10px] font-bold text-blue-900/40">
                      {trip.seats}
                    </p>
                  </div>
                  <button
                    onClick={() => navigate(`/agent/trips/view/${trip.id}`)}
                    className="bg-white w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-xl shadow-sm text-blue-900 group-hover:bg-orange-500 group-hover:text-white transition-all border border-slate-100"
                  >
                    <FaChevronRight className="text-xs md:text-sm" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TravelAgentDashboard;
