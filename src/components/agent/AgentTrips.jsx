import React from "react";
import { motion } from "framer-motion";
import { 
  FaPlus, 
  FaCalendarDays, 
  FaPenToSquare, 
  FaEye, 
  FaHashtag,
  FaLocationDot
} from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const trips = [
  { tid: "TRIP-201", place: "Vrindavan – Agra", date: "12 Feb 2026", totalSeats: 30, booked: 24, status: "Active", type: "Spiritual" },
  { tid: "TRIP-202", place: "Kedarnath Yatra", date: "25 Mar 2026", totalSeats: 40, booked: 40, status: "Full", type: "Trek" },
  { tid: "TRIP-203", place: "Manali Tour", date: "05 Apr 2026", totalSeats: 20, booked: 8, status: "Draft", type: "Leisure" },
];

const AgentTrips = () => {
    const navigate=useNavigate();
    
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 via-white to-sky-130 p-4 md:p-10 selection:bg-orange-500 selection:text-white">
      
      {/* --- HEADER --- */}
      <div className="max-w-7xl mx-auto mb-10 mt-20 md:mt-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
          <div className="flex items-center gap-2 mb-3">
            <div className="h-[2px] w-6 bg-orange-500"></div>
            <span className="text-blue-900 font-black tracking-[0.3em] uppercase text-[10px]">Inventory Manager</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-blue-900 tracking-tighter">
            ALL EXPEDITIONS<span className="text-orange-500">.</span>
          </h1>
        </motion.div>

        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={()=>navigate("/agent/CreateNewTrip")}
          className="flex items-center gap-3 bg-blue-900 text-white px-8 py-5 rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-orange-500 transition-all shadow-2xl shadow-blue-900/20"
        >
          <FaPlus className="text-sm" /> Create New Trip
        </motion.button>
      </div>

      {/* --- TRIPS TABLE --- */}
      <div className="max-w-7xl mx-auto">
        <div className="bg-white/50 backdrop-blur-md rounded-[2.5rem] border-4 border-white shadow-2xl shadow-blue-900/5 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-blue-900/5 text-blue-900 uppercase text-[10px] font-black tracking-[0.2em]">
                  <th className="p-6"><div className="flex items-center gap-2"><FaHashtag className="text-orange-500"/> TID</div></th>
                  <th className="p-6">Trip Details</th>
                  <th className="p-6">Departure Date</th>
                  <th className="p-6">Occupancy</th>
                  <th className="p-6 text-center">Status</th>
                  <th className="p-6 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-blue-50">
                {trips.map((trip, index) => {
                  const occupancyPerc = (trip.booked / trip.totalSeats) * 100;
                  
                  return (
                    <motion.tr 
                      key={trip.tid}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="hover:bg-white/80 transition-all group"
                    >
                      {/* TID */}
                      <td className="p-6">
                        <span className="font-mono text-[10px] font-bold text-blue-900 bg-blue-100/50 px-3 py-1.5 rounded-lg border border-blue-100 group-hover:bg-blue-900 group-hover:text-white transition-all">
                          {trip.tid}
                        </span>
                      </td>

                      {/* TRIP INFO */}
                      <td className="p-6">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-900 text-xl group-hover:bg-orange-500 group-hover:text-white transition-all">
                            <FaLocationDot />
                          </div>
                          <div>
                            <p className="font-bold text-blue-900 leading-tight">{trip.place}</p>
                            <span className="text-[8px] font-black uppercase tracking-widest text-orange-500">{trip.type}</span>
                          </div>
                        </div>
                      </td>

                      {/* DATE */}
                      <td className="p-6">
                        <div className="flex items-center gap-2 text-slate-500">
                          <FaCalendarDays className="text-blue-900/30 text-xs" />
                          <span className="text-sm font-bold text-blue-900">{trip.date}</span>
                        </div>
                      </td>

                      {/* OCCUPANCY BAR */}
                      <td className="p-6">
                        <div className="w-full max-w-[120px]">
                          <div className="flex justify-between text-[9px] font-black uppercase mb-1">
                            <span className="text-blue-900">{trip.booked} Booked</span>
                            <span className="text-slate-400">{trip.totalSeats} Slots</span>
                          </div>
                          <div className="h-1.5 w-full bg-blue-50 rounded-full overflow-hidden">
                            <motion.div 
                              initial={{ width: 0 }}
                              animate={{ width: `${occupancyPerc}%` }}
                              className={`h-full rounded-full ${
                                occupancyPerc >= 100 ? 'bg-red-400' : occupancyPerc >= 70 ? 'bg-orange-400' : 'bg-emerald-400'
                              }`}
                            />
                          </div>
                        </div>
                      </td>

                      {/* STATUS */}
                      <td className="p-6 text-center">
                        <span className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest ${
                          trip.status === 'Active' ? 'bg-emerald-100 text-emerald-600' : 
                          trip.status === 'Full' ? 'bg-red-50 text-red-500' : 'bg-slate-100 text-slate-400'
                        }`}>
                          {trip.status}
                        </span>
                      </td>

                      {/* ACTIONS */}
                      <td className="p-6 text-right">
                        <div className="flex justify-end gap-2">
                          <button onClick={() => navigate(`/agent/trips/view/${trip.id}`)} className="p-3 bg-blue-50 text-blue-900 rounded-xl hover:bg-blue-900 hover:text-white transition-all">
                            <FaEye className="text-xs" />
                          </button>
                          <button onClick={() => navigate(`/agent/trips/edit/${trip.id}`)} className="p-3 bg-blue-50 text-blue-900 rounded-xl hover:bg-orange-500 hover:text-white transition-all">
                            <FaPenToSquare className="text-xs" />
                          </button>
                        </div>
                      </td>
                    </motion.tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentTrips;