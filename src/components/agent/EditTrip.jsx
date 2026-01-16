import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPlane,
  FaBus,
  FaTrain,
  FaClock,
  FaUsers,
  FaRupeeSign,
  FaUtensils,
  FaInfoCircle,
  FaRoute,
  FaPlus,
  FaCheckCircle,
  FaArrowLeft,
  FaCalendarAlt,
  FaHotel,
  FaImage,
  FaListUl,
  FaCheckDouble,
  FaExclamationTriangle,
  FaTrash,
  FaSignOutAlt,
} from "react-icons/fa";

const EditTrip = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [trip, setTrip] = useState({
    title: "Kashmir Paradise Tour",
    location: "Jammu & Kashmir",
    startLocation: "Delhi",
    pricePerPerson: 18999,
    travelVia: ["Flight"],
    duration: { days: 6, nights: 5 },
    totalPeople: 20,
    startDate: "2026-04-15",
    endDate: "2026-04-20",
    stayType: "Hotel",
    description: "Explore heaven on earth – Kashmir.",
    meals: { breakfast: true, lunch: false, dinner: true },
    includes: ["Hotel", "Flight", "Sightseeing"],
    mandatoryItems: ["Warm Clothes"],
    itinerary: [
      { day: 1, title: "Arrival Srinagar", details: "Shikara ride." },
    ],
  });

  // --- HANDLERS (Same Logic) ---
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTrip((prev) => ({ ...prev, [name]: value }));
  };

  const handleDuration = (e) => {
    const { name, value } = e.target;
    setTrip((prev) => ({
      ...prev,
      duration: { ...prev.duration, [name]: value },
    }));
  };

  const handleMeals = (meal) => {
    setTrip((prev) => ({
      ...prev,
      meals: { ...prev.meals, [meal]: !prev.meals[meal] },
    }));
  };

  const handleTravelVia = (mode) => {
    setTrip((prev) => ({
      ...prev,
      travelVia: prev.travelVia.includes(mode)
        ? prev.travelVia.filter((m) => m !== mode)
        : [...prev.travelVia, mode],
    }));
  };

  const handleArrayUpdate = (field, index, value) => {
    const updated = [...trip[field]];
    updated[index] = value;
    setTrip({ ...trip, [field]: updated });
  };

  const handleItineraryChange = (index, field, value) => {
    const updated = [...trip.itinerary];
    updated[index][field] = value;
    setTrip({ ...trip, itinerary: updated });
  };

  const addArrayItem = (field) =>
    setTrip({ ...trip, [field]: [...trip[field], ""] });
  const removeArrayItem = (field, index) =>
    setTrip({ ...trip, [field]: trip[field].filter((_, i) => i !== index) });

  // Styles
  const inputStyle =
    "w-full bg-slate-50 border-2 border-slate-100 rounded-xl py-3 px-4 outline-none focus:border-orange-500 focus:bg-white transition-all text-sm text-blue-900 font-bold";
  const labelStyle =
    "text-[10px] font-black uppercase tracking-widest text-blue-900/60 mb-2 flex items-center gap-2 ml-1";
  const cardStyle =
    "bg-white rounded-[2.5rem] p-6 md:p-8 shadow-xl shadow-blue-900/5 border border-white";

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 via-white to-sky-130 p-4 md:p-10 selection:bg-orange-500">
      {/* HEADER */}
      <div className="max-w-6xl mx-auto mb-8 mt-16 md:mt-24 flex justify-between items-end">
        <div>
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-blue-900/40 font-black text-[10px] uppercase mb-4 tracking-widest"
          >
            <FaArrowLeft /> Inventory
          </button>
          <h1 className="text-4xl md:text-6xl font-black text-blue-900 tracking-tighter uppercase italic leading-none">
            Edit <span className="text-orange-500">Trip.</span>
          </h1>
          <p className="text-[10px] font-bold text-slate-400 mt-2 uppercase tracking-widest flex items-center gap-2">
            <FaSignOutAlt className="rotate-180" /> Master Control Panel / ID:{" "}
            {id}
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto space-y-8 pb-20">
        {/* SECTION 1: BASIC & DESCRIPTION */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div className={`${cardStyle} lg:col-span-2`}>
            <h2 className="text-blue-900 font-black mb-6 uppercase flex items-center gap-2">
              <FaInfoCircle className="text-orange-500" /> Core Logistics
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className={labelStyle}>
                  <FaListUl className="text-orange-500" /> Trip Title
                </label>
                <input
                  name="title"
                  value={trip.title}
                  onChange={handleChange}
                  className={inputStyle}
                />
              </div>
              <div className="md:col-span-2">
                <label className={labelStyle}>
                  <FaListUl className="text-orange-500" /> Description / Tagline
                </label>
                <textarea
                  name="description"
                  value={trip.description}
                  onChange={handleChange}
                  className={`${inputStyle} h-24 resize-none`}
                />
              </div>
            </div>
          </motion.div>

          <motion.div className={cardStyle}>
            <h2 className="text-blue-900 font-black mb-6 uppercase flex items-center gap-2">
              <FaImage className="text-orange-500" /> Visuals
            </h2>
            <div className="aspect-video bg-slate-100 rounded-3xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center text-slate-300 group hover:border-orange-500 cursor-pointer transition-all">
              <FaImage className="text-4xl mb-2 group-hover:text-orange-500" />
              <span className="text-[10px] font-black uppercase">
                Change Image
              </span>
            </div>
          </motion.div>
        </div>

        {/* SECTION 2: TRANSPORT, CAPACITY & DATES (COMPACTED) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className={cardStyle}>
            <label className={labelStyle}>
              <FaPlane className="text-orange-500" /> Travel Via
            </label>
            <div className="flex gap-2">
              {[
                { id: "Flight", i: <FaPlane /> },
                { id: "Bus", i: <FaBus /> },
                { id: "Train", i: <FaTrain /> },
              ].map((m) => (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => handleTravelVia(m.id)}
                  className={`flex-1 p-3 rounded-xl flex flex-col items-center gap-1 transition-all ${
                    trip.travelVia.includes(m.id)
                      ? "bg-blue-900 text-white shadow-lg"
                      : "bg-slate-50 text-slate-400"
                  }`}
                >
                  {m.i}{" "}
                  <span className="text-[8px] font-black uppercase">
                    {m.id}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className={cardStyle}>
            <label className={labelStyle}>
              <FaUsers className="text-orange-500" /> Group & Price
            </label>
            <div className="flex gap-2">
              <div className="relative w-full">
                <FaUsers className="absolute left-3 top-4 text-slate-300 text-xs" />
                <input
                  name="totalPeople"
                  type="number"
                  value={trip.totalPeople}
                  onChange={handleChange}
                  className={`${inputStyle} pl-8`}
                  placeholder="People"
                />
              </div>
              <div className="relative w-full">
                <FaRupeeSign className="absolute left-3 top-4 text-slate-300 text-xs" />
                <input
                  name="pricePerPerson"
                  type="number"
                  value={trip.pricePerPerson}
                  onChange={handleChange}
                  className={`${inputStyle} pl-8`}
                  placeholder="Price"
                />
              </div>
            </div>
          </div>

          <div className={cardStyle}>
            <label className={labelStyle}>
              <FaCalendarAlt className="text-orange-500" /> Trip Duration Window
            </label>
            <div className="flex items-center bg-slate-50 rounded-xl px-2 border-2 border-slate-100 focus-within:border-orange-500 transition-all">
              <input
                name="startDate"
                type="date"
                value={trip.startDate}
                onChange={handleChange}
                className="w-full bg-transparent p-2 text-[10px] font-bold outline-none text-blue-900"
              />
              <div className="h-4 w-[2px] bg-slate-200 mx-1"></div>
              <input
                name="endDate"
                type="date"
                value={trip.endDate}
                onChange={handleChange}
                className="w-full bg-transparent p-2 text-[10px] font-bold outline-none text-blue-900"
              />
            </div>
          </div>
        </div>

        {/* SECTION 3: STAY & MEALS + DURATION (COMPACTED) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className={cardStyle}>
            <h2 className="text-blue-900 font-black mb-4 uppercase flex items-center gap-2">
              <FaHotel className="text-orange-500" /> Stay & Meals
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative">
                <FaHotel className="absolute left-3 top-4 text-slate-400 text-xs z-10" />
                <select
                  name="stayType"
                  value={trip.stayType}
                  onChange={handleChange}
                  className={`${inputStyle} pl-8 appearance-none`}
                >
                  <option value="Hotel">Standard Hotel</option>
                  <option value="Resort">Luxury Resort</option>
                  <option value="Camp">Adventure Camp</option>
                </select>
              </div>
              <div className="flex justify-around items-center bg-slate-50 p-2 rounded-xl border-2 border-slate-100">
                {["breakfast", "lunch", "dinner"].map((m) => (
                  <button
                    key={m}
                    type="button"
                    onClick={() => handleMeals(m)}
                    className={`flex flex-col items-center gap-1 transition-all ${
                      trip.meals[m]
                        ? "text-orange-500 scale-110"
                        : "text-slate-300 opacity-50"
                    }`}
                  >
                    <FaUtensils className="text-xs" />
                    <span className="text-[7px] font-black uppercase">{m}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className={cardStyle}>
            <label className={labelStyle}>
              <FaClock className="text-orange-500" /> Duration Breakdown
            </label>
            <div className="flex gap-4">
              <div className="flex-1 relative">
                <span className="absolute right-4 top-3.5 text-[10px] font-black text-slate-300 uppercase">
                  Days
                </span>
                <input
                  name="days"
                  value={trip.duration.days}
                  onChange={handleDuration}
                  className={inputStyle}
                />
              </div>
              <div className="flex-1 relative">
                <span className="absolute right-4 top-3.5 text-[10px] font-black text-slate-300 uppercase">
                  Nights
                </span>
                <input
                  name="nights"
                  value={trip.duration.nights}
                  onChange={handleDuration}
                  className={inputStyle}
                />
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 4: INCLUDES & MANDATORY */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className={cardStyle}>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-blue-900 font-black uppercase flex items-center gap-2">
                <FaCheckDouble className="text-orange-500" /> Inclusions
              </h2>
              <button
                type="button"
                onClick={() => addArrayItem("includes")}
                className="w-8 h-8 flex items-center justify-center bg-blue-50 text-blue-900 rounded-lg hover:bg-orange-500 hover:text-white transition-all"
              >
                <FaPlus className="text-xs" />
              </button>
            </div>
            {trip.includes.map((item, i) => (
              <div key={i} className="flex gap-2 mb-2 group">
                <div className="flex-1 relative">
                  <FaCheckCircle className="absolute left-3 top-4 text-orange-500/30 text-xs" />
                  <input
                    value={item}
                    onChange={(e) =>
                      handleArrayUpdate("includes", i, e.target.value)
                    }
                    className={`${inputStyle} pl-8`}
                  />
                </div>
                <button
                  type="button"
                  onClick={() => removeArrayItem("includes", i)}
                  className="text-red-300 hover:text-red-500 px-2"
                >
                  <FaTrash />
                </button>
              </div>
            ))}
          </div>

          <div className={cardStyle}>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-blue-900 font-black uppercase flex items-center gap-2">
                <FaExclamationTriangle className="text-orange-500" /> Mandatory
              </h2>
              <button
                type="button"
                onClick={() => addArrayItem("mandatoryItems")}
                className="w-8 h-8 flex items-center justify-center bg-blue-50 text-blue-900 rounded-lg hover:bg-orange-500 hover:text-white transition-all"
              >
                <FaPlus className="text-xs" />
              </button>
            </div>
            {trip.mandatoryItems.map((item, i) => (
              <div key={i} className="flex gap-2 mb-2 group">
                <div className="flex-1 relative">
                  <FaExclamationTriangle className="absolute left-3 top-4 text-orange-500/30 text-xs" />
                  <input
                    value={item}
                    onChange={(e) =>
                      handleArrayUpdate("mandatoryItems", i, e.target.value)
                    }
                    className={`${inputStyle} pl-8`}
                  />
                </div>
                <button
                  type="button"
                  onClick={() => removeArrayItem("mandatoryItems", i)}
                  className="text-red-300 hover:text-red-500 px-2"
                >
                  <FaTrash />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 5: ITINERARY */}
        <motion.div className={cardStyle}>
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-blue-900 font-black uppercase flex items-center gap-2 text-xl tracking-tighter">
              <FaRoute className="text-orange-500" /> Expedition Timeline
            </h2>
            <button
              type="button"
              onClick={() =>
                setTrip({
                  ...trip,
                  itinerary: [
                    ...trip.itinerary,
                    { day: trip.itinerary.length + 1, title: "", details: "" },
                  ],
                })
              }
              className="bg-blue-900 text-white px-6 py-2 rounded-xl text-[10px] font-black uppercase flex items-center gap-2 hover:bg-orange-500 transition-all shadow-lg shadow-blue-900/20"
            >
              <FaPlus /> Add Day
            </button>
          </div>
          <div className="space-y-4">
            {trip.itinerary.map((day, i) => (
              <div
                key={i}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 bg-slate-50 rounded-3xl border border-blue-50 relative group hover:border-orange-200 transition-all"
              >
                <div className="md:col-span-1 flex items-center justify-center">
                  <div className="w-10 h-10 bg-white border-2 border-blue-900 text-blue-900 rounded-2xl flex items-center justify-center font-black italic shadow-sm">
                    D{day.day}
                  </div>
                </div>
                <div className="md:col-span-3">
                  <input
                    value={day.title}
                    onChange={(e) =>
                      handleItineraryChange(i, "title", e.target.value)
                    }
                    className={inputStyle}
                    placeholder="Activity Title"
                  />
                </div>
                <div className="md:col-span-7">
                  <div className="relative">
                    <FaMapMarkerAlt className="absolute left-3 top-4 text-slate-300 text-xs" />
                    <input
                      value={day.details}
                      onChange={(e) =>
                        handleItineraryChange(i, "details", e.target.value)
                      }
                      className={`${inputStyle} pl-8`}
                      placeholder="Describe the day's journey..."
                    />
                  </div>
                </div>
                <div className="md:col-span-1 flex items-center justify-center">
                  <button
                    type="button"
                    onClick={() =>
                      setTrip({
                        ...trip,
                        itinerary: trip.itinerary.filter((_, idx) => idx !== i),
                      })
                    }
                    className="w-10 h-10 flex items-center justify-center text-red-400 hover:bg-red-50 rounded-xl transition-all"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* SAVE BUTTON */}
        <div className="flex flex-col md:flex-row gap-4 justify-end pt-10">
          <button
            onClick={() => navigate(-1)}
            className="px-10 py-5 text-[10px] font-black uppercase text-slate-400 hover:text-red-500 transition-all tracking-[0.2em]"
          >
            Discard Changes
          </button>
          <button
            type="button"
            onClick={() => {
              console.log("Updating:", trip);
              alert("Trip Synchronized!");
            }}
            className="bg-blue-900 text-white px-16 py-5 rounded-3xl font-black uppercase text-[10px] tracking-[0.4em] shadow-2xl hover:bg-orange-500 transition-all flex items-center gap-3"
          >
            Deploy Updates <FaCheckCircle />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditTrip;
