import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaSearch,
  FaUserCircle,
  FaHashtag,
  FaPhoneAlt,
  FaArrowLeft,
  FaCrown,
  FaCalendarAlt,
  FaCreditCard,
  FaUsers,
  FaCircle,
} from "react-icons/fa";

const ViewTripBookings = () => {
  const { tripId } = useParams();
  const navigate = useNavigate();

  // Mock Data
  const bookings = [
    {
      bookingId: "BK1001",
      userId: "U201",
      name: "Rahul Sharma",
      phone: "+91 98765-43210",
      persons: 2,
      paymentStatus: "Paid",
      bookingDate: "2026-02-01",
    },
    {
      bookingId: "BK1002",
      userId: "U208",
      name: "Pooja Verma",
      phone: "+91 91234-56789",
      persons: 4,
      paymentStatus: "Pending",
      bookingDate: "2026-02-03",
    },
    {
      bookingId: "BK1003",
      userId: "U215",
      name: "Amit Jain",
      phone: "+91 99887-76655",
      persons: 1,
      paymentStatus: "Cancelled",
      bookingDate: "2026-02-05",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 via-white to-sky-100 p-4 md:p-10 selection:bg-orange-500 selection:text-white">
      {/* --- HEADER (Agent Style) --- */}
      <div className="max-w-7xl mx-auto mb-10 mt-20 md:mt-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-blue-900/40 font-black text-[10px] uppercase mb-4 tracking-widest hover:text-orange-500 transition-all"
          >
            <FaArrowLeft /> Back to Inventory
          </button>
          <div className="flex items-center gap-2 mb-3">
            <div className="h-[2px] w-6 bg-orange-500"></div>
            <span className="text-blue-900 font-black tracking-[0.3em] uppercase text-[10px]">
              Inventory Manager / Trip ID: {tripId}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-blue-900 tracking-tighter uppercase italic">
            Passanger <span className="text-orange-500">Manifest.</span>
          </h1>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-4">
          {/* SEARCH BAR */}
          <div className="relative">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xs" />
            <input
              type="text"
              placeholder="Find booking or name..."
              className="bg-white border-none rounded-2xl py-3 pl-10 pr-6 text-xs shadow-sm focus:ring-2 focus:ring-orange-500 outline-none w-64 transition-all"
            />
          </div>
          {/* TOTAL BADGE */}
          <div className="bg-blue-900 text-white px-6 py-3 rounded-2xl flex items-center gap-3 shadow-xl shadow-blue-900/20">
            <FaUsers className="text-orange-500" />
            <span className="text-[10px] font-black uppercase tracking-widest">
              Total: {bookings.length}
            </span>
          </div>
        </div>
      </div>

      {/* --- BOOKING TABLE (Agent Style) --- */}
      <div className="max-w-7xl mx-auto">
        <div className="bg-white/50 backdrop-blur-md rounded-[2.5rem] border-4 border-white shadow-2xl shadow-blue-900/5 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-blue-900/5 text-blue-900 uppercase text-[10px] font-black tracking-[0.2em]">
                  <th className="p-6">
                    <div className="flex items-center gap-2">
                      <FaHashtag className="text-orange-500" /> Booking ID
                    </div>
                  </th>
                  <th className="p-6">Passenger</th>
                  <th className="p-6">Contact</th>
                  <th className="p-6 text-center">Group Size</th>
                  <th className="p-6">Payment status</th>
                  <th className="p-6 text-right">Booking Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-blue-50">
                {bookings.map((b, index) => (
                  <motion.tr
                    key={b.bookingId}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="hover:bg-white/80 transition-all group"
                  >
                    {/* BOOKING ID */}
                    <td className="p-6">
                      <div className="flex flex-col gap-1">
                        <span className="font-mono text-[10px] font-bold text-blue-900 bg-blue-100/50 px-3 py-1.5 rounded-lg border border-blue-100 group-hover:bg-blue-900 group-hover:text-white transition-all w-fit">
                          {b.bookingId}
                        </span>
                        <span className="text-[8px] font-black text-slate-400 ml-1">
                          UID: {b.userId}
                        </span>
                      </div>
                    </td>

                    {/* NAME & ICON */}
                    <td className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-blue-900 group-hover:bg-orange-500 group-hover:text-white transition-all">
                          <FaUserCircle className="text-2xl" />
                        </div>
                        <div>
                          <p className="font-bold text-blue-900 leading-tight uppercase italic">
                            {b.name}
                          </p>
                          <span className="text-[8px] font-black uppercase text-slate-400 tracking-widest">
                            Verified Passenger
                          </span>
                        </div>
                      </div>
                    </td>

                    {/* CONTACT */}
                    <td className="p-6">
                      <div className="flex items-center gap-2 text-slate-500 text-xs font-bold">
                        <FaPhoneAlt className="text-[10px] text-orange-500" />
                        {b.phone}
                      </div>
                    </td>

                    {/* SEATS */}
                    <td className="p-6 text-center">
                      <span className="inline-block px-4 py-1 bg-blue-900 text-white rounded-full font-black text-[10px] italic">
                        x{b.persons} SEATS
                      </span>
                    </td>

                    {/* PAYMENT STATUS */}
                    <td className="p-6">
                      <div
                        className={`flex items-center gap-2 text-[10px] font-black uppercase tracking-tighter ${
                          b.paymentStatus === "Paid"
                            ? "text-green-600"
                            : b.paymentStatus === "Cancelled"
                            ? "text-red-600"
                            : "text-orange-500"
                        }`}
                      >
                        <FaCreditCard className="text-xs" />

                        {b.paymentStatus}

                        <FaCircle
                          className={`text-[6px] animate-pulse ${
                            b.paymentStatus === "Paid"
                              ? "text-green-400"
                              : b.paymentStatus === "Cancelled"
                              ? "text-red-400"
                              : "text-orange-400"
                          }`}
                        />
                      </div>
                    </td>

                    {/* BOOKING DATE */}
                    <td className="p-6 text-right">
                      <div className="flex items-center justify-end gap-2 text-blue-900/40 font-bold text-[10px]">
                        <FaCalendarAlt className="text-orange-500 text-[10px]" />
                        {b.bookingDate}
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* EMPTY STATE */}
          {bookings.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">
                No active bookings found.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* FOOTER ACTION */}
      <div className="max-w-7xl mx-auto mt-10 flex justify-end">
        <button className="flex items-center gap-3 px-8 py-4 bg-white border-2 border-slate-100 rounded-2xl font-black text-[10px] uppercase tracking-widest text-blue-900 hover:border-orange-500 transition-all shadow-xl shadow-blue-900/5">
          <FaCrown className="text-orange-500" /> Download Manifest PDF
        </button>
      </div>
    </div>
  );
};

export default ViewTripBookings;
