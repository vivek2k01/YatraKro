import React from "react";
import { motion } from "framer-motion";
import {
  FaSearch,
  FaUserCircle,
  FaHashtag,
  FaPhoneAlt,
  FaEnvelope,
  FaCrown,
  FaHistory,
} from "react-icons/fa";

const customers = [
  {
    uid: "CUST-8821",
    name: "Rahul Sharma",
    phone: "+91 98765-43210",
    email: "rahul@example.com",
    totalTrips: 3,
    lastTrip: "Vrindavan",
    tier: "Gold",
  },
  {
    uid: "CUST-4410",
    name: "Sneha Kapoor",
    phone: "+91 88223-34455",
    email: "sneha@example.com",
    totalTrips: 1,
    lastTrip: "Kedarnath",
    tier: "Silver",
  },
  {
    uid: "CUST-1209",
    name: "Amit Verma",
    phone: "+91 77665-54433",
    email: "amit@example.com",
    totalTrips: 8,
    lastTrip: "Manali",
    tier: "Platinum",
  },
];

const AgentCustomers = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 via-white to-sky-130 p-4 md:p-10 selection:bg-orange-500 selection:text-white">
      {/* --- HEADER --- */}
      <div className="max-w-7xl mx-auto mb-10 mt-20 md:mt-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <div className="flex items-center gap-2 mb-3">
            <div className="h-[2px] w-6 bg-orange-500"></div>
            <span className="text-blue-900 font-black tracking-[0.3em] uppercase text-[10px]">
              Relationship Manager
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-blue-900 tracking-tighter">
            MY CUSTOMERS<span className="text-orange-500">.</span>
          </h1>
        </motion.div>

        <div className="flex items-center gap-3">
          <div className="relative">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xs" />
            <input
              type="text"
              placeholder="Search by name or UID..."
              className="bg-white border-none rounded-2xl py-3 pl-10 pr-6 text-xs shadow-sm focus:ring-2 focus:ring-orange-500 outline-none w-64 transition-all"
            />
          </div>
        </div>
      </div>

      {/* --- CUSTOMER TABLE --- */}
      <div className="max-w-7xl mx-auto">
        <div className="bg-white/50 backdrop-blur-md rounded-[2.5rem] border-4 border-white shadow-2xl shadow-blue-900/5 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-blue-900/5 text-blue-900 uppercase text-[10px] font-black tracking-[0.2em]">
                  <th className="p-6">
                    <div className="flex items-center gap-2">
                      <FaHashtag className="text-orange-500" /> UID
                    </div>
                  </th>
                  <th className="p-6">Customer</th>
                  <th className="p-6">Contact Details</th>
                  <th className="p-6 text-center">Total Trips</th>
                  <th className="p-6">Latest Destination</th>
                  <th className="p-6 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-blue-50">
                {customers.map((cust, index) => (
                  <motion.tr
                    key={cust.uid}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="hover:bg-white/80 transition-all group"
                  >
                    {/* UID */}
                    <td className="p-6">
                      <span className="font-mono text-[10px] font-bold text-blue-900 bg-blue-100/50 px-3 py-1.5 rounded-lg border border-blue-100 group-hover:bg-blue-900 group-hover:text-white transition-all">
                        {cust.uid}
                      </span>
                    </td>

                    {/* NAME & TIER */}
                    <td className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-blue-900 group-hover:bg-orange-500 group-hover:text-white transition-all">
                          <FaUserCircle className="text-2xl" />
                        </div>
                        <div>
                          <p className="font-bold text-blue-900 leading-tight flex items-center gap-2">
                            {cust.name}
                            {cust.tier === "Platinum" && (
                              <FaCrown className="text-orange-500 text-xs" />
                            )}
                          </p>
                          <span
                            className={`text-[8px] font-black uppercase tracking-widest ${
                              cust.tier === "Platinum"
                                ? "text-purple-600"
                                : cust.tier === "Gold"
                                ? "text-orange-500"
                                : "text-slate-400"
                            }`}
                          >
                            {cust.tier} Member
                          </span>
                        </div>
                      </div>
                    </td>

                    {/* CONTACT */}
                    <td className="p-6">
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2 text-slate-500 text-xs">
                          <FaPhoneAlt className="text-[10px] text-blue-900/30" />{" "}
                          {cust.phone}
                        </div>
                        <div className="flex items-center gap-2 text-slate-400 text-[10px]">
                          <FaEnvelope className="text-[10px] text-blue-900/30" />{" "}
                          {cust.email}
                        </div>
                      </div>
                    </td>

                    {/* TRIPS COUNT */}
                    <td className="p-6 text-center">
                      <span className="inline-block px-4 py-1 bg-blue-50 text-blue-900 rounded-full font-black text-xs">
                        {cust.totalTrips}
                      </span>
                    </td>

                    {/* LAST TRIP */}
                    <td className="p-6">
                      <div className="flex items-center gap-2">
                        <FaHistory className="text-orange-500 text-[10px]" />
                        <span className="text-sm font-bold text-blue-900">
                          {cust.lastTrip}
                        </span>
                      </div>
                    </td>

                    {/* ACTION */}
                    <td className="p-6 text-right">
                      <button className="px-6 py-2 bg-blue-900 text-white rounded-xl font-black uppercase text-[9px] tracking-widest hover:bg-orange-500 transition-all shadow-md shadow-blue-900/10">
                        View Profile
                      </button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentCustomers;
