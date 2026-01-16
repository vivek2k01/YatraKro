import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FaEye,
  FaMoneyBill1Wave,
  FaUser,
  FaHashtag,
  FaPhone,
  FaCircleExclamation,
  FaArrowRotateLeft,
} from "react-icons/fa6";

const refundBookings = [
  {
    bookingId: "BK-8821",
    userId: "U-101",
    name: "Rahul Sharma",
    phone: "9876543210",
    paymentMode: "UPI",
    status: "Cancelled",
    refundStatus: "Pending",
  },
  {
    bookingId: "BK-9012",
    userId: "U-118",
    name: "Sneha Kapoor",
    phone: "9123456789",
    paymentMode: "Card",
    status: "Cancelled",
    refundStatus: "Initiated",
  },
  {
    bookingId: "BK-7741",
    userId: "U-133",
    name: "Amit Verma",
    phone: "9988776655",
    paymentMode: "Cash",
    status: "Cancelled",
    refundStatus: "Completed",
  },
];

const AgentRefunds = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 via-white to-sky-130 p-4 md:p-10 selection:bg-orange-500 selection:text-white">
      <div className="max-w-7xl mx-auto">
        {/* --- HEADER --- */}
        <div className="mb-10 mt-20 md:mt-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="h-[2px] w-6 bg-orange-500"></div>
              <span className="text-blue-900 font-black tracking-[0.3em] uppercase text-[10px]">
                Financial Returns
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-blue-900 tracking-tighter uppercase italic leading-none">
              Refund <span className="text-orange-500">Pipeline.</span>
            </h1>
          </motion.div>
        </div>

        {/* --- TABLE CONTAINER --- */}
        <div className="bg-white/50 backdrop-blur-md rounded-[2.5rem] border-4 border-white shadow-2xl shadow-blue-900/5 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-blue-900/5 text-blue-900 uppercase text-[10px] font-black tracking-[0.2em]">
                  <th className="p-6">Booking Details</th>
                  <th className="p-6">User Identity</th>
                  <th className="p-6">Contact Info</th>
                  <th className="p-6">Payment Mode</th>
                  <th className="p-6">Refund Status</th>
                  <th className="p-6 text-right">Action</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-blue-50">
                {refundBookings.map((b, index) => (
                  <motion.tr
                    key={b.bookingId}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ backgroundColor: "rgba(255,255,255,0.8)" }}
                    className="transition-all group"
                  >
                    {/* BOOKING ID */}
                    <td className="p-6">
                      <div className="flex flex-col">
                        <span className="bg-blue-900 text-white px-3 py-1 rounded-lg font-mono text-[10px] font-bold w-fit shadow-lg shadow-blue-900/20 group-hover:bg-orange-500 transition-colors">
                          <FaHashtag className="inline mr-1 text-[8px]" />
                          {b.bookingId}
                        </span>
                        <span className="text-[9px] font-black text-slate-400 mt-2 uppercase tracking-widest italic">
                          Action Required
                        </span>
                      </div>
                    </td>

                    {/* USER */}
                    <td className="p-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white border-2 border-blue-50 text-blue-900 rounded-2xl flex items-center justify-center shadow-sm group-hover:border-orange-200 transition-all">
                          <FaUser className="text-sm" />
                        </div>
                        <div>
                          <p className="font-black text-blue-900 uppercase italic tracking-tighter leading-tight">
                            {b.name}
                          </p>
                          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tight">
                            ID: {b.userId}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* CONTACT */}
                    <td className="p-6">
                      <div className="flex items-center gap-2 text-slate-500 font-bold text-sm">
                        <div className="p-1.5 bg-blue-50 rounded-lg text-blue-900">
                          <FaPhone className="text-[10px]" />
                        </div>
                        {b.phone}
                      </div>
                    </td>

                    {/* PAYMENT */}
                    <td className="p-6">
                      <div className="flex items-center gap-2 text-blue-900 font-black text-[10px] uppercase tracking-widest">
                        <FaMoneyBill1Wave className="text-orange-500 text-sm" />
                        {b.paymentMode}
                      </div>
                    </td>

                    {/* STATUS */}
                    <td className="p-6">
                      <div className="flex flex-col gap-1">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest bg-red-50 text-red-600 border border-red-100 w-fit">
                          <FaCircleExclamation className="text-[8px]" />
                          Cancelled
                        </span>
                        {/* Improved Logic: Dynamic Refund Status Color */}
                        <span
                          className={`text-[8px] font-black uppercase ml-1 tracking-tighter ${
                            b.refundStatus === "Completed"
                              ? "text-emerald-500"
                              : "text-orange-500"
                          }`}
                        >
                          • Refund {b.refundStatus}
                        </span>
                      </div>
                    </td>

                    {/* ACTION */}
                    <td className="p-6 text-right">
                      <motion.button
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() =>
                          navigate(`/agent/bookings/${b.bookingId}`)
                        }
                        className="p-3.5 bg-blue-900 text-white rounded-2xl hover:bg-orange-500 transition-all shadow-xl shadow-blue-900/10"
                      >
                        <FaEye className="text-sm" />
                      </motion.button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* --- EMPTY STATE --- */}
        {refundBookings.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 bg-white/30 rounded-[2.5rem] mt-10 border-4 border-dashed border-white/50"
          >
            <FaArrowRotateLeft className="mx-auto text-4xl text-blue-900/20 mb-4" />
            <p className="text-blue-900 font-black uppercase tracking-[0.2em] text-xs">
              Clear Skies! No Pending Refunds.
            </p>
          </motion.div>
        )}

        {/* FOOTER TEXT */}
        <p className="text-center mt-10 text-[9px] font-black text-slate-400 uppercase tracking-[0.4em]">
          YatraKro Merchant Settlement Protocol v2.0
        </p>
      </div>
    </div>
  );
};

export default AgentRefunds;
