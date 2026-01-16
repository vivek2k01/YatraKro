import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
// Fixed Imports: Using FaCalendarDays instead of FaCalendarAlt
import { 
 FaUser, 
  FaMapLocationDot, // Changed from FaMapMarkedAlt
  FaCalendarDays, 
  FaIndianRupeeSign, 
  FaCircleCheck, 
  FaArrowLeft,
  FaEnvelope,
  FaPhone,
  FaUsers,
} from "react-icons/fa6";

const BookingDetails = () => {
  const { bookingId } = useParams();
  const navigate = useNavigate();

  // TEMP DATA
  const booking = {
    bookingId: bookingId || "BK-77210",
    customer: "Rahul Sharma",
    email: "rahul@example.com",
    phone: "+91 98765-43210",
    trip: "Vrindavan – Agra Expedition",
    bookingDate: "12 Feb 2026",
    travelDate: "15 Feb 2026",
    persons: 2,
    amount: "4,998",
    paymentStatus: "Paid",
    status: "Confirmed",
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 via-white to-sky-130 p-4 md:p-10">
      
      {/* HEADER SECTION */}
      <div className="max-w-4xl mx-auto mb-8 mt-20 md:mt-24">
        <motion.button 
          onClick={() => navigate(-1)}
          whileHover={{ x: -5 }}
          className="flex items-center gap-2 text-blue-900 font-black uppercase text-[10px] tracking-widest mb-6 bg-white/50 px-4 py-2 rounded-full border border-white"
        >
          <FaArrowLeft /> Back to List
        </motion.button>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="flex items-center gap-2 mb-2">
            <div className="h-[2px] w-6 bg-orange-500"></div>
            <span className="text-blue-900 font-black tracking-[0.3em] uppercase text-[10px]">Booking Intelligence</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <h1 className="text-4xl md:text-5xl font-black text-blue-900 tracking-tighter uppercase italic">
              <span className="text-orange-500 font-mono not-italic mr-2">#</span>{booking.bookingId}
            </h1>
            <div className="flex items-center gap-2 px-5 py-2 rounded-2xl bg-emerald-50 border-2 border-white shadow-sm">
              <FaCircleCheck className="text-emerald-500 text-xs" />
              <span className="text-[10px] font-black uppercase text-emerald-600 tracking-widest">{booking.status}</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* DETAILS CARD */}
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white/60 backdrop-blur-xl rounded-[2.5rem] border-4 border-white shadow-2xl shadow-blue-900/5 p-6 md:p-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Customer Info */}
            <div className="space-y-4">
              <label className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                <FaUser className="text-blue-900" /> Traveler Profile
              </label>
              <div className="bg-white p-6 rounded-3xl border border-blue-50">
                <p className="text-2xl font-black text-blue-900 italic uppercase tracking-tight">{booking.customer}</p>
                <div className="mt-3 space-y-1">
                  <p className="flex items-center gap-2 text-xs font-bold text-slate-500"><FaEnvelope className="text-orange-500 text-[10px]"/> {booking.email}</p>
                  <p className="flex items-center gap-2 text-xs font-bold text-slate-500"><FaPhone className="text-orange-500 text-[10px]"/> {booking.phone}</p>
                </div>
              </div>
            </div>

            {/* Trip Info */}
            <div className="space-y-4">
              <label className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                <FaMapLocationDot className="text-blue-900" /> Trip Details
              </label>
              <div className="bg-white p-6 rounded-3xl border border-blue-50">
                <p className="text-2xl font-black text-blue-900 italic uppercase tracking-tight">{booking.trip}</p>
                <div className="mt-3">
                  <span className="inline-flex items-center gap-2 bg-blue-50 px-3 py-1 rounded-full text-[10px] font-black text-blue-900 uppercase">
                    <FaUsers className="text-orange-500" /> {booking.persons} Pax
                  </span>
                </div>
              </div>
            </div>

            {/* Dates */}
            <div className="space-y-4">
              <label className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                <FaCalendarDays className="text-blue-900" /> Timeline
              </label>
              <div className="flex gap-3">
                <div className="flex-1 bg-white p-4 rounded-3xl border border-blue-50 text-center">
                  <p className="text-[8px] font-black text-slate-300 uppercase mb-1">Booked On</p>
                  <p className="text-xs font-black text-blue-900">{booking.bookingDate}</p>
                </div>
                <div className="flex-1 bg-orange-500 p-4 rounded-3xl text-center shadow-lg shadow-orange-500/20">
                  <p className="text-[8px] font-black text-orange-100 uppercase mb-1">Departure</p>
                  <p className="text-xs font-black text-white">{booking.travelDate}</p>
                </div>
              </div>
            </div>

            {/* Payment Section */}
            <div className="space-y-4">
              <label className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                <FaIndianRupeeSign className="text-blue-900" /> Financials
              </label>
              <div className="bg-blue-900 p-5 rounded-3xl flex items-center justify-between shadow-xl shadow-blue-900/10">
                <div>
                  <p className="text-[8px] font-black text-blue-300 uppercase tracking-widest">Net Amount</p>
                  <p className="text-2xl font-black text-white italic">₹{booking.amount}</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-2xl text-[10px] font-black text-emerald-400 uppercase tracking-widest">
                  {booking.paymentStatus}
                </div>
              </div>
            </div>

          </div>

          {/* ACTIONS */}
          <div className="grid grid-cols-2 gap-4 mt-10 pt-8 border-t border-blue-50">
            <motion.button whileTap={{ scale: 0.95 }} className="py-4 rounded-2xl bg-red-50 text-red-600 font-black uppercase text-[10px] tracking-widest hover:bg-red-500 hover:text-white transition-all">
              Cancel Trip
            </motion.button>
            <motion.button whileTap={{ scale: 0.95 }} className="py-4 rounded-2xl bg-blue-900 text-white font-black uppercase text-[10px] tracking-widest shadow-lg shadow-blue-900/20 hover:bg-orange-500 transition-all">
              Process Refund
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BookingDetails;