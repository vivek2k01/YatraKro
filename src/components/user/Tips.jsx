import { Link, useSearchParams } from "react-router-dom";
import { useState } from "react";
import tripsData from "../../data/tripsData";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { motion } from "framer-motion";


const Trips = () => {
  const [fromInput, setFromInput] = useState("");
  const [toInput, setToInput] = useState("");
  const [dateInput, setDateInput] = useState("");

  const [appliedFrom, setAppliedFrom] = useState("");
  const [appliedTo, setAppliedTo] = useState("");
  const [appliedDate, setAppliedDate] = useState("");

  const [searchParams] = useSearchParams();
  const destination = searchParams.get("destination");

  // Filter Logic
  const filteredTrips = tripsData.filter((trip) => {
    if (destination) {
      const search = destination.toLowerCase();
      return (
        trip.title.toLowerCase().includes(search) ||
        trip.location.toLowerCase().includes(search) ||
        trip.startLocation.toLowerCase().includes(search)
      );
    }

    const fromMatch = appliedFrom
      ? trip.startLocation.toLowerCase().includes(appliedFrom.toLowerCase())
      : true;
    const toMatch = appliedTo
      ? trip.location.toLowerCase().includes(appliedTo.toLowerCase()) ||
        trip.title.toLowerCase().includes(appliedTo.toLowerCase())
      : true;
    const dateMatch = appliedDate ? trip.startDate === appliedDate : true;

    return fromMatch && toMatch && dateMatch;
  });

  return (
    <div className="min-h-screen px-4 md:px-6 py-10 md:py-12 bg-gradient-to-b from-blue-100 via-white to-sky-130 selection:bg-orange-500 selection:text-white">
      {/* --- HEADER SECTION --- */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
         className="relative max-w-7xl mx-auto mb-16 mt-16 text-center px-4">
        {/* Sub-label */}
        <div className="flex justify-center items-center gap-2 mb-4">
          <div className="h-[1px] w-6 bg-orange-500 rounded-full"></div>
          <span className="text-blue-900 font-bold tracking-[0.3em] md:tracking-[0.4em] uppercase text-[10px] md:text-xs">
            Your Next Adventure
          </span>
          <div className="h-[1px] w-6 bg-orange-500 rounded-full"></div>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-7xl font-black text-blue-900 tracking-tight leading-tight">
          {destination ? `Explore ${destination}` : "Find Your Trip"}
          <span className="text-orange-500">.</span>
        </h1>

        {/* Tagline */}
        <p className="mt-4 md:mt-6 text-slate-500 max-w-xl mx-auto text-sm md:text-lg font-light italic">
          Discover divine paths and hidden gems.
        </p>
      </motion.div>

      {/* --- PREMIUM SEARCH BAR --- */}
      <div className="max-w-5xl mx-auto bg-white/70 backdrop-blur-md rounded-[2rem] shadow-xl p-4 md:p-6 mb-16 border border-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="From (e.g. Delhi)"
              value={fromInput}
              onChange={(e) => setFromInput(e.target.value)}
              className="w-full bg-blue-50/50 border-none rounded-2xl px-5 py-3 text-sm focus:ring-2 focus:ring-orange-500 outline-none transition-all"
            />
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="To (Destination)"
              value={toInput}
              onChange={(e) => setToInput(e.target.value)}
              className="w-full bg-blue-50/50 border-none rounded-2xl px-5 py-3 text-sm focus:ring-2 focus:ring-orange-500 outline-none transition-all"
            />
          </div>
          <div className="relative">
            <input
              type="date"
              value={dateInput}
              onChange={(e) => setDateInput(e.target.value)}
              className="w-full bg-blue-50/50 border-none rounded-2xl px-5 py-3 text-sm focus:ring-2 focus:ring-orange-500 outline-none transition-all text-gray-500"
            />
          </div>
          <button
            onClick={() => {
              setAppliedFrom(fromInput);
              setAppliedTo(toInput);
              setAppliedDate(dateInput);
            }}
            className="bg-orange-500 hover:bg-blue-900 text-white rounded-2xl text-sm font-bold uppercase tracking-widest transition-all duration-300 py-3 shadow-lg shadow-orange-200 hover:shadow-blue-200"
          >
            Search
          </button>
        </div>

        {/* CLEAR ACTION */}
        {(appliedFrom || appliedTo || appliedDate) && (
          <div className="text-center mt-4">
            <button
              onClick={() => {
                setFromInput("");
                setToInput("");
                setDateInput("");
                setAppliedFrom("");
                setAppliedTo("");
                setAppliedDate("");
              }}
              className="text-[10px] uppercase tracking-widest text-orange-600 font-bold hover:text-blue-900 transition"
            >
              × Clear Filters
            </button>
          </div>
        )}
      </div>

      {/* --- TRIPS GRID --- */}
      <div className="max-w-7xl mx-auto">
        {filteredTrips.length === 0 ? (
          <div className="text-center py-20 bg-white/40 rounded-[3rem] border-2 border-dashed border-blue-200">
            <p className="text-blue-900/50 font-bold italic">
              No magic found for this search. Try another spot!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {filteredTrips.map((trip) => (
              <div
                key={trip.id}
                className="group relative bg-white rounded-[2.5rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border-4 border-white transform hover:-translate-y-2"
              >
                {/* IMAGE SECTION */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={trip.image}
                    alt={trip.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-orange-500 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter">
                    {trip.duration.days}D / {trip.duration.nights}N
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* CONTENT SECTION */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h2 className="text-xl font-bold text-blue-900 leading-tight group-hover:text-orange-500 transition-colors">
                        {trip.title}
                      </h2>
                      <p className="text-gray-400 text-xs font-medium uppercase tracking-tighter mt-1">
                        📍 {trip.location}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-orange-500 font-black text-xl">
                        ₹{trip.pricePerPerson}
                      </p>
                      <p className="text-[9px] text-gray-400 uppercase font-bold">
                        Per Person
                      </p>
                      {/* DATE SHOWING HERE */}
                      <div className="mt-2 flex items-center justify-end gap-1 text-blue-900/60">
                        <CalendarMonthIcon style={{ fontSize: '14px' }} />
                        <span className="text-[10px] font-black">{trip.startDate}</span>
                      </div>
                    </div>
                  </div>

                  <div className="h-[1px] w-full bg-blue-50 my-4"></div>

                  <div className="grid grid-cols-2 gap-4 text-[11px] text-gray-500 font-bold uppercase tracking-widest">
                    <div className="flex flex-col">
                      <span className="text-blue-900/30 text-[9px]">
                        Starts From
                      </span>
                      <span>{trip.startLocation}</span>
                    </div>
                    <div className="flex flex-col text-right">
                      <span className="text-blue-900/30 text-[9px]">
                        Stay Type
                      </span>
                      <span>{trip.stayType}</span>
                    </div>
                  </div>

                  <Link
                    to={`/trips/${trip.id}`}
                    className="mt-6 w-full block text-center bg-blue-900 text-white py-3.5 rounded-2xl font-bold uppercase text-xs tracking-[0.2em] hover:bg-orange-500 transition-all duration-300 shadow-lg shadow-blue-100 hover:shadow-orange-100"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Trips;
