import React from "react";
import { motion } from "framer-motion";
import { 
  FaSearch, 
  FaFilter, 
  FaDownload, 
  FaEye, 
  FaUserCircle, 
  FaHashtag, 
  FaCalendarAlt 
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const bookings = [
  { uid: "CUST-8821", customer: "Rahul Sharma", email: "rahul@example.com", trip: "Vrindavan – Agra", Tripdate: "12 Feb 2026", seats: 2, amount: "₹4,998", payment: "Paid", status: "Confirmed" },
  { uid: "CUST-4410", customer: "Sneha Kapoor", email: "sneha@example.com", trip: "Kedarnath Yatra", Tripdate: "25 Mar 2026", seats: 4, amount: "₹24,500", payment: "Pending", status: "In Process" },
  { uid: "CUST-1209", customer: "Amit Verma", email: "amit@example.com", trip: "Manali Tour", Tripdate: "05 Apr 2026", seats: 1, amount: "₹6,200", payment: "Paid", status: "Confirmed" },
];

const AgentActiveBookings = () => {
    const navigate=useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 via-white to-sky-130 p-4 md:p-10 selection:bg-orange-500 selection:text-white">
      
      {/* --- HEADER SECTION --- */}
      <div className="max-w-7xl mx-auto mb-10 mt-20 md:mt-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
          <div className="flex items-center gap-2 mb-3">
            <div className="h-[2px] w-6 bg-orange-500"></div>
            <span className="text-blue-900 font-black tracking-[0.3em] uppercase text-[10px]">Reservations</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-blue-900 tracking-tighter">
            ACTIVE BOOKINGS<span className="text-orange-500">.</span>
          </h1>
        </motion.div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <button className="p-4 bg-white rounded-2xl text-blue-900 shadow-sm hover:shadow-md transition-all border border-blue-50">
            <FaDownload className="text-sm" />
          </button>
          <button className="flex items-center gap-2 bg-blue-900 text-white px-6 py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-orange-500 transition-all shadow-lg shadow-blue-900/10">
            <FaFilter /> Filter
          </button>
        </div>
      </div>

      {/* --- SEARCH BAR --- */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="relative max-w-md">
          <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />
          <input 
            type="text" 
            placeholder="Search UID, customer or trip..." 
            className="w-full bg-white border-none rounded-2xl py-4 pl-12 pr-6 text-sm shadow-sm focus:ring-2 focus:ring-orange-500 outline-none transition-all"
          />
        </div>
      </div>

      {/* --- BOOKINGS TABLE --- */}
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
                  <th className="p-6">Customer Details</th>
                  <th className="p-6">Destination</th>
                  <th className="p-6 text-center">Seats</th>
                  <th className="p-6">Payment</th>
                  <th className="p-6">Status</th>
                  <th className="p-6 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-blue-50">
                {bookings.map((booking, index) => (
                  <motion.tr 
                    key={booking.uid}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="hover:bg-white/80 transition-colors group"
                  >
                    {/* UID COLUMN */}
                    <td className="p-6">
                      <span className="font-mono text-[11px] font-bold text-blue-900 bg-blue-100/50 px-3 py-1.5 rounded-lg border border-blue-100 group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500 transition-all duration-300">
                        {booking.uid}
                      </span>
                    </td>

                    {/* CUSTOMER COLUMN */}
                    <td className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-blue-900 text-white rounded-full flex items-center justify-center shadow-md">
                          <FaUserCircle className="text-2xl" />
                        </div>
                        <div>
                          <p className="font-bold text-blue-900 leading-tight">{booking.customer}</p>
                          <p className="text-[10px] text-slate-400 font-medium">{booking.email}</p>
                        </div>
                      </div>
                    </td>

                    {/* DESTINATION COLUMN */}
                    <td className="p-6">
                      <p className="font-bold text-blue-900 leading-tight">{booking.trip}</p>
                      <div className="flex items-center gap-1 mt-1 text-orange-500">
                        <FaCalendarAlt className="text-[8px]" />
                        <p className="text-[10px] font-black uppercase tracking-widest">{booking.Tripdate}</p>
                      </div>
                    </td>

                    {/* SEATS COLUMN */}
                    <td className="p-6 text-center">
                      <span className="inline-block w-8 h-8 rounded-full bg-slate-100  items-center justify-center font-black text-blue-900 text-xs">
                        {booking.seats}
                      </span>
                    </td>

                    {/* PAYMENT COLUMN */}
                    <td className="p-6">
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-blue-900">{booking.amount}</span>
                        <span className={`text-[9px] font-black uppercase tracking-tighter ${booking.payment === 'Paid' ? 'text-emerald-500' : 'text-amber-500'}`}>
                          {booking.payment}
                        </span>
                      </div>
                    </td>

                    {/* STATUS COLUMN */}
                    <td className="p-6">
                      <span className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest ${
                        booking.status === 'Confirmed' ? 'bg-emerald-100 text-emerald-600' : 'bg-blue-50 text-blue-400'
                      }`}>
                        {booking.status}
                      </span>
                    </td>

                    {/* ACTION COLUMN */}
                    <td className="p-6 text-right">
                      <button  onClick={() => navigate(`/agent/bookings/${booking.uid}`)} className="p-3 bg-blue-50 text-blue-900 rounded-xl hover:bg-orange-500 hover:text-white transition-all shadow-sm">
                        <FaEye />
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

export default AgentActiveBookings;