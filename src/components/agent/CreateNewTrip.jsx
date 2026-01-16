import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaHotel,
  FaUtensils,
  FaPlane,
  FaArrowRight,
  FaArrowLeft,
  FaPlus,
  FaRupeeSign,
  FaClock,
  FaWalking,
} from "react-icons/fa";

const CreateNewTrip = () => {
  const [step, setStep] = useState(1);
  const [trip, setTrip] = useState({
    title: "",
    location: "",
    startLocation: "",
    pricePerPerson: "",
    travelVia: [],
    duration: { days: "", nights: "" },
    totalPeople: "",
    startDate: "",
    endDate: "",
    stayType: "",
    image: "",
    meals: { breakfast: false, lunch: false, dinner: false },
    description: "",
    includes: "",
    mandatoryItems: "",
    itinerary: [{ day: 1, title: "", details: "" }],
  });

  const handleChange = (e) =>
    setTrip({ ...trip, [e.target.name]: e.target.value });
  const handleDuration = (e) =>
    setTrip({
      ...trip,
      duration: { ...trip.duration, [e.target.name]: e.target.value },
    });
  const handleMeals = (name) =>
    setTrip({ ...trip, meals: { ...trip.meals, [name]: !trip.meals[name] } });

  const handleTravelVia = (mode) => {
    setTrip({
      ...trip,
      travelVia: trip.travelVia.includes(mode)
        ? trip.travelVia.filter((m) => m !== mode)
        : [...trip.travelVia, mode],
    });
  };

  // Synced Global Styles
  const inputStyle =
    "w-full bg-slate-50 border-2 border-slate-100 rounded-xl md:rounded-2xl py-3 md:py-4 px-4 outline-none focus:border-orange-500 focus:bg-white transition-all text-xs md:text-sm text-blue-900 font-bold placeholder:text-slate-300";
  const labelStyle =
    "text-[9px] md:text-[10px] font-black uppercase tracking-[0.15em] md:tracking-[0.2em] text-blue-900 mb-1.5 ml-1 flex items-center gap-2";

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 via-white to-sky-130 p-3 md:p-10 selection:bg-orange-500 selection:text-white">
      {/* --- HEADER --- */}
      <div className="max-w-7xl mx-auto mb-6 md:mb-10 mt-16 md:mt-24 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <div className="flex items-center gap-2 mb-1 md:mb-3">
            <div className="h-[2px] w-4 md:w-6 bg-orange-500"></div>
            <span className="text-blue-900 font-black tracking-[0.2em] uppercase text-[8px] md:text-[10px]">
              Operations Center
            </span>
          </div>
          <h1 className="text-2xl md:text-5xl font-black text-blue-900 tracking-tighter uppercase italic">
            Launch Trip<span className="text-orange-500">.</span>
          </h1>
        </motion.div>

        {/* COMPACT STEPS */}
        <div className="flex gap-2">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                step === i
                  ? "w-8 md:w-12 bg-orange-500"
                  : "w-3 md:w-4 bg-blue-900/10"
              }`}
            />
          ))}
        </div>
      </div>

      {/* --- MAIN FORM CONTAINER --- */}
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/70 backdrop-blur-md rounded-[2rem] md:rounded-[3.5rem] border-2 md:border-4 border-white shadow-2xl shadow-blue-900/5 overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* LEFT SIDE: HELP PANEL (Hidden on Mobile for Compactness) */}
            <div className="hidden lg:flex lg:col-span-4 bg-blue-900 p-14 text-white flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 p-10 opacity-10 text-9xl pointer-events-none rotate-12">
                <FaWalking />
              </div>
              <div className="relative z-10">
                <span className="text-orange-500 font-black text-[10px] tracking-widest uppercase mb-4 block">
                  Stage 0{step}
                </span>
                <h2 className="text-3xl font-black tracking-tighter mb-6 uppercase leading-none">
                  {step === 1
                    ? "Destination"
                    : step === 2
                    ? "Logistics"
                    : "Experience"}
                </h2>
                <p className="text-blue-100/60 text-sm font-medium leading-relaxed">
                  Ensure all fields are filled for better reach.
                </p>
              </div>
            </div>

            {/* RIGHT SIDE: FORM FIELDS (Padding optimized for mobile) */}
            <div className="lg:col-span-8 p-5 md:p-16">
              <form onSubmit={(e) => e.preventDefault()}>
                <AnimatePresence mode="wait">
                  {step === 1 && (
                    <motion.div
                      key="s1"
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      className="space-y-4 md:space-y-6"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        <div className="md:col-span-2">
                          <label className={labelStyle}>
                            <FaWalking className="text-orange-500" /> Trip Name
                          </label>
                          <input
                            name="title"
                            placeholder="e.g. Spiti Valley Expedition"
                            className={inputStyle}
                            onChange={handleChange}
                          />
                        </div>
                        <div>
                          <label className={labelStyle}>
                            <FaMapMarkerAlt className="text-orange-500" /> State
                          </label>
                          <input
                            name="location"
                            placeholder="Uttarakhand"
                            className={inputStyle}
                            onChange={handleChange}
                          />
                        </div>
                        <div>
                          <label className={labelStyle}>
                            <FaMapMarkerAlt className="text-orange-500" /> Start
                            From
                          </label>
                          <input
                            name="startLocation"
                            placeholder="Delhi"
                            className={inputStyle}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="md:col-span-2">
                          <label className={labelStyle}>
                            <FaHotel className="text-orange-500" />{" "}
                            Accommodation Style
                          </label>
                          <select
                            name="stayType"
                            className={`${inputStyle} appearance-none`}
                            onChange={handleChange}
                          >
                            <option value="">Select Stay Type</option>
                            <option>Hotels</option>
                            <option>Resorts</option>
                            <option>Camps</option>
                          </select>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div
                      key="s2"
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      className="space-y-4 md:space-y-6"
                    >
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                        <div className="col-span-2">
                          <label className={labelStyle}>
                            <FaRupeeSign className="text-orange-500" /> Price
                          </label>
                          <input
                            name="pricePerPerson"
                            type="number"
                            placeholder="₹"
                            className={inputStyle}
                            onChange={handleChange}
                          />
                        </div>
                        <div>
                          <label className={labelStyle}>
                            <FaClock className="text-orange-500" /> Days
                          </label>
                          <input
                            name="days"
                            placeholder="D"
                            className={inputStyle}
                            onChange={handleDuration}
                          />
                        </div>
                        <div>
                          <label className={labelStyle}>
                            <FaClock className="text-orange-500" /> Nights
                          </label>
                          <input
                            name="nights"
                            placeholder="N"
                            className={inputStyle}
                            onChange={handleDuration}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className={labelStyle}>
                            <FaPlane className="text-orange-500" /> Transit Mode
                          </label>
                          <div className="flex gap-1.5 p-1 bg-slate-100 rounded-xl">
                            {["Flight", "Bus", "Train"].map((m) => (
                              <button
                                key={m}
                                type="button"
                                onClick={() => handleTravelVia(m)}
                                className={`flex-1 py-2 rounded-lg text-[9px] font-black transition-all ${
                                  trip.travelVia.includes(m)
                                    ? "bg-blue-900 text-white shadow-md"
                                    : "text-slate-400"
                                }`}
                              >
                                {m}
                              </button>
                            ))}
                          </div>
                        </div>
                        <div>
                          <label className={labelStyle}>
                            <FaUtensils className="text-orange-500" /> Meals
                          </label>
                          <div className="flex gap-1.5 p-1 bg-slate-100 rounded-xl">
                            {["B", "L", "D"].map((m) => (
                              <button
                                key={m}
                                type="button"
                                onClick={() => handleMeals(m.toLowerCase())}
                                className={`flex-1 py-2 rounded-lg text-[9px] font-black transition-all ${
                                  trip.meals[m.toLowerCase()]
                                    ? "bg-orange-500 text-white shadow-md"
                                    : "text-slate-400"
                                }`}
                              >
                                {m}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className={labelStyle}>
                            <FaCalendarAlt className="text-orange-500" /> Start
                            Date
                          </label>
                          <input
                            type="date"
                            name="startDate"
                            className={inputStyle}
                            onChange={handleChange}
                          />
                        </div>
                        <div>
                          <label className={labelStyle}>
                            <FaCalendarAlt className="text-orange-500" /> End
                            Date
                          </label>
                          <input
                            type="date"
                            name="endDate"
                            className={inputStyle}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {step === 3 && (
                    <motion.div
                      key="s3"
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      className="space-y-4 md:space-y-6"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className={labelStyle}>Inclusions</label>
                          <input
                            name="includes"
                            placeholder="Hotel, Meals..."
                            className={inputStyle}
                            onChange={handleChange}
                          />
                        </div>
                        <div>
                          <label className={labelStyle}>Mandatory</label>
                          <input
                            name="mandatoryItems"
                            placeholder="Shoes, ID..."
                            className={inputStyle}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <textarea
                        name="description"
                        placeholder="Sell the vibe..."
                        className={`${inputStyle} h-20 md:h-28 resize-none`}
                        onChange={handleChange}
                      />
                      <div className="bg-blue-50/50 p-4 md:p-6 rounded-2xl border-2 border-dashed border-blue-100">
                        <p className={labelStyle}>Plan</p>
                        {trip.itinerary.map((d, i) => (
                          <div key={i} className="flex gap-2 mb-2">
                            <span className="w-8 h-8 rounded-lg bg-blue-900 text-white flex items-center justify-center text-[10px] font-black shrink-0">
                              {d.day}
                            </span>
                            <input
                              placeholder="Day Plan Title"
                              className={inputStyle.replace("py-4", "py-2")}
                            />
                          </div>
                        ))}
                        <button
                          type="button"
                          onClick={() =>
                            setTrip({
                              ...trip,
                              itinerary: [
                                ...trip.itinerary,
                                { day: trip.itinerary.length + 1 },
                              ],
                            })
                          }
                          className="text-[9px] font-black text-blue-900 mt-1 uppercase flex items-center gap-2"
                        >
                          <FaPlus /> Add Day
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* --- NAVIGATION --- */}
                <div className="flex justify-between items-center mt-8 pt-6 border-t border-slate-100">
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={() => setStep(step - 1)}
                      className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2"
                    >
                      <FaArrowLeft /> Prev
                    </button>
                  ) : (
                    <div />
                  )}
                  <button
                    type="button"
                    onClick={
                      step < 3
                        ? () => setStep(step + 1)
                        : () => alert("Trip Live!")
                    }
                    className="bg-blue-900 text-white px-8 py-3.5 md:px-12 md:py-5 rounded-xl md:rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-xl flex items-center gap-3 hover:bg-orange-500 transition-all active:scale-95"
                  >
                    {step === 3 ? "Launch" : "Next"} <FaArrowRight />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CreateNewTrip;
